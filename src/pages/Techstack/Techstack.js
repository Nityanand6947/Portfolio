import React from "react";
import "./Techstack.css";
import { motion } from "framer-motion";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <React.Fragment>
      <div className="container techstack" id="techstack">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databases, front-end
            and back-end tools, and APIs
          </p>
        </motion.div>
        <div className="row">
          {TechstackList.map((tech) => (
            <motion.div
              key={tech._id}
              className="col-md-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Techstack;
