import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  fontFamily: `"Montserrat", sans-serif;`,
  body: "#e8e8e8",
  fontColor: "#262626",
  sidebarBody: "#f8f8f8",
  borderColor: "#eaeaea",
  inputBg: "#ffffff",
  iconColor: "#bdbdbd",
};

export const darkTheme = {
  fontFamily: `"Montserrat", sans-serif;`,
  body: "#2f2f2f",
  fontColor: "#e1e1e1",
  sidebarBody: "#1e1e1e",
  borderColor: "#393939",
  inputBg: "#393939",
  iconColor: "#e1e1e1",
};

export const GlobalStyles = createGlobalStyle`

body {
  font-family: "Montserrat", sans-serif !important;
    background: ${(props) => props.theme.body} ;
    transition: 0.3s all ease-in-out,
}
`;
