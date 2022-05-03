import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditorContainer = styled.div`
  flex-basis: 83%;
  max-height: calc(99vh - 53px);
  overflow: auto;
  display: flex;
  justify-content: ${(props) => (props.displayItem ? "flex-start" : "center")};
  align-items: ${(props) => (props.displayItem ? "flex-start" : "flex-start")};

  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.sidebarBody};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.borderColor};
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.borderColor};
  }
  ::-webkit-scrollbar:horizontal {
    height: 8px;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    height: 8px;
  }
`;

export const SidebarContainer = styled.div`
  flex-basis: 25%;
  max-width: 340px;
`;
