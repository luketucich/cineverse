import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [category, setCategory] = useState("Action");
  const [data, setData] = useState(null);

  const handleNavClick = (newCategory) => {
    setCategory(newCategory);
    setData(null);
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
              <Link to="/shop" onClick={() => handleNavClick("Action")}>
                Action
              </Link>
              <Link to="/shop" onClick={() => handleNavClick("Comedy")}>
                Comedy
              </Link>
              <Link to="/shop" onClick={() => handleNavClick("Drama")}>
                Drama
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">TV Shows</button>
            <div className="dropdown-content">
              <Link to="/shop" onClick={() => handleNavClick("Thriller")}>
                Thriller
              </Link>
              <Link to="/shop" onClick={() => handleNavClick("Sci-Fi")}>
                Sci-Fi
              </Link>
              <Link to="/shop" onClick={() => handleNavClick("Documentary")}>
                Documentary
              </Link>
            </div>
          </div>
        </li>
        <li>
          <Link to="/">Watchlist</Link>
        </li>
      </ul>
      <Outlet context={{ category, setCategory, data, setData }} />
    </>
  );
};

export default Navbar;
