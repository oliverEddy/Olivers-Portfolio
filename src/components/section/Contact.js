import React from "react";
import { contact, section5Title, social } from "../../profile";
import "./Contact.css";
import CvButton from "../layouts/CvButton";

import { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, 0]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}


const Contact = () => {
  const [width] = useWindowSize(); // Using the custom hook to get current window width

  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <div className="git-head-div text-center mx-auto">
          <h1 id="Contact" className="git-head">
            {section5Title}
          </h1>
        </div>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form action="https://formspree.io/f/xqkrlrqv" method="POST">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required
                ></input>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  required
                ></input>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required
                  style={{ resize: "none" }}
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">
                {contact.pitch.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < contact.pitch.length - 1 && (
                      <>
         
                      </>
                    )}
                  </React.Fragment>
                ))}
              </p>

              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                
                </div>
              </div>
              <div className="CvButton">
               <CvButton />
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
