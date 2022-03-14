import { motion } from "framer-motion";
import Footer from "./Footer";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const LayoutAimate = ({ children, title }) => (
  <motion.div
    key={title}
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
  >
    {children}
    <Footer />
  </motion.div>
);

export default LayoutAimate;
