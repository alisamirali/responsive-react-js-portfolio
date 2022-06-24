import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMailOutline className="contact-icon" />
            <h4>Email</h4>
            <h5>dev.alisamirali@gmail.com</h5>
            <a href="mailto:dev.alisamirali@gmail.com">Send a message</a>
          </article>

          <article className="contact-option">
            <BsLinkedin className="contact-icon" />
            <h4>LinkedIn</h4>
            <h5>ali-samir-ali</h5>
            <a href="https://linkedin.com">Send a message</a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-icon" />
            <h4>WhatsApp</h4>
            <h5>+201114181442</h5>
            <a href="https://wa.me/+201114181442">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            required
            placeholder="Message"
            rows="8"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
