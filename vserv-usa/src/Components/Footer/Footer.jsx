import React from "react";
import { LiaCopyright } from "react-icons/lia";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between  w-full bg-[#1B0056] text-white p-4 max-md:flex-col max-md:gap-5">
        <span className="flex items-center font-bold">
          <LiaCopyright />
          2025 VSERV Infosystems INC
        </span>
        <div className="flex gap-5">
          <span className="font-bold">Services</span>
          <span className="font-bold">Privacy</span>
        </div>
        <div className="flex  gap-5 text-xl">
          <a href="https://www.facebook.com/vservit" target="_blank">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/vserv_it" target="_blank">
            <FiInstagram />
          </a>
          <a href="https://www.linkedin.com/company/vservit/" target="_blank">
            <FaLinkedin />
          </a>
            <FaXTwitter />
        </div>
      </div>
    </div>
  );
}

export default Footer;