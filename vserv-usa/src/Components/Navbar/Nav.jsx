import React, { useState } from "react";
// import logo from "../../images/logo.png";
import logo from "../../Components/images/Logo.png";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import GoogleTranslate from "../Translate/GoogleTranslate";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);    
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownVisible(null);
  }

  const toggleDropdown = (menu) => {
    setDropdownVisible(isDropdownVisible === menu ? null : menu);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between w-full bg-slate-100 relative">
        <Link to="/">
          <img
            className="h-auto max-h-24 w-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px] p-3 ml-4 md:ml-16"
            src={logo}
            alt="Logo"
          />
        </Link>
        <div
          className="md:hidden text-3xl sm:text-4xl cursor-pointer mr-6 sm:mr-10"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <div className="hidden md:flex font-semibold text-xl gap-14">
          <Link
            to="/"
            className="flex justify-center items-center gap-1 group font-normal"
          >
            What We Do
            <IoIosArrowDown className="mt-2  transition-transform duration-300 group-hover:rotate-[-180deg]" />
            <ul className="hidden group-hover:block text-base absolute top-16 right-[50vw] translate-x-[60%] z-50 w-[60vw] min-h-[400px] bg-white shadow-lg p-4 font-normal">
              <h3 className="font-semibold text-2xl">Services</h3>
              <Link to="/staffAugmentation">
                <li className="p-2 hover:underline cursor-pointer">
                  Staff Augmentation
                </li>
              </Link>
              <Link to="/it-support-management-service">
                <li className="p-2 hover:underline cursor-pointer">
                  IT Support & Managed Services
                </li>
              </Link>
              <Link to="/e-commerce-solution">
                <li className="p-2 hover:underline cursor-pointer">
                  E-Commerce Solutions
                </li>
              </Link>
              <Link to="/prototyping-ui-design">
                <li className="p-2 hover:underline cursor-pointer">
                  Prototyping & UI/UX Design
                </li>
              </Link>
              <Link to="/enterprise-digital-transformation">
                <li className="p-2 hover:underline cursor-pointer">
                  Enterprise Digital Transformation
                </li>
              </Link>
              <Link to="/product-engineering">
                <li className="p-2 hover:underline cursor-pointer">
                  Product Engineering
                </li>
              </Link>
              <Link to="/internet-Of-things">
                <li className="p-2 hover:underline cursor-pointer">
                  Internet of Things (IoT)
                </li>
              </Link>
              <Link to="/mobile-app-development">
                <li className="p-2 hover:underline cursor-pointer">
                  Mobile App Development
                </li>
              </Link>
            </ul>
          </Link>
          <Link to="/what-we-think" className="font-normal hover:translate-y-[-3px] ease-in-out duration-200">What We Think</Link>
          <a href="https://vservit.com/about-us/" target="_blank">
            <span className="flex justify-center items-center gap-1 group font-normal hover:translate-y-[-3px] ease-in-out duration-200">
              About VSERV
              {/* <IoIosArrowDown className="mt-2 transition-transform duration-300 group-hover:rotate-[-180deg]" /> */}
              {/* <ul className="hidden group-hover:block text-base absolute top-16 right-[50vw] translate-x-[60%] z-50 w-[60vw] min-h-[400px] bg-white shadow-lg p-4 font-normal">
              <li className="p-2 hover:underline cursor-pointer">
                {" "}
                <a href="https://vservit.com/about-us/" target="_blank">
                  About Us
                </a>
              </li>
            </ul> */}
            </span>
          </a>
          <Link
            to="https://vservjobs.com/"
            target="_blank"
            className="font-normal hover:translate-y-[-3px] ease-in-out duration-200"
          >
            Careers
          </Link>
          <Link to="/contactus" className="font-normal hover:translate-y-[-3px] ease-in-out duration-200">
            Contact Us
          </Link>
        </div>
        <div className=" hidden md:block m-3 text-2xl p-3">
          <TfiWorld />
          {/* <GoogleTranslate /> */}
        </div>
      </div>
      {/* mobile view */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-10 absolute w-full left-0 top-18 z-50">
          <div className="flex items-center p-2 gap-1 mt-2">
            <Link to="/" className="flex items-center">
              What We Do
            </Link>
            <IoIosArrowDown
              onClick={() => toggleDropdown("whatWeDo")}
              className="cursor-pointer"
            />
          </div>
          {isDropdownVisible === "whatWeDo" && (
            <ul className="pl-4">
              <h3 className="font-semibold text-2xl">Services</h3>
              <Link to="/staffAugmentation">
                <li onClick={closeMenu} className="p-2 hover:underline cursor-pointer">
                  Staff Augmentation
                </li>
              </Link>
              <Link to="/it-support-management-service">
                <li className="p-2 hover:underline cursor-pointer">
                  IT Support & Managed Services
                </li>
              </Link>
              <Link to="/e-commerce-solution">
                <li className="p-2 hover:underline cursor-pointer">
                  E-Commerce Solutions
                </li>
              </Link>
              <Link to="/prototyping-ui-design">
                <li className="p-2 hover:underline cursor-pointer">
                  Prototyping & UI/UX Design
                </li>
              </Link>
              <Link to="/enterprise-digital-transformation">
                <li className="p-2 hover:underline cursor-pointer">
                  Enterprise Digital Transformation
                </li>
              </Link>
              <Link to="/product-engineering">
                <li className="p-2 hover:underline cursor-pointer">
                  Product Engineering
                </li>
              </Link>
              <Link to="/internet-Of-things">
                <li className="p-2 hover:underline cursor-pointer">
                  Internet of Things (IoT)
                </li>
              </Link>
              <Link to="/mobile-app-development">
                <li className="p-2 hover:underline cursor-pointer">
                  Mobile App Development
                </li>
              </Link>
            </ul>
          )}
          <Link to="/what-we-think" className="block p-2">
            What We Think
          </Link>
          <div className="flex items-center p-2 gap-1">
            <Link to="/" className="flex items-center">
              About VSERV
            </Link>
            <IoIosArrowDown
              onClick={() => toggleDropdown("aboutVserv")}
              className="cursor-pointer"
            />
          </div>
          {isDropdownVisible === "aboutVserv" && (
            <ul className="pl-4">
              <li className="p-2 cursor-pointer">
                <a href="https://vservit.com/about-us/" target="_blank">
                  About Us
                </a>
              </li>
            </ul>
          )}
          <Link
            to="https://vservjobs.com/"
            target="_blank"
            className="block p-2"
          >
            Careers
          </Link>
          <Link to="/contactus" className="block p-2">
            Contact Us
          </Link>
          <div className="flex justify-center p-2 text-2xl cursor-pointer">
            <TfiWorld />
            {/* <GoogleTranslate /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;