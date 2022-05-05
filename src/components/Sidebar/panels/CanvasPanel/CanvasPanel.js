import React, { useState } from "react";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  CanvasPanelContainer,
  PanelSection,
  InputContainer,
  Input,
  LastEdited,
  CanvasList,
  AddCanvas,
  SliderContainer,
  SidebarTitle,
  Label,
  ColorPickerBox,
  LabelBlock,
  BgPickerBox,
  QuickTour,
  QuickTourContent,
  TitlePink,
  PanelText,
  QuickTourVideo,
  LinkText,
  ContactSection,
} from "../../sidebar.styles";

import ColorPicker from "../../../ColorPicker";

import AddIcon from "../../../../assets/images/Add.svg";

const CanvasPanel = ({ context }) => {
  // const [thumbnail, setThumbnail] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [colorId, setColorId] = useState("#fff");

  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   // nextArrow: ">",
  //   // prevArrow: "<",
  // };

  // useEffect(() => {
  //   generateThumbnail();
  // }, [context.canvasInstance]);

  // const generateThumbnail = () => {
  //   context.canvasInstance?.map((item) => {
  //     setThumbnail([
  //       ...thumbnail,
  //       item.toDataURL({
  //         format: "png",
  //         left: 100,
  //         top: 100,
  //         width: 60,
  //         height: 60,
  //       }),
  //     ]);
  //   });
  // };

  const changeCanvasColor = (color) => {
    context.canvas[context.checkCanvas(context.canvasId)].backgroundColor =
      color;
    context.canvas[context.checkCanvas(context.canvasId)].renderAll();
  };

  const togglePallete = () => {
    setToggle(!toggle);
  };

  const handleChangeComplete = (color) => {
    setColorId(color.hex);
    changeCanvasColor(color.hex);
  };

  const changeCanvasBg = (bg) => {
    context.canvas[context.checkCanvas(context.canvasId)]?.setBackgroundImage(
      bg,
      context.canvas[context.checkCanvas(context.canvasId)].renderAll.bind(
        context.canvas[context.checkCanvas(context.canvasId)]
      )
    );
  };

  return (
    <CanvasPanelContainer>
      <PanelSection>
        <InputContainer>
          <Input type="text" placeholder="Project Name" />
        </InputContainer>
        <LastEdited>
          <p>Last Edited 4 Jul 6:30pm</p>
          <h6>Facebook Cover (820x360)</h6>
        </LastEdited>
        <CanvasList>
          <AddCanvas onClick={context.addCanvas}>
            <img src={AddIcon} alt="" />
          </AddCanvas>
          <SliderContainer>
            {/* {thumbnail.map((item) => (
              <div>
                <img src={item} alt="" />
              </div>
            ))} */}
            {/* <Slider {...settings}>
              {thumbnail.map((item, index) => (
                <div key={index}>
                  <img src={item} alt="" />
                </div>
              ))}
            </Slider> */}
          </SliderContainer>
        </CanvasList>
      </PanelSection>
      <PanelSection>
        <SidebarTitle>BACKGROUND</SidebarTitle>
        <LabelBlock>
          <Label>Fill</Label>
          <ColorPickerBox bg={colorId} onClick={togglePallete} />
          {toggle && (
            <ColorPicker
              color={colorId}
              onChangeComplete={handleChangeComplete}
            />
          )}
        </LabelBlock>
        <LabelBlock>
          <Label>BACKGROUND IMAGE</Label>
          <BgPickerBox
            bgImg={"https://picsum.photos/seed/picsum/200/300"}
            onClick={() =>
              changeCanvasBg("https://picsum.photos/seed/picsum/600/400")
            }
          />
        </LabelBlock>
      </PanelSection>
      <PanelSection>
        <QuickTour>
          <QuickTourContent>
            <TitlePink>QUICK TOUR</TitlePink>
            <PanelText>
              Learn about InkMagik’s Features and find out it’s capabilities!
            </PanelText>
          </QuickTourContent>
          <QuickTourVideo></QuickTourVideo>
        </QuickTour>
      </PanelSection>
      <ContactSection>
        <SidebarTitle>FOR QUERIES AND FEEDBACKS</SidebarTitle>
        <LinkText>hello@inkmagik.com</LinkText>
      </ContactSection>
    </CanvasPanelContainer>
  );
};

export default CanvasPanel;
