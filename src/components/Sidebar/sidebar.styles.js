import styled from "styled-components";

export const SidebarContainer = styled.div`
  padding: 10px 20px;
  background: ${(props) => props.theme.sidebarBody};
  height: calc(100vh - 80px);
`;

export const SidebarTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.fontColor};
  line-height: 1.33;
`;

export const CanvasPanelContainer = styled.div`
  padding-top: 10px;
`;

export const PanelSection = styled.div`
  padding-top: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  background: transparent;
  border: 1px solid transparent;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.fontColor};
  transition: 0.3s all ease-in-out;
  height: 40px;
  display: block;
  padding: 0 10px;
  border: 1px dashed transparent;
  width: -webkit-fill-available;
  outline: none;
  :hover {
    border: 1px dashed ${(props) => props.theme.borderColor};
    transition: 0.3s all ease-in-out;
  }
  :focus {
    background: ${(props) => props.theme.inputBg};
    transition: 0.3s all ease-in-out;
  }
`;

export const LastEdited = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px 0;
  p {
    opacity: 0.5;
    font-size: 10px;
    line-height: 1.33;
    color: ${(props) => props.theme.fontColor};
  }
  h6 {
    font-size: 10px;
    line-height: 1.33;
    color: #1caaf4;
    font-weight: 500;
  }
`;

export const CanvasList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddCanvas = styled.div`
  margin-right: 0px;
  background: ${(props) => props.theme.inputBg};
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  max-width: 75%;
`;

export const LabelBlock = styled.div`
  margin: 20px 0;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const ColorPickerBox = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: ${(props) => props.bg};
  border: 1px solid ${(props) => props.theme.borderColor};
  display: block;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const BgPickerBox = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background-image: url(${(props) => props.bgImg});
  cursor: pointer;
`;

export const QuickTour = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 20px 0;
`;
export const QuickTourContent = styled.div`
  margin: 0;
  flex-basis: 50%;
`;
export const TitlePink = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.33;
  color: #ff408a;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export const PanelText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: ${(props) => props.theme.fontColor};
`;
export const QuickTourVideo = styled.div`
  flex-basis: 40%;
  background: #dddddd;
  padding: 10px;
  height: 60px;
`;

export const LinkText = styled.a`
  margin-top: 10px;
  display: block;
  font-weight: 600;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
`;

export const ContactSection = styled.div`
  margin: 20px 0;
`;

export const ObjectSelectList = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const ObjectListItem = styled.li`
  flex-basis: 25%;
  border-radius: 4px;
  margin: 5px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const ListButton = styled.div`
  background: ${(props) => props.theme.inputBg};
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 4px;
  padding: 10px 0;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  .object-icon {
    stroke: ${(props) => props.theme.iconColor};
  }
  :hover {
    border: 1px solid #1caaf4;
    transition: 0.3s all ease-in-out;
    .object-icon {
      stroke: #ff408a;
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const UploadImageFlex = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const ImageItem = styled.li`
  flex-basis: 25%;
  border-radius: 4px;
  margin: 5px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const UploadButton = styled.label`
  cursor: pointer;
  background-color: #0ba5f2;
  font-size: 11px;
  font-weight: 400;
  color: #fff;
  line-height: 1.29;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px 10px;
  border-radius: 4px;
  input {
    display: none;
  }
  img {
    width: fit-content;
  }

  span {
    flex-basis: 80%;
    display: block;
  }
`;
