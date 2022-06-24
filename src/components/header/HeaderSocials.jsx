import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/ali-samir-ali/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/alisamirali">
        <FaGithub />
      </a>
      <a href="https://www.behance.net/alisamirali">
        <BsBehance />
      </a>
    </div>
  );
};

export default HeaderSocials;
