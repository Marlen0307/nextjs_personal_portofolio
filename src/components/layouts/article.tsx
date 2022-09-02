import { motion } from "framer-motion";
import Head from "next/head";
import layoutStyles from './layout.module.css';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      className = {layoutStyles.mainArticle}
    >
      {children}
    </motion.article>
  );
};

export default Layout;
