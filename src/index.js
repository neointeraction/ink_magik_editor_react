import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css";

import { EditorProvider } from "./context/EditorContext";
import { ObjectProvider } from "./context/ObjectContext";

ReactDOM.render(
  <React.StrictMode>
    <EditorProvider>
      <ObjectProvider>
        <App />
      </ObjectProvider>
    </EditorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
