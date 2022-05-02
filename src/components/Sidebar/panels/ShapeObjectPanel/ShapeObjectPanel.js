import React, { useState, useEffect, useCallback } from "react";

import SettingsPanel from "./panel/SettingsPanel";

import {
  PanelSection,
  SidebarTitle,
  ObjectSelectList,
  ObjectListItem,
  ListButton,
} from "../../sidebar.styles";

import { ReactComponent as Line } from "../../../../assets/icons/Line.svg";
import { ReactComponent as Circle } from "../../../../assets/icons/circle.svg";
import { ReactComponent as Square } from "../../../../assets/icons/square.svg";
import { ReactComponent as Triangle } from "../../../../assets/icons/triangle.svg";

const ShapeObjectPanel = ({ context }) => {
  useEffect(() => {
    handlePanelToggle();
  }, [context.object?.getActiveObject(), context.showSettingsPanel]);

  const handlePanelToggle = () => {
    context.object?.on("mouse:dblclick", function (e) {
      context.object?.getActiveObject()
        ? context.setShowSettingsPanel(true)
        : context.setShowSettingsPanel(false);
    });
  };

  return (
    <div>
      {context.showSettingsPanel ? (
        <SettingsPanel />
      ) : (
        <PanelSection>
          <SidebarTitle>BASIC SHAPES</SidebarTitle>
          <ObjectSelectList>
            <ObjectListItem>
              <ListButton>
                <Line />
              </ListButton>
            </ObjectListItem>
            <ObjectListItem>
              <ListButton
                onClick={() => {
                  context.addCircle(
                    context.canvas[
                      context.canvasId
                        ? context.checkCanvas(context.canvasId)
                        : 0
                    ]
                  );
                }}
              >
                <Circle />
              </ListButton>
            </ObjectListItem>
            <ObjectListItem>
              <ListButton
                onClick={() => {
                  context.addRect(
                    context.canvas[
                      context.canvasId
                        ? context.checkCanvas(context.canvasId)
                        : 0
                    ]
                  );
                }}
              >
                <Square />
              </ListButton>
            </ObjectListItem>
            <ObjectListItem>
              <ListButton>
                <Triangle />
              </ListButton>
            </ObjectListItem>
          </ObjectSelectList>
        </PanelSection>
      )}
    </div>
  );
};

export default ShapeObjectPanel;
