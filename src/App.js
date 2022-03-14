import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { Helmet } from "react-helmet";
import logo from "./assets/logo.png";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("dark-mode") === "true" ? true : false
  );

  const themeToggler = () => {
    if (theme === false) {
      setTheme(true);
      localStorage.setItem("dark-mode", true);
    } else if (theme === true) {
      setTheme(false);
      localStorage.setItem("dark-mode", false);
    }
  };
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="app">
        <Helmet>
          <meta property="og:site_name" content="Abd Elhaid - Home" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={logo} />
        </Helmet>
        <Router>
          <Navbar themeToggler={themeToggler} theme={theme} />
          <ScrollToTop />
          <div className="main">
            <AnimatedRoutes />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}
