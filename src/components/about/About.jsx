import React from "react";
import "./about.css";
import MyImage from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={MyImage} alt="About Img" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>+3 Years Experience</small>
            </article>

            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>+150 Worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>+80 Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            voluptates voluptatibus non reiciendis dolore eligendi consequatur
            laborum deleniti, alias, corrupti itaque accusamus voluptate! Nisi,
            optio. Enim, exercitationem! Tempore, impedit labore!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
