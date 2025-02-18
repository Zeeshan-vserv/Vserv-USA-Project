import React from 'react'
import { LiaCopyright } from "react-icons/lia";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className='flex flex-row items-center justify-between  w-full bg-[#1B0056] text-white p-4 gap-60'>
        <span className='flex items-center font-bold'><LiaCopyright />2025 VSERV Infosystems INC</span>
        <div className='flex gap-10'>
        <span className='font-bold'>Services</span>
        <span className='font-bold'>Privacy</span>
        </div>
        <div className='flex  gap-5 text-xl'>
        <BsFacebook />
        <FiInstagram />
        <FaLinkedin />
        <FaYoutube />
        <FaXTwitter />
        </div>
      </div>
    </div>
  )
}

export default Footer
