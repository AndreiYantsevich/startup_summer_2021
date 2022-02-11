import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "./store";
import { App } from "./components";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
