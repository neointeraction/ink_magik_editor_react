import styled from "styled-components";

export const NavbarContainer = styled.div`
  padding: 12px 20px;
  background: #262626;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavbarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 20px;
`;

export const SwitchContainer = styled.div`
  transform: rotate(-90deg);
  margin-left: 10px;
`;

export const List = styled.ul`
  margin-bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const NavbarCenter = styled.div`
  flex-grow: 1;
  ${ListItem} {
    width: 26px;
    height: 26px;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    cursor: pointer;
    :hover {
      background: rgba(144, 144, 144, 0.2);
      transition: 0.3s all ease-in-out;
      z-index: 2;
      .shape-icon {
        fill: #1caaf4;
        transition: 0.3s all ease-in-out;
        z-index: 0;
      }
    }
  }
`;
