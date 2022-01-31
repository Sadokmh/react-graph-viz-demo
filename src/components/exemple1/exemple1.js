import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { CONTENT, documentIcon, orgChart } from "../utils/utils";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "./custom-tree.css";
import {
  CustomMenu,
  CustomModal,
  IconAddress,
  IconDocument,
  IconParagraph,
  IconPerson,
  IconPhone,
} from "../utils/components";
import Modal from "react-modal";
import { DocumentViewer } from "react-documents";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.

export default function Exemple1() {
  const [data, setData] = useState(orgChart);
  const [dropdownState, setDropdwonState] = useState(false);
  const [node, setNode] = useState("");
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [pNode, setPNode] = useState("");
  const [dNode, setDNode] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [doc, setDoc] = useState(null);
  const [selectionMode, setSelectionMode] = useState(false);

  const onNodeClick = (e) => {
    if (e.data && e.data.content) {
    }
  };

  const onSelectNode = (node) => {
    const index = selectedNodes.findIndex(
      (item) => item.__rd3t.id === node.__rd3t.id
    );
    console.log(index);
    if (index >= 0) {
      const filtredNodes = selectedNodes.filter(
        (item) => item.__rd3t.id !== node.__rd3t.id
      );
      setSelectedNodes(filtredNodes);
    } else {
      setSelectedNodes([...selectedNodes, node]);
    }
  };

  const getNodeIcon = (nodeDatum, toggleNode) => {
    switch (nodeDatum.type) {
      case "D":
        return (
          <IconDocument
            toggleNode={toggleNode}
            node={nodeDatum}
            setNode={(e) => onSelectNode(e)}
            activeNode={node}
            selectedNodes={selectedNodes}
            selectionMode={selectionMode}
          />
        );
      case "P":
        return (
          <IconParagraph
            toggleNode={toggleNode}
            node={nodeDatum}
            setNode={(e) => onSelectNode(e)}
            activeNode={node}
            selectedNodes={selectedNodes}
            selectionMode={selectionMode}
          />
        );
      case "I_PHONE":
        return (
          <IconPhone
            node={nodeDatum}
            setNode={(e) => onSelectNode(e)}
            activeNode={node}
            selectedNodes={selectedNodes}
            selectionMode={selectionMode}
          />
        );
      case "I_ADDRESS":
        return (
          <IconAddress
            node={nodeDatum}
            setNode={(e) => onSelectNode(e)}
            activeNode={node}
            selectedNodes={selectedNodes}
            selectionMode={selectionMode}
          />
        );
      case "I_PERSON":
        return (
          <IconPerson
            node={nodeDatum}
            setNode={(e) => onSelectNode(e)}
            activeNode={node}
            selectedNodes={selectedNodes}
            selectionMode={selectionMode}
          />
        );

      default:
        return <IconDocument node={nodeDatum} />;
    }
  };

  const selectParagraphNode = (node) => {
    setPNode(node.name);
    setDNode("");
    setDropdwonState(!dropdownState);
  };

  const selectDocumentNode = (node) => {
    setPNode("");
    setDNode(node.name);
    setDropdwonState(!dropdownState);
  };

  const showContent = (node) => {
    setContent(node.content);
    setShowModal(true);
  };

  const showDocument = (node) => {
    setDoc(node.url);
    setShowModal(true);
  };

  const mergeNodes = (node1, node2) => {
    if (node1.type !== node2.type) {
      console.log("Nodes from different types cannot be merged !");
      return;
    }
    const childs = [];
    const content = `${node1.content}\n${node2.content}`;
    node1.children.forEach((item) => {
      childs.push(item);
    });
    node2.children.forEach((item) => {
      childs.push(item);
    });
    const newNode = {
      name: "Merged paragraph",
      children: childs,
      content,
      type: "P",
    };
    node1.children = [newNode];
    node2.children = [newNode];
    const ok = data.children.filter(
      (item) => item.name !== node1.name || item.name !== node2.name
    );
    const newData = {
      ...data,
      children: [...ok, newNode],
    };
    setData(newData);
  };

  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => (
    <g>
      {getNodeIcon(nodeDatum, toggleNode)}
      <foreignObject {...foreignObjectProps}>
        <div className="node_container">
          {nodeDatum.type === "P" && (
            <div>
              <div className="node_name node-margin">
                <a
                  role="button"
                  style={{ textAlign: "center" }}
                  onClick={() => selectParagraphNode(nodeDatum)}
                >
                  {nodeDatum.name}
                </a>
                {dropdownState && pNode === nodeDatum.name && (
                  <div className="custom-dropdown">
                    <ul>
                      <li onClick={() => showContent(nodeDatum)}>
                        Show content
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {(!dropdownState || pNode !== nodeDatum.name) && (
                <>
                  <div className="node_contains">
                    <span style={{ textAlign: "center" }}>Contains: </span>
                  </div>
                  {nodeDatum.children.map((item) => (
                    <div className="node_content" key={item.name}>
                      <span> • {item.attributes.type}</span>
                      <span> • {item.attributes.name}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
          {nodeDatum.type === "D" && (
            <div>
              <div className="node_name">
                <a
                  role="button"
                  style={{ textAlign: "center" }}
                  onClick={() => selectDocumentNode(nodeDatum)}
                >
                  {nodeDatum.name}
                </a>
              </div>
              {dropdownState && dNode === nodeDatum.name && (
                <div className="custom-dropdown">
                  <ul>
                    <li onClick={() => showDocument(nodeDatum)}>
                      Show document
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
          {nodeDatum.type.includes("I_") && (
            <div>
              <div className="leaf_name">
                <a
                  role="button"
                  style={{ textAlign: "center" }}
                  onClick={() => selectDocumentNode(nodeDatum)}
                >
                  {nodeDatum.name}
                </a>
              </div>
              {dropdownState && dNode === nodeDatum.name && (
                <div className="custom-dropdown">
                  <ul>
                    <li onClick={() => showContent(nodeDatum)}>
                      Show document
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </foreignObject>
    </g>
  );

  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  const closeModal = () => {
    setShowModal(false);
    setContent("");
    setDoc(null);
  };

  useEffect(() => {
    setSelectedNodes([]);
  }, [selectionMode]);

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div className="container">
      <CustomMenu selectionMode={(mode) => setSelectionMode(mode)} />
      <div id="treeWrapper" style={{ width: "100em", height: "100em" }}>
        <Tree
          data={data}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          separation={{ nonSiblings: 1, siblings: 2 }}
          onNodeClick={(e) => onNodeClick(e)}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
        />
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          {content && <div>{content}</div>}
          {doc && (
            <DocumentViewer
              queryParams="hl=Nl"
              url={doc}
              overrideLocalhost="https://react-doc-viewer.firebaseapp.com/"
            />
          )}
        </Modal>
      </div>
    </div>
  );
}
