import React, { useState } from "react";
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

import { EditorProvider } from "./context/EditorContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const [panelId, setPanelId] = useState(null);

  return (
    <EditorProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navbar setTheme={setTheme} setPanelId={setPanelId} />
        <BodyContainer>
          <EditorContainer>
            <Editor setPanelId={setPanelId} />
          </EditorContainer>
          <SidebarContainer>
            <Sidebar panelId={panelId} />
          </SidebarContainer>
        </BodyContainer>
      </ThemeProvider>
    </EditorProvider>
  );
}

export default App;
