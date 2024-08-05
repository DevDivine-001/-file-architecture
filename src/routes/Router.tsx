import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import LandingPage from "../pages/Home/LandingPage";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",

        element: <LandingPage/>,
      },
      {
        path: "/about",
        element: <></>,
      },
      {
        path: "/class",
        element: <></>,
      },
    ],
  },
]);
