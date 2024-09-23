import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <React.Fragment>
      {/* Replace Jump with motion.div to create a jump effect */}
      <motion.div
        className="about"
        id="about"
        initial={{ y: -20 }}
        animate={{ y: [0, -20, 0] }} // Up and down motion for jump effect
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
      >
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="/images/Profile1.jpg"
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am Nityanand Tamsoy, a Bachelor of Technology (BTech) graduate
              in Computer Science and Engineering from Radhakrishna Institute
              of Technology and Engineering, affiliated with Biju Patnaik
              University of Technology (BPUT). Originating from Jharkhand, I
              have a passion for continuous learning, reflected in my hobbies
              such as reading books. As an athlete, I’ve developed essential
              qualities like discipline, perseverance, and teamwork. In terms
              of technical expertise, I have strong skills in web
              technologies, Core Java, Advanced Java, and Oracle SQL.
              Additionally, I possess excellent soft skills, which enhance my
              ability to communicate, collaborate, and solve problems
              effectively. I am a quick learner and have a genuine eagerness
              to embrace and master emerging technologies, constantly pushing
              myself to stay updated in this fast-evolving field. I am driven
              by the desire to contribute to innovative solutions while
              continuously growing in a dynamic work environment.
            </p>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default About;
