import React from "react";
import C from "/src/assets/c.png";
import Cpp from "/src/assets/c++.png";
import Java from "/src/assets/java.png"; 
import HTML from "/src/assets/html.png";
import CSS from "/src/assets/css.png";
import JavaScript from "/src/assets/js.png";
import ReactLogo from "/src/assets/react.png";
import TailwindCSS from "/src/assets/tailwindcss.png";
import Bootstrap from "/src/assets/bootstrap.png";
import NodeJS from "/src/assets/nodejs.png";
import ExpressJS from "/src/assets/expressjs.png";
import Git from "/src/assets/git.png";
import MySQL from "/src/assets/mysql.png";
import MongoDB from "/src/assets/mongodb.png";

const Skills = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16 px-6" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 text-center">
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={C}
                alt="C Language"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">C</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={Cpp}
                alt="C++ Language"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">C++</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={Java}
                alt="C Language"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">Java</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={HTML}
                alt="HTML"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">HTML</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={CSS}
                alt="CSS"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">CSS</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={JavaScript}
                alt="JavaScript"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">JavaScript</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={ReactLogo}
                alt="react"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">React</p>
            </div>{" "}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={TailwindCSS}
                alt="Tailwind CSS"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">Tailwind CSS</p>
            </div>{" "}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={Bootstrap}
                alt="bootstrap"
                className="w-30 h-30 mb-4 bg-white"
              />
              <p className="text-lg font-semibold">Bootstrap</p>
            </div>{" "}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={NodeJS}
                alt="Node.js"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">Node.js</p>
            </div>{" "}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={ExpressJS}
                alt="Express.js"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">Express.js</p>
            </div>{" "}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={Git}
                alt="Git"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">Git</p>
            </div>{" "}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={MySQL}
                alt="MySQL"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">MySQL</p>
            </div>{" "}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
                src={MongoDB}
                alt="MongoDB"
                className="w-30 h-30 mb-4"
              />
              <p className="text-lg font-semibold">MongoDB</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
