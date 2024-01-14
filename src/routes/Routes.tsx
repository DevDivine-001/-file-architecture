import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingPages from "../pages/Home/LandingPages";

export const main = createBrowserRouter([
  {
    path: "",
    index: true,
    element: <Layout />,
  },

  {
    path: "",
    element: <LandingPages />,
    index: true,
  },
]);
