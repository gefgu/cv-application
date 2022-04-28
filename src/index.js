import React from "react";
import ReactDOM from "react-dom/client";
import App, { HookApp } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HookApp />
  </React.StrictMode>
);
