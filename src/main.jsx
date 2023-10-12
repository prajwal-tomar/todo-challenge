import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllTasksList from "./components/AllTasksList";
import ActiveTasksList from "./components/ActiveTasksList";
import CompletedTasksList from "./components/CompletedTasksList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <AllTasksList />,
      },
      {
        path: "active",
        element: <ActiveTasksList />,
      },
      {
        path: "completed",
        element: <CompletedTasksList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
