/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="footer-logo">
        Ali Samir
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com">
          <FaFacebookSquare className="social-icon" />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin className="social-icon" />
        </a>
        <a href="https://instgram.com">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://instgram.com">
          <BsTwitter className="social-icon" />
        </a>
        <a href="https://github.com">
          <FaGithub className="social-icon" />
        </a>
      </div>

      <div className="copyright">
        <small>&copy; Ali Samir - Phoenix Coding</small>
      </div>
    </footer>
  );
};

export default Footer;
