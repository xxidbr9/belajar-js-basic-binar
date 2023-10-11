import React from "react";
import ReactDOM from "react-dom/client";
import { Login, Profile, Register } from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile />
  },
  {
    path: "/sign-up",
    element: <Register />
  },
  {
    path: "/sign-in",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
