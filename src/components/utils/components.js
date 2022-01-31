import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export const IconDocument = ({
  toggleNode,
  node,
  setNode,
  activeNode,
  selectedNodes,
  selectionMode,
}) => {
  const [isNodeSelected, setNodeSelected] = useState(false);

  useEffect(() => {
    if (selectedNodes) {
      const index = selectedNodes.findIndex(
        (item) => item.__rd3t.id === node.__rd3t.id
      );
      if (index >= 0) {
        setNodeSelected(true);
      } else {
        setNodeSelected(false);
      }
    }
  }, [selectedNodes]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="-35"
      y="-25"
      width="55"
      height="55"
      enableBackground="new 0 0 299.998 299.998"
      version="1.1"
      viewBox="0 0 299.998 299.998"
      xmlSpace="preserve"
      onClick={(e) => {
        setNode(node);
        if (!selectionMode) {
          toggleNode();
        }
      }}
      className={isNodeSelected && selectionMode ? "node-selected" : ""}
    >
      <path
        fill="#be5353"
        d="M149.995.001C67.156.001 0 67.16 0 149.999s67.156 149.997 149.995 149.997 150.003-67.161 150.003-149.997C299.997 67.157 232.834.001 149.995.001zm67.21 217.203c0 10.066-8.159 18.225-18.223 18.225h-97.967c-10.068 0-18.225-8.159-18.225-18.225V82.79c0-10.066 8.159-18.225 18.225-18.225h76.892v36.45h39.298v116.189zM185.688 93.232V64.563l31.517 28.669h-31.517z"
      ></path>
    </svg>
  );
};

export const IconParagraph = ({
  toggleNode,
  node,
  setNode,
  activeNode,
  selectedNodes,
  selectionMode,
}) => {
  const [isNodeSelected, setNodeSelected] = useState(false);

  useEffect(() => {
    if (selectedNodes) {
      const index = selectedNodes.findIndex(
        (item) => item.__rd3t.id === node.__rd3t.id
      );
      if (index >= 0) {
        setNodeSelected(true);
      } else {
        setNodeSelected(false);
      }
    }
  }, [selectedNodes]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="-35"
      y="-25"
      width="40"
      height="40"
      enableBackground="new 1 1 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      onClick={(e) => {
        setNode(node);
        if (!selectionMode) {
          toggleNode();
        }
      }}
      className={isNodeSelected && selectionMode ? "node-selected" : ""}
    >
      <path
        fill="#be5353"
        d="M149.333 181.333h64c11.797 0 21.333 9.557 21.333 21.333v170.667h42.667V202.667c0-11.776 9.536-21.333 21.333-21.333h64v-42.667H149.333v42.666z"
      ></path>
      <path
        fill="#be5353"
        d="M490.667 10.667H21.333C9.536 10.667 0 20.224 0 32v448c0 11.776 9.536 21.333 21.333 21.333h469.333c11.797 0 21.333-9.557 21.333-21.333V32c.001-11.776-9.535-21.333-21.332-21.333zm-85.334 192c0 11.776-9.536 21.333-21.333 21.333h-64v170.667c0 11.776-9.536 21.333-21.333 21.333h-85.333C201.536 416 192 406.443 192 394.667V224h-64c-11.797 0-21.333-9.557-21.333-21.333v-85.333C106.667 105.557 116.203 96 128 96h256c11.797 0 21.333 9.557 21.333 21.333v85.334z"
      ></path>
    </svg>
  );
};

