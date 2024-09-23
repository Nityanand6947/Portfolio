import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name || !email || !msg) {
    //   alert("Please provide all fields");
    //   return;
    // }

    // Use mailto to send an email
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${msg}`);
    const mailtoLink = `mailto:nityanandtamsoy17@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Reset form fields after sending the email
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <React.Fragment>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  {/* Sliding animation from the left */}
                  <motion.img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contact"
                    className="image"
                    initial={{ x: -1000 }} // Start from offscreen left
                    animate={{ x: 0 }} // Slide in to original position
                    transition={{ duration: 1 }} // Smooth transition
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              {/* Rotation animation */}
              <motion.div
                className="card2 d-flex card border-0 px-4 py-5"
                initial={{ rotate: -360 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a href="https://www.linkedin.com/in/nityanand-tamsoy-81387a233/">
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="https://github.com/Nityanand6947">
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a href="https://www.instagram.com/nityanand____tamsoy/?next=%2F">
                        <BsInstagram color="pink" size={30} className="ms-2" />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
