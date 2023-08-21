import React from "react";
import './style.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const metadata = {
  title: "About",
  description: "About Page",
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
       To become a successful professional in a challenging workplace to enhance my knowledge in the field of information Technology as well as work towards betterment of on organization.
      </p>
          <div className="social-icons">
          <a href="https://github.com/19jayaprakash" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://instagram.com/_mr.rc_200?igshid=MmIzYWVlNDQ5Yg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/jayaprakash-r-276a18226/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
    </div>
  );
};

export default About;




