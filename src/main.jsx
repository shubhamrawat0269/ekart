import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  NoPage,
  HomePage,
  ProductInfo,
  CartPage,
  AllProduct,
  Signup,
  Login,
  UserDashboard,
} from "./pages";

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
  {
    path: "/cart",
    element: <CartPage />,
    // errorElement: <Nopage />,
  },
  {
    path: "/allproduct",
    element: <AllProduct />,
    // errorElement: <Nopage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    // errorElement: <Nopage />,
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: <Nopage />,
  },
  {
    path: "/user-dashboard",
    element: <UserDashboard />,
    // errorElement: <Nopage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
