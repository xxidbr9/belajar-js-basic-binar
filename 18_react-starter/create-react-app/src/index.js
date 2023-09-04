import React from "react";
import ReactDom from "react-dom/client";
import App from "./app";

// ini mengambil target dom yang akan di inject
const target = document.getElementById("binar");

// root membuat endpoint render
const root = ReactDom.createRoot(target);

// me-render component html
root.render(<App />);

// <App /> => sama dengan => <App> </App> atau langsung menutup tag nya
