import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [category, setCategory] = useState("Action");
  return (
    <>
      <ul id="navigation-bar">
        <li>
          <Link to="/">Cineverse</Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Action")}>
            Action
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Comedy")}>
            Comedy
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Drama")}>
            Drama
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Horror")}>
            Horror
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Scifi")}>
            Sci-Fi
          </Link>
        </li>
        <li>
          <Link to="/">Watchlist</Link>
        </li>
      </ul>
      <Outlet context={{ category, setCategory }} />
    </>
  );
};

export default Navbar;
