import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [category, setCategory] = useState("top250-movies");

  const handleNavClick = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <ul id="navigation-bar">
        <li>
          <Link to="/">Cineverse</Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Movies</button>
            <div className="dropdown-content">
              <Link to="/shop" onClick={() => handleNavClick("top250-movies")}>
                Top 250 Movies
              </Link>
              <Link to="/shop" onClick={() => handleNavClick("top-box-office")}>
                Top Box Office (US)
              </Link>
              <Link
                to="/shop"
                onClick={() => handleNavClick("most-popular-movies")}
              >
                Most Popular Movies
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">TV Shows</button>
            <div className="dropdown-content">
              <Link to="/shop" onClick={() => handleNavClick("top250-tv")}>
                Top 250 TV Shows
              </Link>
              <Link
                to="/shop"
                onClick={() => handleNavClick("most-popular-tv")}
              >
                Most Popular TV Shows
              </Link>
            </div>
          </div>
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
