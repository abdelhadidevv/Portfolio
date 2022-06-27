import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    ></AnimatePresence>
  );
};
export default AnimatedRoutes;
