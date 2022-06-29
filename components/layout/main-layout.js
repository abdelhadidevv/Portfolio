import Head from "next/head";
import ScrollToTop from "../ScrollToTop";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";
import Navbar from "../Navbar";
import AnimatedRoutes from "../AnimatedRoutes";
import { useState,useEffect } from "react";

export default function MainLayout({ children }) {
  const [theme, setTheme] = useState(null);  

  useEffect(() => {
   setTheme(localStorage.getItem("dark-mode")  === "true" ? true : false)
  }, [theme]);


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
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Abd Elhadi" />
        <meta name="og:title" content="Abd Elhadi" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Abd-Elhadi homepage" />
        <title>Abd Elhadi - Homepage</title>
      </Head>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="app">
          <Navbar themeToggler={themeToggler} theme={theme} />
          {/* <ScrollToTop /> */}
          <div className="main">
            <AnimatedRoutes />
            {children}
          </div>
        </div>
      </ThemeProvider>
      <style jsx>{`
        .app {
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          padding-top: 56px;
        }

        .main {
          max-width: 501px;
          min-width: 501px;
          margin: auto;
          padding-left: 16px;
          padding-right: 16px;
          overflow: hidden;
        }

        /* Media Quirites*/
        @media (max-width: 565px) {
          .main {
            min-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}
