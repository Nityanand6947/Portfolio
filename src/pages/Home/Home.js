import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme switching
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <React.Fragment>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          {/* Right slide-in animation for the text */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Java FullStack Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </motion.div>

          {/* Bottom slide-in animation for the buttons */}
          <motion.div
            className="home-buttons"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a className="btn btn-cv" href={Resume} target="blank">
              My Resume
            </a>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
