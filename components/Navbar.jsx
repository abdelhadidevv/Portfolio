import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { ImSun } from "react-icons/im";
import logoLight from "../public/images/logo_light.png";
import logoDark from "../public/images/logo_dark.png";
import Link from "next/link";

function Navbar({ themeToggler, theme }) {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  // window.onclick = function (event) {
  //   if (!event.target.matches(".menu-btn")) {
  //     if (isShowingMenu) setIsShowingMenu(false);
  //   }
  // };

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
              {theme ? <ImSun /> : <MdDarkMode />}
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .header {
            height: 56px;
            position: fixed;
            top: 0;
            width: 100%;
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: center;
          }

          .header-content {
            max-width: 776px;
            min-width: 776px;
            /* width: 49%; */
            height: 100%;
            display: flex;
            padding: 0 8px;
            align-items: center;
          }

          .home-link {
            text-decoration: none;
          }

          .header-content img {
            width: 20px;
            height: 20px;
          }

          .logo {
            display: flex;
            align-items: center;
          }

          .logo-img {
            margin-right: 3px;
          }

          .header-content p {
            margin-right: 25px;
            font-size: 18px;
            font-weight: bold;
            display: inline;
          }

          .links {
            display: flex;
          }

          .link-item {
            margin: 0 0 0 8px;
            padding: 8px;
            /* transition-property: background-color,
        border-color,
        color,
        fill,
        stroke,
        opacity,
        box-shadow,
        transform;
    ;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1); */
            outline: transparent solid 2px;
            outline-offset: 2px;
            text-underline-offset: 3px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 16px;
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .link-item:hover {
            text-decoration: underline;
          }

          .github-icon {
            margin-right: 3px;
            width: 16px;
            height: 16px;
          }

          .actions-container {
            flex: 1;
          }

          .dark-mode {
            width: 40px;
            height: 40px;
            float: right;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .menu-btn {
            width: 40px;
            height: 40px;
            float: right;
            border-radius: 8px;
            border: solid 1px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 8px;
            cursor: pointer;
          }

          .menu-icon {
            pointer-events: none;
          }

          .menu {
            float: right;
            position: relative;
            display: none;
          }

          .dropdown-menu {
            position: absolute;
            min-width: 224px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            border-radius: 6px;
            border: solid 1px;
            inset: 0px 0px auto auto;
            transform: translate3d(-8px, 49px, 0px);
            padding-top: 8px;
            padding-bottom: 8px;
          }

          .menu-item {
            padding: 6.4px 12.8px;
            text-decoration: none;
            display: block;
            outline: transparent solid 2px;
            outline-offset: 2px;
            text-underline-offset: 3px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 16px;
          }

          .menu-item:hover {
            text-decoration: underline;
          }

          /* Media Quirites*/
          @media (max-width: 795px) {
            .header-content {
              min-width: 100%;
            }

            .links {
              display: none;
            }

            .menu {
              display: inline-block;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
