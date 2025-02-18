import React, { useState } from "react";
import Contact from "../ContactUs/Contact";
import Footer from "../Footer/Footer";
import { FaCirclePlay } from "react-icons/fa6";
import VideoPopup from "./VideoPopup";
import HomeVideo from "../../assets/home-vid-1.mp4";
import { AiFillBank } from "react-icons/ai";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaDigitalOcean, FaProductHunt, FaTools } from "react-icons/fa";
import { ImAmazon } from "react-icons/im";
import { FiFigma } from "react-icons/fi";
import { LuRadioTower } from "react-icons/lu";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import cio from '../../images/cio.webp'
import ai from '../../images/ai.jpg'

const home = () => {
  const [playVid, setPlayVid] = useState(false);
  return (
    <div className="max-w-screen overflow-x-hidden">
      {/* Home Case Study Section */}
      <div className={`absolute z-50 ${!playVid ? "hidden" : ""}`}>
        <VideoPopup HomeVideo={HomeVideo} setPlayVid={setPlayVid} />
      </div>
      <section>
        <div className="w-full bg-[#111111] flex text-white p-20">
          <div className="w-[50%] flex flex-col gap-5">
            <h2 className="text-5xl font-semibold w-[70%]">
            Vserv Infosystems Wins CIO Choice Award 2025 for Excellence in IT Solutions
            
            </h2>
            <p className="w-[55%]">
            Vserv Infosystem, a leader in IT solutions and digital transformation, has been recognized with the prestigious CIO Choice Award 2025 for delivering cutting-edge technology solutions that drive business success. This recognition underscores our commitment to empowering organizations with real-time customer insights, advanced analytics, and AI-driven decision-making.
            </p>
          </div>
          <div className="w-[50%] ">
            <div className="h-[400px] w-[600px] m-auto relative">
              <img
                className="h-full w-full"
                src={cio}
                alt=""
              />
              <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <FaCirclePlay
                  className="text-6xl text-[#2B0060] bg-white rounded-full cursor-pointer"
                  onClick={() => setPlayVid(true)}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Home second Section */}
      <section className="bg-[#362358] w-full px-10 pt-7 pb-4">
        <p className="text-white text-xl text-center font-semibold">
        At Vserv Infosystems INC, we specialize in delivering top-tier IT solutions that empower businesses to achieve digital excellence. With expertise in software development, cybersecurity, managed services, and artificial intelligence, we provide cutting-edge solutions tailored to your business needs.
        </p>
        <p className="text-white text-xl text-center font-semibold">With a team of highly skilled professionals, we focus on scalability, innovation, and efficiency, ensuring that your organization stays ahead in today’s competitive digital landscape</p>
      </section>

      {/* Home Third Section */}
      <section>
        {/*Third Section First Container */}
        <div className="flex w-screen bg-[#F1EEF0]">
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55]">
            <h2 className="text-5xl leading-14 cursor-pointer duration-500 ease-in-out hover:underline"> <a href="https://vservit.com/you-have-a-great-business-idea-2/" target="_blank">
            How to Choose the Right Storage Solutions for Your Business Needs?</a>
            </h2>
            <p className="text-sm">
            In today’s data-driven world, businesses generate and rely on vast amounts of information. Choosing the right storage solution is critical to ensure data is secure, accessible, and scalable. At Vservit, we empower businesses with cutting-edge storage solutions tailored to meet their unique needs. Here’s a guide to help you make the right choice for your business.
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src="https://vservit.com/wp-content/uploads/2019/11/pexels-brett-sayles-2881228-2048x1363.jpg"
              alt=""
            />
          </div>
        </div>

        {/*Third Section Second Container */}
        <div className="flex w-screen bg-[#F1EEF0]">
          <div className="w-[50%]">
            <img
              className="w-full h-[450px] object-cover"
              src={cio}
              alt=""
            />
          </div>
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55]">
            <h2 className="text-5xl leading-14 cursor-pointer duration-500 ease-in-out hover:underline"><a href="https://vservit.com/vservit-wins-the-cio-choice-2025-it-service-vendor-award-a-testament-to-excellence-and-innovation/" target="_blank">
             VservIT Wins the CIO Choice 2025 IT Service Vendor Award</a>
            </h2>
            <p className="text-sm">
            At VservIT, we are proud to announce that we have been recognized as the CIO Choice 2025 IT Service Vendor. This prestigious accolade is a remarkable achievement, underscoring our commitment to delivering top-tier IT services and solutions that empower businesses across various industries to achieve their digital transformation goals.
            </p>
          </div>
        </div>

        {/*Third Section Third Container */}
        <div className="flex w-screen bg-[#F1EEF0]">
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55]">
            <h2 className="text-5xl leading-14 cursor-pointer duration-500 ease-in-out hover:underline"><a href="https://vservit.com/plan-your-project-with-your-software/" target="_blank">
            Why Scalable Networking is the Backbone of Modern Businesses</a>
            </h2>
            <p className="text-sm">
            In the ever-evolving business world, adaptability and efficiency are the keys to success. Scalable networking solutions have emerged as the cornerstone for modern enterprises, enabling them to stay ahead of the curve. At Vservit, we understand how crucial a robust, scalable network is for fostering innovation and driving business growth.
            </p>
          </div>
          <div className="w-[50%]">
            <img
              className="w-full h-[550px] object-cover"
              src="https://vservit.com/wp-content/uploads/2019/11/pexels-field-engineer-147254-442150-2048x1365.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Home Fourth Section */}
      <section>
        <div className="w-full bg-[#1B1B1B] flex p-16">
          <div className="w-[77%] flex flex-col gap-5 justify-center items-start text-white pr-[20vw]">
            <h2 className="text-4xl font-semibold">
            AI Conclave 2025: Pioneering the Future of AI with VservIT and Industry Leaders
            </h2>
            <p className="text-lg">
            Vserv Infosystem, a leader in IT solutions and digital transformation, has been recognized with the prestigious CIO Choice Award 2025 for delivering cutting-edge technology solutions that drive business success. This recognition underscores our commitment to empowering organizations with real-time customer insights, advanced analytics, and AI-driven decision-making.
            </p>
            <button className="bg-white text-[#1B1B1B] text-sm py-2.5 px-6 rounded-full cursor-pointer hover:underline">
              <a href="https://aievent.vservit.com/" target="_blank"> Read More</a>
            </button>
          </div>
          <div className="w-[23%] bg-green-300">
            <img
              className=""
              src={ai}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Home Fifth Section */}
      <section>
        <div className="w-full flex flex-wrap bg-[#7470A6] text-white">
          <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw]">
            <h3 className="text-4xl font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              Ahead of The Curve: 2025 Innovation Imperatives for Airports
            </h3>
          </div>
          <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden">
            <img
              className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw]">
            <h3 className="text-4xl font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              Ahead of The Curve: 2025 Innovation Priorities for Automotive
            </h3>
          </div>
          <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden">
            <img
              className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
              src="https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden">
            <img
              className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
              src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw]">
            <h3 className="text-4xl font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              Ahead of The Curve: 2025 Innovation Priorities for Banking
            </h3>
          </div>
          <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden">
            <img
              className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1663047091392-425566f3ea56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw]">
            <h3 className="text-4xl font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              Ahead of The Curve: 2025 Innovation Priorities for Capital Markets
            </h3>
          </div>

          <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw]">
            <h3 className="text-4xl font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              Ahead of The Curve: 2025 Innovation Imperatives for Consumer
              Packaged Goods
            </h3>
          </div>
          <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden">
            <img
              className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1681823312184-72a6d501a5d6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw]">
            <h3 className="text-4xl font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              Ahead of The Curve: 2025 Innovation Imperatives for EC&O
            </h3>
          </div>
          <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden">
            <img
              className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
              src="https://plus.unsplash.com/premium_photo-1681823471393-39a9b19ab0c8?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Home Sixth Section */}
      <section>
        <div className="w-full flex flex-col gap-10 items-center py-10">
          <h2 className=" text-4xl">Services</h2>
          <div className="flex flex-wrap gap-14 justify-center w-full">
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
            <HiMiniUserGroup className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                Staff Augmentation
              </h3>
              <p></p>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <FaTools className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center fon cursor-pointer duration-500 ease-in-out hover:underline">
              IT Support & Managed Services
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <ImAmazon className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                E-Commerce Solutions
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <FiFigma className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
              Prototyping & UI/UX Design
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <FaDigitalOcean className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
              Enterprise Digital Transformation
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <FaProductHunt className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
              Product Engineering
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <LuRadioTower className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
              Internet of Things (IoT)
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <MdOutlineAppSettingsAlt className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
              Mobile App Development
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/*Home Content Hover Section */}
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="group relative bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover md:w-[50%] w-full h-[500px] flex flex-col gap-4 items-center justify-center text-white">
            <div className="absolute inset-0 bg-black/50"></div>{" "}
            {/* Dark Overlay */}
            <h2 className="text-5xl font-bold text-center mt-32 w-[60%] relative z-10 group-hover:mt-0 duration-700">
              Welcome To The Software-Driven ERA
              <span className="text-8xl text-orange-500 leading-0">.</span>
            </h2>
            <div className="w-[80%] flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 relative z-10">
              <p className="text-2xl text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                asperiores, aliquamur quasi.
              </p>
              <button className="bg-white text-[#1B1B1B] w-[130px] text-sm py-2.5 px-6 rounded-full cursor-pointer hover:underline">
                Read More
              </button>
            </div>
          </div>
          <div className="group relative bg-[url('https://plus.unsplash.com/premium_photo-1661288439917-1542b58a962b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover md:w-[50%] w-full h-[500px] flex flex-col gap-4 items-center justify-center text-white">
            <div className="absolute inset-0 bg-yellow-900/20"></div>
            {/* Dark Overlay */}
            <h2 className="text-5xl font-bold text-center mt-32 w-[60%] relative z-10 group-hover:mt-0 duration-700">
              Custoer Success Stories
              <span className="text-8xl text-black leading-0">.</span>
            </h2>
            <div className="w-[80%] flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 relative z-10">
              <p className="text-2xl text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                asperiores, aliquamur quasi.
              </p>
              <button className="bg-white text-[#1B1B1B] w-[130px] text-sm py-2.5 px-6 rounded-full cursor-pointer hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default home;
