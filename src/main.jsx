import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import routes from "./Routes";
import { Toaster } from "react-hot-toast";

import { GlobalProvider } from "./context/GlobalContext";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>
      </GlobalProvider>
    </Provider>
  </React.StrictMode>
);
