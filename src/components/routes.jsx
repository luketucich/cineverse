import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
];
export default routes;
