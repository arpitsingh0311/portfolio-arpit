import React from "react";
import Profile from "/src/assets/profile.jpg";

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-6 " id="about">
      <h2 className="text-4xl font-extrabold mb-12 text-center">About Me</h2>

      <div className="max-w-6xl mx-auto  gap-12 items-center hover:scale-105 transition duration-300">
        <div className="flex align-center justify-center gap-20 bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex justify-center">
            <img
              src={Profile}
              alt="Arpit's Profile"
              className="rounded-2xl w-72 h-72 object-cover shadow-lg border-4 border-indigo-500"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-300">
              Hi, I'm <span className="font-bold text-white">Arpit</span>, a
              passionate{" "}
              <span className="text-indigo-400 font-semibold">
                Web Developer
              </span>{" "}
              and 3rd-year Computer Science student at NIT Srinagar.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              I specialize in building responsive, user-friendly web
              applications using technologies like{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Tailwind CSS</span>, and{" "}
              <span className="text-white font-medium">Node.js</span>.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              Proficient in{" "}
              <span className="text-white font-medium">C, C++, and Java</span>,
              I've solved over{" "}
              <span className="text-white font-medium">
                300+ LeetCode problems
              </span>
              , strengthening my problem-solving skills.
            </p>

            {/* <p className="mt-5 text-lg leading-relaxed text-gray-300">
            I'm also diving into the world of{" "}
            <span className="text-white font-medium">AI/ML</span>, aiming to
            build smarter, scalable applications. I’m always excited to
            collaborate, learn, and build something meaningful.
          </p> */}
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              I'm passionate about learning, building, and solving real-world
              problems — and always open to exciting collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
