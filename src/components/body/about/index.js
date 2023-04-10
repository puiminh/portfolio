/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello  👋, 
         <br /> My name is <span className="info-name">Bùi Hồng Minh</span>.
         <br /> a <span className="info-job">Web Developer</span>.
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/avatar.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;