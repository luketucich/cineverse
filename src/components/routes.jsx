import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Browse";
import Watchlist from "./Watchlist";

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
        element: <Shop />,
      },
      {
        path: "/browse/top-250-movies",
        element: <Shop />,
      },
      {
        path: "/browse/top-box-office",
        element: <Shop />,
      },
      {
        path: "/browse/most-popular-movies",
        element: <Shop />,
      },
      {
        path: "/browse/top-250-tv",
        element: <Shop />,
      },
      {
        path: "/browse/most-popular-tv",
        element: <Shop />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
    ],
  },
];
export default routes;
