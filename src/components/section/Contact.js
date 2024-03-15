import React, { useState, useEffect } from "react";
import { contact, section5Title, social } from "../../profile";
import "./Contact.css";

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
  const [width] = useWindowSize(); // Not directly used in the updated code but retained for future use.
  
  // State to manage form data
  const [formState, setFormState] = useState({
    firstname: '',
    Email: '',
    Subject: '',
    message: '',
  });

  // Update form state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Sending data to Formspree
    const response = await fetch('https://formspree.io/f/xqkrlrqv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      // Clear the form fields by resetting form state
      setFormState({
        firstname: '',
        Email: '',
        Subject: '',
        message: '',
      });
      // Optionally, display a success message or handle the response further
      alert("Thank you for your message. It has been sent.");
    } else {
      // Optionally, handle errors
      alert("There was a problem with your submission. Please try again.");
    }
  };

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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Your name"
                  required
                  value={formState.firstname}
                  onChange={handleChange}
                ></input>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  required
                  value={formState.Email}
                  onChange={handleChange}
                ></input>
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  required
                  value={formState.Subject}
                  onChange={handleChange}
                ></input>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  style={{ resize: "none" }}
                  value={formState.message}
                  onChange={handleChange}
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
                        <br />
                        <br />
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
                  {social.resume && (
                    <a title="Download Resume" href={social.resume} download>
                      <i className="fas fa-download"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
