import React, { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";

import Navbar from "./components/Navbar";
import Editor from "./pages/Editor";
import Sidebar from "./components/Sidebar";

import {
  BodyContainer,
  EditorContainer,
  SidebarContainer,
} from "./assets/css/main.styles";

import { EditorContext } from "./context/EditorContext";

function App() {
  const [context] = useContext(EditorContext);
  const [theme, setTheme] = useState("dark");
  const [panelId, setPanelId] = useState(null);
  console.log(context.editorZoomDisplay, "context.editorZoomDisplay");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar setTheme={setTheme} setPanelId={setPanelId} />
      <BodyContainer>
        <EditorContainer displayItem={context.editorZoomDisplay}>
          <Editor setPanelId={setPanelId} />
        </EditorContainer>
        <SidebarContainer>
          <Sidebar panelId={panelId} />
        </SidebarContainer>
      </BodyContainer>
    </ThemeProvider>
  );
}

export default App;
