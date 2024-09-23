import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have undertaken several self-initiated projects that have helped me
          strengthen my technical expertise in full-stack web development and
          desktop applications. Through these projects, I have gained hands-on
          experience with Java, Servlets, JSP, JDBC, and Oracle SQL, enabling me
          to build robust backend systems and manage database interactions
          effectively. I have also developed dynamic user interfaces using
          JavaScript, HTML, CSS, and JavaFX, focusing on delivering responsive
          and intuitive designs. These projects have enhanced my problem-solving
          abilities, reinforced my knowledge of the MVC architecture, CRUD
          operations, and session management, and allowed me to explore secure
          data handling and scalability in web and desktop applications. My
          continuous learning mindset and eagerness to master new technologies
          have been key in driving the success of these self-initiated projects.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {/* Project 1 */}
          <motion.div
            className="col-md-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">IMDB Cloning</span>
                <img src="/images/IMDBClone.png" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">APIs</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                    I developed an IMDb clone using React for building a dynamic
                    and interactive user interface. The application allows users
                    to browse and search for movies, with real-time data fetched
                    through an external API.
                  </h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://imdb-clone-tmdb.netlify.app/"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
          {/* Project 2 */}
          <motion.div
            className="col-md-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Online Resume Maker</span>
                <img src="/images/OnlineResume.png" alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                    I developed an online resume builder that enables users to
                    create, customize, and download professional resumes. The
                    application allows users to input their personal and
                    professional details, which are then formatted into a
                    pre-designed template.
                  </h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://free-online-resume-builder-for-u.netlify.app/"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
          {/* Project 3 */}
          <motion.div
            className="col-md-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Parallax</span>
                <img src="/images/Parallex.png" alt="project3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                    I built a visually engaging parallax scrolling website using
                    HTML, CSS, and JavaScript. The site features multiple layers
                    of content that move at different speeds, creating a 3D-like
                    effect as users scroll.
                  </h6>
                </div>
                <a className="ad-btn" href="view">
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
