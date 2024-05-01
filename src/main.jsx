import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ScrollTop } from "./components";
import { NoPage, HomePage, ProductInfo } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <Nopage />,
  },
  {
    path: "/*",
    element: <NoPage />,
    // errorElement: <Nopage />,
  },
  {
    path: "/productinfo",
    element: <ProductInfo />,
    // errorElement: <Nopage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <ScrollTop> */}
      <RouterProvider router={router} />
      {/* </ScrollTop> */}
    </ThemeProvider>
  </React.StrictMode>
);
