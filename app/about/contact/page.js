import React from "react";
import './style.css';
const TeamPage = () => {
  return (
      <div>
          {/* <h1>Team</h1> */}
          <div class="form-container">
          <h1 class="form-title">Let's work together</h1>
          <form class="contact-form">
            <input class="form-input" type="text" placeholder="Your Name" />
            <input class="form-input" type="email" placeholder="Your Email" />
            <input class="form-input" type="text" placeholder="Subject" />
            <textarea class="form-input" rows="5" placeholder="Description"></textarea>
            <input class="form-input" type="tel" placeholder="Contact Number" />
            <button class="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
  );
};

export default TeamPage;



