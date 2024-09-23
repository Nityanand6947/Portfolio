import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
// import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import { motion } from "framer-motion";
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();

  // Framer Motion variants for footer text
  const footerAnimation = {
    initial: { scale: 0.8, rotate: 0 },
    animate: { scale: 1, rotate: [0, 10, -10, 0] },
    transition: { duration: 0.8, ease: "easeInOut", loop: Infinity }
  };

  return (
    <React.Fragment>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          {/* <WorkExp /> */}
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <motion.h4
            className="text-center"
            variants={footerAnimation}
            initial="initial"
            animate="animate"
            transition={footerAnimation.transition}
          >
            Nityanand Tamsoy &copy; 2024
          </motion.h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </React.Fragment>
  );
}

export default App;
