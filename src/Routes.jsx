import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Errorpage from "./Components/Errorpage";
import Statistics from "./Components/Statistics";
import Survey from './Components/Survey';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Survey></Survey>,
      },
      {
        path: "/schedule",
        element: <Statistics></Statistics>,
      },
      {
        path: "/message",
        element: <Statistics></Statistics>
      },
    ],
  },
]);

export default Router;
