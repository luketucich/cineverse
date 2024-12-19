import Navbar from "./Navbar";
import Home from "./Home";
import Browse from "./Browse";
import Watchlist from "./Watchlist";
import { useEffect } from "react";

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
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/browse/top250-movies",
        element: <Browse />,
      },
      {
        path: "/browse/top-box-office",
        element: <Browse />,
      },
      {
        path: "/browse/most-popular-movies",
        element: <Browse />,
      },
      {
        path: "/browse/top250-tv",
        element: <Browse />,
      },
      {
        path: "/browse/most-popular-tv",
        element: <Browse />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
    ],
  },
];
export default routes;
