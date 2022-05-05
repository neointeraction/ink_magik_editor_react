import React from "react";

import {
  PanelSection,
  SidebarTitle,
  UploadImageFlex,
  ImageItem,
  UploadButton,
} from "../../sidebar.styles";

import UploadIcon from "../../../../assets/icons/upload.svg";

const ImagePanel = ({ context, contextImage }) => {
  return (
    <div>
      <PanelSection>
        <SidebarTitle>MY IMAGES</SidebarTitle>
        <UploadImageFlex>
          <ImageItem>
            <UploadButton htmlFor="upload-img-btn">
              <img src={UploadIcon} alt="UploadIcon" />
              <span>Upload Images</span>
              <input
                id="upload-img-btn"
                type="file"
                onChange={(e) =>
                  contextImage.uploadImage(
                    e,
                    context.canvas[
                      context.canvasId
                        ? context.checkCanvas(context.canvasId)
                        : 0
                    ]
                  )
                }
              />
            </UploadButton>
          </ImageItem>
        </UploadImageFlex>
      </PanelSection>
    </div>
  );
};

export default ImagePanel;
