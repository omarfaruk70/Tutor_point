import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Errorpage from "./Components/Errorpage";
import Schedule from "./Components/Schedule";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
  },
  {
    path: "/messages",
    element: <Schedule></Schedule>
  },
]);


export default Router;
