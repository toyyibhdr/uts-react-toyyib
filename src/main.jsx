import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./Pages/Dashboard";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailProduk from "./Pages/DetailProduk/index.jsx";
import About from "./Pages/About";
import Shop from "./Pages/Shop";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/detail-produk/:idProduk",
        element: <DetailProduk />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
