import React, { useContext } from "react";

import ShapeObjectPanel from "./panels/ShapeObjectPanel";
import CanvasPanel from "./panels/CanvasPanel";

import { SidebarContainer } from "./sidebar.styles";

import { EditorContext } from "../../context/EditorContext";
import { ObjectContext } from "../../context/ObjectContext";

const Sidebar = ({ panelId }) => {
  const [context] = useContext(EditorContext);
  const [contextObject] = useContext(ObjectContext);
  console.log(context.canvasCount, "EditorContext");

  const renderPanels = () => {
    switch (panelId) {
      case "object/shape":
        return (
          <ShapeObjectPanel contextObject={contextObject} context={context} />
        );
      default:
        return <CanvasPanel context={context} />;
    }
  };

  return <SidebarContainer>{renderPanels()}</SidebarContainer>;
};

export default Sidebar;
