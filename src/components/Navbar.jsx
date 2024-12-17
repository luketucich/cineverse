import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  IconBookmark,
  IconHome,
  IconMovie,
  IconDeviceTv,
  IconMenu2,
} from "@tabler/icons-react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [category, setCategory] = useState("top250-movies");
  const [heading, setHeading] = useState("Top 250 Movies");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (newCategory, newHeading) => {
    setCategory(newCategory);
    setHeading(newHeading);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth <= 768 && (
        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
          <IconMenu2 className="menu-icon" />
          <p className="menu-text">Menu</p>
        </div>
      )}
      <ul
        id="navigation-bar"
        style={{
          display: windowWidth > 768 || isOpen ? "flex" : "none",
        }}
      >
        <li>
          <Link to="/" className="nav-link">
            <IconHome className="nav-icon" />
            <p className="nav-title">Cineverse</p>
          </Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">
              <Link to="/shop" className="nav-link">
                <IconMovie className="nav-icon" />
                <p className="nav-title">Movies</p>
              </Link>
            </button>
            <div className="dropdown-content">
              <Link
                to="/shop"
                onClick={() =>
                  handleNavClick("top250-movies", "Top 250 Movies")
                }
                className="nav-link"
              >
                <p>Top 250 Movies</p>
              </Link>
              <Link
                to="/shop"
                onClick={() =>
                  handleNavClick("top-box-office", "Top Box Office (US)")
                }
                className="nav-link"
              >
                <p>Top Box Office (US)</p>
              </Link>
              <Link
                to="/shop"
                onClick={() =>
                  handleNavClick("most-popular-movies", "Most Popular Movies")
                }
                className="nav-link"
              >
                <p>Most Popular Movies</p>
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">
              <Link to="/shop" className="nav-link">
                <IconDeviceTv className="nav-icon" />
                <p className="nav-title">Television</p>
              </Link>
            </button>
            <div className="dropdown-content">
              <Link
                to="/shop"
                onClick={() => handleNavClick("top250-tv", "Top 250 TV Shows")}
                className="nav-link"
              >
                <p>Top 250 TV Shows</p>
              </Link>
              <Link
                to="/shop"
                onClick={() =>
                  handleNavClick("most-popular-tv", "Most Popular TV Shows")
                }
                className="nav-link"
              >
                <p>Most Popular TV Shows</p>
              </Link>
            </div>
          </div>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <IconBookmark className="nav-icon" />
            <p className="nav-title">Watchlist</p>
          </Link>
        </li>
      </ul>
      <Outlet context={{ category, setCategory, heading }} />
    </>
  );
};

export default Navbar;
