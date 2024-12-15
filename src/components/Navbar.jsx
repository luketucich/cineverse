import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  IconBookmark,
  IconHome,
  IconMovie,
  IconDeviceTv,
} from "@tabler/icons-react";
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
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.1rem",
            }}
          >
            <IconHome
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
            Cineverse
          </Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">
              {" "}
              <li>
                <Link
                  to="/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.1rem",
                  }}
                >
                  <IconMovie
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                    }}
                  />
                  Movies
                </Link>
              </li>
            </button>
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
            <button className="dropbtn">
              {" "}
              <li>
                <Link
                  to="/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.1rem",
                  }}
                >
                  <IconDeviceTv
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                    }}
                  />
                  Television
                </Link>
              </li>
            </button>
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
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.1rem",
            }}
          >
            <IconBookmark
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
            Watchlist
          </Link>
        </li>
      </ul>
      <Outlet context={{ category, setCategory }} />
    </>
  );
};

export default Navbar;
