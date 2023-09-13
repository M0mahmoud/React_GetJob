import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/user.context";
import "./index.css";
import { router } from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // TODO
  // <React.StrictMode>
  <UserProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </UserProvider>
  // </React.StrictMode>
);
