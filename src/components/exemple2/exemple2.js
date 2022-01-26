import React, { useState } from "react";
import { Canvas, Node, NodeData, EdgeData, hasLink, createEdgeFromNodes, Icon, Label } from "reaflow";


const Exemple2 = ()  => {
    const [nodes, setNodes] = useState([
      {
        id: 'DOC1',
        text: '',
        height: 50,
        width: 50,
        icon: {
            url: 'https://icons555.com/images/icons-gray/image_icon_document_pic_512x512.png',
            height: 25,
            width: 25
          }
      },
      {
        id: 'DOC2',
        text: '',
        height: 50,
        width: 50,
        icon: {
            url: 'https://icons555.com/images/icons-gray/image_icon_document_pic_512x512.png',
            height: 25,
            width: 25
          }
      },
      {
        id: 'P1',
        text: '',
        height: 50,
        width: 50,
        icon: {
            url: 'https://icon-library.com/images/white-icon-png/white-icon-png-1.jpg',
            height: 25,
            width: 25

        }
      },
      {
        id: 'P2',
        text: '',
        height: 50,
        width: 50,
        icon: {
            url: 'https://icon-library.com/images/white-icon-png/white-icon-png-1.jpg',
            height: 25,
            width: 25

        }
      },
      {
        id: 'P3',
        text: '',
        height: 50,
        width: 50,
        icon: {
            url: 'https://icon-library.com/images/white-icon-png/white-icon-png-1.jpg',
            height: 25,
            width: 25

        }
      },
      {
        id: 'P4',
        text: '',
        height: 50,
        width: 50,
        icon: {
            url: 'https://icon-library.com/images/white-icon-png/white-icon-png-1.jpg',
            height: 25,
            width: 25

        }
      },
      {
        id: 'INFO1',
        text: '   20 166 525',
        label: '   20 166 525',
        height: 50,
        width: 50,
        icon: {
            url: 'https://www.pngkit.com/png/full/94-943942_593-transparent-background-phone-icon-white.png',
            height: 25,
            width: 25

        }
      },
      {
        id: 'INFO2',
        text: '   Paris, France',
        label: '   Paris, France',
        height: 50,
        width: 50,
        icon: {
            url: 'https://icon-library.com/images/address-icon-white/address-icon-white-28.jpg',
            height: 25,
            width: 25

        }
      },
      {
        id: 'INFO3',
        text: '   20 166 525',
        label: '   20 166 525',
        height: 50,
        width: 50,
        icon: {
            url: 'https://www.pngkit.com/png/full/94-943942_593-transparent-background-phone-icon-white.png',
            height: 25,
            width: 25

        }
      },
      {
        id: 'INFO4',
        text: '   Paris, France',
        label: '   Paris, France',
        height: 50,
        width: 50,
        icon: {
            url: 'https://icon-library.com/images/address-icon-white/address-icon-white-28.jpg',
            height: 25,
            width: 25

        }
      }
    ]);
  
    const [edges, setEdges] = useState([
      {
        id: 'DOC1-P1',
        from: 'DOC1',
        to: 'P1'
      },
      {
        id: 'DOC1-P2',
        from: 'DOC1',
        to: 'P2'
      },
      {
        id: 'DOC2-P3',
        from: 'DOC2',
        to: 'P3'
      },
      {
        id: 'DOC2-P4',
        from: 'DOC2',
        to: 'P4'
      },
      {
        id: 'P4-INFO1',
        from: 'P4',
        to: 'INFO1'
      },
      {
        id: 'P1-INFO1',
        from: 'P1',
        to: 'INFO1'
      },
      {
        id: 'P1-INFO2',
        from: 'P1',
        to: 'INFO2'
      },
      {
        id: 'P2-INFO3',
        from: 'P2',
        to: 'INFO3'
      },
      {
        id: 'P2-INFO4',
        from: 'P2',
        to: 'INFO4'
      }
    ]);
  
    return (
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <Canvas
          nodes={nodes}
          edges={edges}
          direction="RIGHT"
          node={<Node dragType="node" icon={<Icon/>} style={{ stroke: '#1a192b',  strokeWidth: 1 }}
          label={<Label style={{ fill: 'black' }} />} />}
          onCanvasClick={(e) => console.log(e) }
          onNodeLinkCheck={(_event, from, to) => {
            if (from.id === to.id) {
              return false;
            }
  
            if (hasLink(edges, from, to)) {
              return false;
            }
  
            return true;
          }}
          onNodeLink={(_event, from, to) => {
            const newEdges = edges.filter(e => e.to !== from.id);
  
            setEdges([
              ...newEdges,
              createEdgeFromNodes(to, from)
            ]);
          }}
        />
      </div>
    );
  }

export default Exemple2