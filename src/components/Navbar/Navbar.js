import React, { useState } from "react";
import Switch from "react-switch";

import {
  NavbarContainer,
  NavbarLeft,
  SwitchContainer,
  NavbarCenter,
  List,
  ListItem,
} from "./navbar.styles";

import Logo from "../../assets/images/Ink-Logo.svg";

import { ReactComponent as ObjectShape } from "../../assets/icons/objectShape.svg";

const Sidebar = ({ setTheme, setPanelId }) => {
  const [checked, setChecked] = useState(true);

  // theme-switch

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    checked ? setTheme("light") : setTheme("dark");
  };

  const getMenuId = (id) => {
    setPanelId(id);
  };

  return (
    <NavbarContainer>
      <NavbarLeft>
        <img src={Logo} alt="logo"></img>
        <SwitchContainer>
          <Switch
            handleDiameter={10}
            height={16}
            width={33}
            onChange={handleChange}
            checked={checked}
            className="react-switch"
            offColor="#fff"
            offHandleColor="#2f2f2f"
            onColor="#2f2f2f"
            onHandleColor="#fff"
            uncheckedIcon={null}
            checkedIcon={null}
          />
        </SwitchContainer>
      </NavbarLeft>
      <NavbarCenter>
        <List>
          <ListItem onClick={() => getMenuId("object/shape")}>
            <ObjectShape />
          </ListItem>
        </List>
      </NavbarCenter>
    </NavbarContainer>
  );
};

export default Sidebar;
