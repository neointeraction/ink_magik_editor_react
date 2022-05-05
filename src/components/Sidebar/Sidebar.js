import React, { useContext } from "react";

import ShapeObjectPanel from "./panels/ShapeObjectPanel";
import CanvasPanel from "./panels/CanvasPanel";
import ImagePanel from "./panels/ImagePanel";

import { SidebarContainer } from "./sidebar.styles";

import { EditorContext } from "../../context/EditorContext";
import { ObjectContext } from "../../context/ObjectContext";
import { ImageContext } from "../../context/ImageContext";

const Sidebar = ({ panelId }) => {
  const [context] = useContext(EditorContext);
  const [contextObject] = useContext(ObjectContext);
  const [contextImage] = useContext(ImageContext);

  const renderPanels = () => {
    switch (panelId) {
      case "object/shape":
        return (
          <ShapeObjectPanel contextObject={contextObject} context={context} />
        );
      case "image":
        return <ImagePanel contextImage={contextImage} context={context} />;
      default:
        return <CanvasPanel context={context} />;
    }
  };

  return <SidebarContainer>{renderPanels()}</SidebarContainer>;
};

export default Sidebar;
