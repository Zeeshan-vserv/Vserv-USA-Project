import React from "react";
import logo from "../../images/logo.png";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

function Nav() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between w-full bg-white relative">
        <img className="flex items-center h-24 p-3 ml-16" src={logo} alt="" />
        <div className="flex font-semibold text-xl gap-14">
          <span className="flex justify-center items-center gap-1 group font-normal">
            What We Do
            <IoIosArrowDown className="mt-2  transition-transform duration-300 group-hover:rotate-[-180deg]" />
            <ul className="hidden group-hover:block text-base absolute top-16 right-[50vw] translate-x-[60%] z-50 w-[60vw] min-h-[400px] bg-white shadow-lg p-4 font-normal">
            <h3 className="font-semibold text-2xl">Services</h3>
              <li className="p-2 hover:underline cursor-pointer">Staff Augmentation</li>
              <li className="p-2 hover:underline cursor-pointer">IT Support & Managed Services</li>
              <li className="p-2 hover:underline cursor-pointer">E-Commerce Solutions</li>
              <li className="p-2 hover:underline cursor-pointer">Prototyping & UI/UX Design</li>
              <li className="p-2 hover:underline cursor-pointer">Enterprise Digital Transformation</li>
              <li className="p-2 hover:underline cursor-pointer">Product Engineering</li>
              <li className="p-2 hover:underline cursor-pointer">Internet of Things (IoT)</li>
              <li className="p-2 hover:underline cursor-pointer">Mobile App Development</li>
            </ul>
          </span>
          <span className="font-normal">What We Think</span>
          <span className="flex justify-center items-center gap-1 group font-normal">
            About VSERV
            <IoIosArrowDown className="mt-2 transition-transform duration-300 group-hover:rotate-[-180deg]" />
            <ul className="hidden group-hover:block text-base absolute top-16 right-[50vw] translate-x-[60%] z-50 w-[60vw] min-h-[400px] bg-white shadow-lg p-4 font-normal">
              <li className="p-2 hover:underline cursor-pointer">About Us</li>
              <li className="p-2 hover:underline cursor-pointer">IT Support & Managed Services</li>
              <li className="p-2 hover:underline cursor-pointer">E-Commerce Solutions</li>
              <li className="p-2 hover:underline cursor-pointer">Prototyping & UI/UX Design</li>
              <li className="p-2 hover:underline cursor-pointer">Enterprise Digital Transformation</li>
              <li className="p-2 hover:underline cursor-pointer">Product Engineering</li>
              <li className="p-2 hover:underline cursor-pointer">Internet of Things (IoT)</li>
              <li className="p-2 hover:underline cursor-pointer">Mobile App Development</li>
            </ul>
          </span>
          <span className="font-normal">Careers</span>
          <span className="font-normal">Contact Us</span>
        </div>
        <div className="flex m-3 text-2xl p-3">
          <TfiWorld />
        </div>
      </div>
    </div>
  );
}

export default Nav;