export const IconPhone = ({
  node,
  setNode,
  activeNode,
  selectedNodes,
  selectionMode,
}) => {
  const [isNodeSelected, setNodeSelected] = useState(false);

  useEffect(() => {
    if (selectedNodes) {
      const index = selectedNodes.findIndex(
        (item) => item.__rd3t.id === node.__rd3t.id
      );
      if (index >= 0) {
        setNodeSelected(true);
      } else {
        setNodeSelected(false);
      }
    }
  }, [selectedNodes]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="-5"
      y="-15"
      width="40"
      height="40"
      enableBackground="new 0 0 53.942 53.942"
      version="1.1"
      viewBox="0 0 53.942 53.942"
      xmlSpace="preserve"
      onClick={() => setNode(node)}
      className={isNodeSelected && selectionMode ? "node-selected" : ""}
    >
      <path
        fill="#fdd1d1"
        d="M53.364 40.908c-2.008-3.796-8.981-7.912-9.288-8.092-.896-.51-1.831-.78-2.706-.78-1.301 0-2.366.596-3.011 1.68-1.02 1.22-2.285 2.646-2.592 2.867-2.376 1.612-4.236 1.429-6.294-.629L17.987 24.467c-2.045-2.045-2.233-3.928-.632-6.291.224-.309 1.65-1.575 2.87-2.596.778-.463 1.312-1.151 1.546-1.995.311-1.123.082-2.444-.652-3.731-.173-.296-4.291-7.27-8.085-9.277a4.947 4.947 0 00-2.306-.573 4.908 4.908 0 00-3.49 1.445L4.7 3.986C.686 7.999-.767 12.548.379 17.506c.956 4.132 3.742 8.529 8.282 13.068l14.705 14.705c5.746 5.746 11.224 8.66 16.282 8.66h.001c3.72 0 7.188-1.581 10.305-4.698l2.537-2.537a4.908 4.908 0 00.873-5.796z"
      ></path>
    </svg>
  );
};

export const IconAddress = ({
  node,
  setNode,
  activeNode,
  selectedNodes,
  selectionMode,
}) => {
  const [isNodeSelected, setNodeSelected] = useState(false);

  useEffect(() => {
    if (selectedNodes) {
      const index = selectedNodes.findIndex(
        (item) => item.__rd3t.id === node.__rd3t.id
      );
      if (index >= 0) {
        setNodeSelected(true);
      } else {
        setNodeSelected(false);
      }
    }
  }, [selectedNodes]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="-20"
      y="-25"
      width="60"
      height="60"
      viewBox="0 0 100 100"
      onClick={() => setNode(node)}
      className={isNodeSelected && selectionMode ? "node-selected" : ""}
    >
      <path
        fill="#fdd1d1"
        d="M49 18.92a23.74 23.74 0 00-23.73 23.85c0 16.48 17 31.59 22.23 35.59a2.45 2.45 0 003.12 0c5.24-4.12 22.1-19.11 22.1-35.59A23.74 23.74 0 0049 18.92zm0 33.71a10 10 0 1110-10 10 10 0 01-10 10z"
      ></path>
    </svg>
  );
};

export const IconPerson = ({
  node,
  setNode,
  activeNode,
  selectedNodes,
  selectionMode,
}) => {
  const [isNodeSelected, setNodeSelected] = useState(false);

  useEffect(() => {
    console.log(selectedNodes);
    if (selectedNodes) {
      const index = selectedNodes.findIndex(
        (item) => item.__rd3t.id === node.__rd3t.id
      );
      if (index >= 0) {
        setNodeSelected(true);
      } else {
        setNodeSelected(false);
      }
    }
  }, [selectedNodes]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="-25"
      y="-25"
      width="40"
      height="40"
      viewBox="0 0 512 512"
      className={
        "person-icon " +
        (isNodeSelected && selectionMode ? "node-selected" : "")
      }
      onClick={() => setNode(node)}
    >
      <path
        fill="#fdd1d1"
        d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"
      ></path>
    </svg>
  );
};

export const CustomMenu = ({ selectionMode }) => {
  const [isBold, setBold] = useState(true);
  const [isItalic, setItalic] = useState(true);
  const [isUnderline, setUnderline] = useState(false);

  useEffect(() => {
    selectionMode(isBold);
  }, [isBold]);

  return (
    <Menu menuButton={<MenuButton>Options</MenuButton>}>
      <MenuItem
        type="checkbox"
        checked={isBold}
        onClick={(e) => setBold(e.checked)}
      >
        Selection
      </MenuItem>
      <MenuItem
        type="checkbox"
        checked={isItalic}
        onClick={(e) => setItalic(e.checked)}
      >
        Other feature
      </MenuItem>
      <MenuItem
        type="checkbox"
        checked={isUnderline}
        onClick={(e) => setUnderline(e.checked)}
      >
        Some other feature
      </MenuItem>
    </Menu>
  );
};
