import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditorContainer = styled.div`
  flex-basis: 83%;
  max-height: calc(99vh - 50px);
  overflow: auto;
  /* scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
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
`;

export const SidebarContainer = styled.div`
  flex-basis: 25%;
  max-width: 340px;
`;
