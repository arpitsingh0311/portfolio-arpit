import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-img">
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen w-full flex flex-col justify-center items-center px-4 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider mb-4">
          Hi, I’m Arpit
        </h1>
        <p className="text-xl md:text-2xl max-w-xl mb-8 text-gray-200">
          A CSE student and web developer passionate about crafting clean,
          user-friendly websites and applications.
        </p>
        <a
          href="#contact"
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Connect with Me
        </a>
      </div>
    </div>
  );
};

export default Home;
