import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { ImSun } from "react-icons/im";
import logoLight from "../assets/logo_light.png";
import logoDark from "../assets/logo_dark.png";
import "../styles/Navbar.css";

function Navbar({ themeToggler, theme }) {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  window.onclick = function (event) {
    if (!event.target.matches(".menu-btn")) {
      if (isShowingMenu) setIsShowingMenu(false);
    }
  };

  return (
    <div>
      <div className="header">
        <div className="header-content">
          <Link to="/" className="home-link">
            <div className="logo">
              <img
                src={theme ? logoDark : logoLight}
                alt="logo"
                className="logo-img"
              />
              <p>Abd Elhadi</p>
            </div>
          </Link>
          <div className="links">
            <Link to="/works" className="link-item">
              Works
            </Link>
            <Link to="/posts" className="link-item">
              Posts
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="link-item"
            >
              <IoLogoGithub className="github-icon" />
              Source
            </a>
          </div>
          <div className="actions-container">
            <div className="menu">
              <div
                className="menu-btn"
                onClick={() => setIsShowingMenu(!isShowingMenu)}
              >
                <CgMenu className="menu-icon" />
              </div>
              <div
                className="dropdown-menu"
                style={
                  isShowingMenu ? { display: "block" } : { display: "none" }
                }
              >
                <Link to="/" className="menu-item">
                  Home
                </Link>
                <Link to="/works" className="menu-item">
                  Works
                </Link>
                <Link to="/posts" className="menu-item">
                  Posts
                </Link>
                <a
                  href="https://github.com/"
                  target="_self"
                  rel="noreferrer"
                  className="menu-item"
                >
                  View Source
                </a>
              </div>
            </div>

            <div className="dark-mode" onClick={() => themeToggler()}>
              {theme === "light" ? <MdDarkMode /> : <ImSun />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
