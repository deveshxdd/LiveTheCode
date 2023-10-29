import React from 'react'
import "./Contact.css"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <div className="contact-content">
          <div className="contact-left">
            <h3>Contact Us</h3>
<p>Email: udevesh721@gmail.com</p>
         
          </div>
          <div className="contact-right">

            <ul className="social-links">
              <li>
                <a href="https://www.linkedin.com/in/devesh-upadhyay-75458a226/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/iamdevesh12/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://github.com/deveshxdd" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
