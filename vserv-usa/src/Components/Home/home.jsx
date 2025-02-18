import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import Contact from "../ContactUs/Contact";
import Footer from "../Footer/Footer";
import { FaCirclePlay } from "react-icons/fa6";
import VideoPopup from "./VideoPopup";
import HomeVideo from "../../assets/home-vid-1.mp4";
import { AiFillBank } from "react-icons/ai";

const home = () => {
  const [playVid, setPlayVid] = useState(false);
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Nav />

      {/* Home Case Study Section */}
      <div className={`absolute z-50 ${!playVid ? "hidden" : ""}`}>
        <VideoPopup HomeVideo={HomeVideo} setPlayVid={setPlayVid} />
      </div>
      <section>
        <div className="w-full bg-[#111111] flex text-white p-20">
          <div className="w-[50%] flex flex-col gap-5">
            <h2 className="text-5xl font-semibold w-[70%]">
              Case Study: Rank Group partners with Wipro for real time customer
              insights<span className="text-8xl text-red-500 leading-0">.</span>
            </h2>
            <p className="w-[55%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
              neque ad soluta, quisquam velit reiciendis numquam deleniti odit
              labore, ipsum accusamus tenetur asperiores ullam a accusantium
              fugiat sed minus ratione?
            </p>
          </div>
          <div className="w-[50%] ">
            <div className="h-[400px] w-[600px] m-auto relative">
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <p className="text-white text-2xl text-center font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea modi
          explicabo accusantium aliquid, suscipit facilis possimus maiores
          consectetur qui quis, temporibus ullam accusamus laborum magnam,
          dolorum perferendis in dignissimos reiciendis laboriosam voluptatem
          quidem sint harum. Quod expedita assumenda voluptates, harum id nisi
          quis blanditiis itaque error minus asperiores. Tempore maxime delectus
          recusandae incidunt sit id repellendus, consectetur expedita animi
          voluptates nisi accusamus harum aperiam!
        </p>
      </section>

      {/* Home Third Section */}
      <section>
        {/*Third Section First Container */}
        <div className="flex w-screen bg-[#F1EEF0]">
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55]">
            <h2 className="text-5xl leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              How Your Business Can Leverage AI to its Full Potential
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur reprehenderit ducimus dolores molestiae? Reprehenderit
              doloribus accusantium dolore, voluptatum distinctio dicta totam
              dolorem asperiores ipsa vitae, nostrum autem a aliquid aspernatur,
              sit pariatur ullam commodi repellendus minus molestias est. Optio
              temporibus hic
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        {/*Third Section Second Container */}
        <div className="flex w-screen bg-[#F1EEF0]">
          <div className="w-[50%]">
            <img
              className="w-full h-[450px] object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55]">
            <h2 className="text-5xl leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              Integrating AI with Industry Cloud
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur reprehenderit ducimus dolores molestiae? Reprehenderit
              doloribus accusantium dolore, voluptatum distinctio dicta totam
              dolorem asperiores ipsa vitae
            </p>
          </div>
        </div>

        {/*Third Section Third Container */}
        <div className="flex w-screen bg-[#F1EEF0]">
          <div className="w-[50%] flex flex-col gap-4 justify-center pl-32 pr-28 text-[#341C55]">
            <h2 className="text-5xl leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
              Business Process Services and AI
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur reprehenderit ducimus dolores molestiae? Reprehenderit
              doloribus accusantium dolore, voluptatum distinctio dicta totam
              dolorem asperiores ipsa vitae, nostrum autem a aliquid aspernatur,
              sit pariatur ullam commodi repellendus minus molestias est. Optio
              temporibus hi dolorem asperiores ipsa vitae, nostrum autem a
              aliquid aspernatur, sit pariatur ullam commodi repellendus minus
              molestias est. Optio temporibus hi
            </p>
          </div>
          <div className="w-[50%]">
            <img
              className="w-full h-[550px] object-cover"
              src="https://images.unsplash.com/photo-1677691824257-5772713ac90a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              Ahead of The Curve: Wipro Forecasts Business Trends for 2025
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex
              consectetur doloremque quaerat veritatis explicabo, error
              voluptates aperiam odit animi consequatur soluta maiores, earum
              quos facere? Unde neque maiores voluptatem eos tempora fugit
              laborum porro blanditiis veritatis quaerat!
            </p>
            <button className="bg-white text-[#1B1B1B] text-sm py-2.5 px-6 rounded-full cursor-pointer hover:underline">
              Read More
            </button>
          </div>
          <div className="w-[23%] bg-green-300">
            <img
              className=""
              src="https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <h2 className=" text-4xl">Consulting Services</h2>
          <div className="flex flex-wrap gap-14 justify-center w-full">
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <AiFillBank className="text-5xl text-[#61AFC4]" />
              <h3 className="text-4xl text-[#1B0056] font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
                Banking
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <AiFillBank className="text-5xl text-[#61AFC4]" />
              <h3 className="text-4xl text-[#1B0056] font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
                Banking
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <AiFillBank className="text-5xl text-[#61AFC4]" />
              <h3 className="text-4xl text-[#1B0056] font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
                Banking
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <AiFillBank className="text-5xl text-[#61AFC4]" />
              <h3 className="text-4xl text-[#1B0056] font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
                Banking
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <AiFillBank className="text-5xl text-[#61AFC4]" />
              <h3 className="text-4xl text-[#1B0056] font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
                Banking
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <AiFillBank className="text-5xl text-[#61AFC4]" />
              <h3 className="text-4xl text-[#1B0056] font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
                Banking
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <AiFillBank className="text-5xl text-[#61AFC4]" />
              <h3 className="text-4xl text-[#1B0056] font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
                Banking
              </h3>
            </div>
            <div className="card w-[18%] h-[18vw] flex flex-col items-center justify-center rounded-2xl shadow-gray-300 shadow-2xl hover:scale-105 ease-in-out duration-300">
              <AiFillBank className="text-5xl text-[#61AFC4]" />
              <h3 className="text-4xl text-[#1B0056] font-semibold leading-14 cursor-pointer duration-500 ease-in-out hover:underline">
                Banking
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
      <Footer />
    </div>
  );
};

export default home;
