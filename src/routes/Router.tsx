import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingPages from "../pages/Home/LandingPages";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LandingPages />,
      },
    ],
  },
]);
