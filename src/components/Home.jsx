import React from "react";
import heroImage from "../assets/heroImage.png";
import { FaDownload } from "react-icons/fa";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text 4xl sm:text-7xl font-bold text-white">
            I am a <span className="text-rose-800">Front-End Developer</span>
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            🚀 Front-End Developer with 1 year of hands-on experience,
            specializing in creating visually stunning and highly functional
            websites. Passionate about crafting seamless user experiences
            through clean, efficient code. Let's bring your digital vision to
            life! 🌐💻
          </p>
          <div>
            <button className=" text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-rose-800 to to-rose-650 cursor-pointer hover:scale-110 duration-300">
              Resume
              <span className=" duration-300 ml-1">
                <FaDownload size={18} />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
