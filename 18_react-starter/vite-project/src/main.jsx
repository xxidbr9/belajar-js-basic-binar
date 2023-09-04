import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const target = document.getElementById("root");
const root = ReactDOM.createRoot(target);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
