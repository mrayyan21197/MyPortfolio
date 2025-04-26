import React from "react";
import logo1 from "../assets/Logo1.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className="mx-2 w-14" src={logo1} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl color-white">
        <a href="https://www.linkedin.com/in/muhammad-rayyan-b863a6311/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/mrayyan21197" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      
      </div>
    </nav>
  );
};

export default Navbar;
