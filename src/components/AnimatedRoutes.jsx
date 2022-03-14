import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/_404";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence
      exitBeforeEnter
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
