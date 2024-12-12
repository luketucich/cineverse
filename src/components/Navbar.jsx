import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [category, setCategory] = useState("Living");
  return (
    <>
      <ul id="navigation-bar">
        <li>
          <Link to="/">Fejka</Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Living")}>
            Living
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Bedroom")}>
            Bedroom
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Dining")}>
            Dining
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Office")}>
            Office
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={() => setCategory("Decor")}>
            Decor
          </Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
      </ul>
      <Outlet context={{ category, setCategory }} />
    </>
  );
};

export default Navbar;
