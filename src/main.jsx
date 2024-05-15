import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { GlobalProvider } from "./context/GlobalContext";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./Routes";

const router = createBrowserRouter(routes);
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>
);
