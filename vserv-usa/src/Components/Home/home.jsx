import React, { useState } from "react";
import Contact from "../ContactUs/Contact";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaDigitalOcean, FaProductHunt, FaTools } from "react-icons/fa";
import { ImAmazon } from "react-icons/im";
import { FiFigma } from "react-icons/fi";
import { LuRadioTower } from "react-icons/lu";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import ai from "../../Components/images/ai.jpg";
import software from "../../Components/images/software.jpg";
import software2 from "../../Components/images/software2.jpg";
import software3 from "../../Components/images/software3.avif";
import experties from "../../Components/images/experties.avif";
import web from "../../Components/images/web.avif";
import js from "../../Components/images/js.avif";
import app from "../../Components/images/app.avif";
import devops from "../../Components/images/devops.avif";
import uiux from "../../Components/images/uiux.avif";
import iot from "../../Components/images/iot.avif";
import v4 from "../../Components/images/v4.mp4";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [playVid, setPlayVid] = useState(false);
  return (
    <div className="max-w-screen overflow-x-hidden">
    <section>
  <div className="relative w-full h-[700px] bg-[#111111] flex text-white max-lg:flex-col gap-4 max-lg:p-8">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover fade-in-video"
      autoPlay
      loop
      muted
      src={v4}
    ></video>
    <div className="relative z-10 w-full h-full flex flex-col gap-4 items-end  justify-center  text-white bg-black/50">
      <h1 className="text-5xl font-bold fade-in-up mr-5">VSERV Infosystems INC</h1>
      <div className="text-[29px] fade-in-up w-120 mr-7" style={{ animationDelay: "0.3s" }}>
      <p className="items-center justify-center font-semibold flex gap-2">
        Engineering Digital Excellence -  
      </p>
      <p className="items-center justify-center font-semibold flex gap-2" >Because Ordinary is Not an Option!</p>
      </div>
    </div>
  </div>
</section>


      {/* Home second Section */}
      <section className="bg-[#362358] w-full px-10 pt-7 pb-4 max-lg:px-5">
        <p className="text-white text-xl text-center font-semibold max-lg:text-base">
          At Vserv Infosystems INC, we specialize in delivering top-tier IT
          solutions that empower businesses to achieve digital excellence. With
          expertise in software development, cybersecurity, managed services,
          and artificial intelligence, we provide cutting-edge solutions
          tailored to your business needs. <br />
          With a team of highly skilled professionals, we focus on scalability,
          innovation, and efficiency, ensuring that your organization stays
          ahead in today’s competitive digital landscape
        </p>
      </section>

      {/* Home Third Section */}
      <section>
        {/*Third Section First Container */}
        <div className="flex w-screen bg-[#F1EEF0] max-lg:flex-col max-lg:items-center">
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55] max-lg:w-[100%] max-lg:px-10 max-lg:text-center max-lg:my-7">
            <h2 className="text-4xl leading-10 cursor-pointer duration-500 ease-in-out hover:underline ">
              How to Choose the Right Software Services for Your Business Needs?
            </h2>
            <p className="text-sm">
              In today’s technology-driven world, businesses rely on robust
              software solutions to streamline operations, enhance productivity,
              and drive growth. Choosing the right software services is critical
              to ensure seamless integration, scalability, and efficiency. At
              Vservit, we empower businesses with cutting-edge software
              solutions tailored to meet their unique needs. Here’s a guide to
              help you make the right choice for your business.
            </p>
          </div>
          <div className="w-[50%] max-lg:w-[90%]">
            <img src={software} alt="" />
          </div>
        </div>

        {/*Third Section Second Container */}
        <div className="flex w-screen bg-[#F1EEF0] max-lg:flex-col-reverse max-lg:items-center">
          <div className="w-[50%] max-lg:w-[90%]">
            <img className="w-[100%]  object-cover" src={software3} alt="" />
          </div>
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55] max-lg:w-[100%] max-lg:px-10 max-lg:text-center max-lg:my-7">
            <h2 className="text-4xl leading-10 cursor-pointer duration-500 ease-in-out hover:underline">
              <a
                href="https://vservit.com/vservit-wins-the-cio-choice-2025-it-service-vendor-award-a-testament-to-excellence-and-innovation/"
                target="_blank"
              >
                Future-Proof Your Business with Custom Software Development
              </a>
            </h2>
            <p className="text-sm">
              In today's fast-paced digital landscape, off-the-shelf solutions
              often fall short of meeting unique business needs. Custom software
              development is the key to enhancing efficiency, scalability, and
              innovation. At Vserv IT, we craft tailor-made software solutions
              designed to align perfectly with your business objectives,
              ensuring long-term success.
            </p>
          </div>
        </div>

        {/*Third Section Third Container */}
        <div className="flex w-screen bg-[#F1EEF0] max-lg:flex-col max-lg:items-center">
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55] max-lg:w-[100%] max-lg:px-10 max-lg:text-center max-lg:my-7">
            <h2 className="text-4xl leading-10 cursor-pointer duration-500 ease-in-out hover:underline">
              Why Scalable Software Solutions are the Backbone of Modern
              Businesses
            </h2>
            <p className="text-sm">
              In the ever-evolving business world, adaptability and efficiency
              are the keys to success. Scalable software solutions have emerged
              as the cornerstone for modern enterprises, enabling them to stay
              ahead of the curve. At Vserv IT, we understand how crucial a
              robust, scalable software infrastructure is for fostering
              innovation and driving business growth.
            </p>
          </div>
          <div className="w-[50%] max-lg:w-[90%]">
            <img src={software2} alt="" />
          </div>
        </div>
      </section>

      {/* Home Fourth Section */}
      <section>
        <div className="w-full bg-[#1B1B1B] flex p-16 max-lg:flex-col items-center">
          <div className="w-[77%] flex flex-col gap-5 justify-center items-start text-white pr-[20vw] max-lg:w-[100%] max-lg:p-0">
            <h2 className="text-4xl font-semibold">
              AI Conclave 2025: Pioneering the Future of AI with VservIT and
              Industry Leaders
            </h2>
            <p className="text-lg">
              Vserv Infosystem, a leader in IT solutions and digital
              transformation, has been recognized with the prestigious CIO
              Choice Award 2025 for delivering cutting-edge technology solutions
              that drive business success. This recognition underscores our
              commitment to empowering organizations with real-time customer
              insights, advanced analytics, and AI-driven decision-making.
            </p>
            <button className="bg-white text-[#1B1B1B] text-sm py-2.5 px-6 rounded-full cursor-pointer hover:underline">
              <a href="https://aievent.vservit.com/" target="_blank">
                Read More
              </a>
            </button>
          </div>
          <div className="w-[23%] max-lg:w-[100%] max-lg:mt-10">
            <img className="w-full h-full object-cover" src={ai} alt="" />
          </div>
        </div>
      </section>

      {/* Home Fifth Section */}
      <section>
        <div className="w-full flex flex-wrap bg-[#7470A6] text-white items-center max-lg:text-center">
          <div className="w-full flex items-center flex-wrap max-lg:flex-col max-lg:gap-5">
            <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw] max-lg:w-[100%] max-lg:h-full">
              <h3 className="text-2xl font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                We specialize in custom web development with modern frameworks
                and CMS platforms
              </h3>
            </div>
            <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden max-lg:w-[90%] max-lg:h-full">
              <img
                className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
                src={web}
                alt=""
              />
            </div>
            <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw] max-lg:w-[100%] max-lg:h-full">
              <h3 className="text-2xl font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                Build high-performance web applications with modern JavaScript
                frameworks
              </h3>
            </div>
            <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden max-lg:w-[90%] max-lg:h-full">
              <img
                className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
                src={js}
                alt=""
              />
            </div>
          </div>

          <div className="w-full flex items-center flex-wrap max-lg:flex-col-reverse max-lg:gap-5">
            <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden max-lg:w-[90%] max-lg:h-full">
              <img
                className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
                src={app}
                alt=""
              />
            </div>
            <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw] max-lg:w-[100%] max-lg:h-full">
              <h3 className="text-2xl font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                We develop feature-rich, scalable, and secure mobile
                applications for iOS, Android, and cross-platform environments
              </h3>
            </div>
            <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden max-lg:w-[90%] max-lg:h-full">
              <img
                className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
                src={devops}
                alt=""
              />
            </div>
            <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw] max-lg:w-[100%] max-lg:h-full">
              <h3 className="text-2xl font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                Enhance CI/CD pipelines, cloud adoption, and infrastructure
                automation with our DevOps expertise
              </h3>
            </div>
          </div>

          <div className="w-full flex items-center flex-wrap max-lg:flex-col max-lg:gap-5">
            <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw] max-lg:w-[100%] max-lg:h-full">
              <h3 className="text-2xl font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                Create user-centric designs with our prototyping and UI/UX
                design services
              </h3>
            </div>
            <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden max-lg:w-[90%] max-lg:h-full">
              <img
                className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
                src={uiux}
                alt=""
              />
            </div>
            <div className="cards flex items-center justify-center p-10 w-[25%] h-[25vw] max-lg:w-[100%] max-lg:h-full">
              <h3 className="text-2xl font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                Leverage IoT-enabled solutions to create smart, connected
                ecosystems
              </h3>
            </div>
            <div className="cards flex items-center justify-center w-[25%] h-[25vw] bg-red-500 overflow-hidden max-lg:w-[90%] max-lg:h-full">
              <img
                className="w-full h-full object-cover duration-600 ease-in-out hover:scale-110"
                src={iot}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Home Sixth Section */}
      <section>
        <div className="w-full flex flex-col gap-10 items-center py-10">
          <h2 className=" text-4xl">Services</h2>
          <div className="flex flex-wrap gap-14 justify-center w-full">
            <div className="card w-[20%] h-[20vw] min-w-[195px] min-h-[195px] p-5 flex flex-col gap-5 items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <HiMiniUserGroup className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                <Link to="/staffAugmentation">Staff Augmentation</Link>
              </h3>
            </div>
            <div className="card w-[20%] h-[20vw] min-w-[195px] min-h-[195px] p-5 flex flex-col gap-5 items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <FaTools className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                <Link to="/it-support-management-service">
                  IT Support & Managed Services
                </Link>
              </h3>
            </div>
            <div className="card w-[20%] h-[20vw] min-w-[195px] min-h-[195px] p-5 flex flex-col gap-5 items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <ImAmazon className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                <Link to="/e-commerce-solution">E-Commerce Solutions</Link>
              </h3>
            </div>
            <div className="card w-[20%] h-[20vw] min-w-[195px] min-h-[195px] p-5 flex flex-col gap-5 items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <FiFigma className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                <Link to="/prototyping-ui-design">
                  Prototyping & UI/UX Design
                </Link>
              </h3>
            </div>
            <div className="card w-[20%] h-[20vw] min-w-[195px] min-h-[195px] p-5 flex flex-col gap-5 items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <FaDigitalOcean className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                <Link to="/enterprise-digital-transformation">
                  Enterprise Digital Transformation
                </Link>
              </h3>
            </div>
            <div className="card w-[20%] h-[20vw] min-w-[195px] min-h-[195px] p-5 flex flex-col gap-5 items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <FaProductHunt className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                <Link to="/product-engineering">Product Engineering</Link>
              </h3>
            </div>
            <div className="card w-[20%] h-[20vw] min-w-[195px] min-h-[195px] p-5 flex flex-col gap-5 items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <LuRadioTower className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                <Link to="/internet-Of-things">Internet of Things (IoT)</Link>
              </h3>
            </div>
            <div className="card w-[20%] h-[20vw] min-w-[195px] min-h-[195px] p-5 flex flex-col gap-5 items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <MdOutlineAppSettingsAlt className="text-5xl text-[#61AFC4]" />
              <h3 className="text-xl text-[#1B0056] text-center font-semibold cursor-pointer duration-500 ease-in-out hover:underline">
                <Link to="/mobile-app-development">Mobile App Development</Link>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/*Home Content Hover Section */}
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="group relative bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover md:w-[50%] w-full h-[500px] flex flex-col gap-4 items-center justify-center text-white">
            <div className="absolute inset-0 bg-black/50"></div>
            <h2 className="text-5xl font-bold text-center mt-32 w-[60%] relative z-10 group-hover:mt-0 duration-700 max-lg:text-2xl">
              Technologies We Specialize In
            </h2>
            <div className="w-[80%] flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 relative z-10">
              <ul>
                <li>✅ Emerging Technologies</li>
                <li>✅ Web & Mobile Application Development</li>
                <li>✅ Big Data & Cloud Solutions</li>
                <li>✅ Content Management Systems (CMS)</li>
                <li>✅ Cloud Computing & DevOps</li>
              </ul>
            </div>
          </div>
          <div
            className="group relative bg-center bg-cover md:w-[50%] w-full h-[500px] flex flex-col gap-4 items-center justify-center text-white"
            style={{ backgroundImage: `url(${experties})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Dark Overlay */}
            <h2 className="text-5xl font-bold text-center mt-72 w-[60%] relative z-10 group-hover:mt-0 duration-700 max-lg:text-2xl">
              Our Expertise
            </h2>
            <div className="w-[80%] flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 relative z-10">
              <p className="text-2xl text-center max-lg:text-base">
                Partner with Vserv Infosystems INC to unlock tailored, scalable,
                and innovative solutions that drive efficiency and digital
                transformation for your business.
              </p>
              <h1>Why Choose Us?</h1>
              <ul>
                <li>
                  ✅ Proven Expertise – Years of experience in delivering
                  enterprise IT solutions
                </li>
                <li>
                  ✅ Scalable & Secure Solutions – Built for performance,
                  reliability, and security
                </li>
                <li>
                  ✅ Client-Centric Approach – Custom solutions that align with
                  business goals
                </li>
                <li>
                  ✅ 24/7 Support – Ensuring seamless operations with
                  round-the-clock assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Home;
