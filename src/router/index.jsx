import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Interview from "../pages/Interview";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/mock",
      element: <Interview/>,
    },
  ]);

export default router