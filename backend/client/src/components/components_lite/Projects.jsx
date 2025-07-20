import React from "react";
import BloodDonation from "/src/assets/blooddonation.png";
import ChatApp from "/src/assets/chatapp.png";
import JobPortal from "/src/assets/jobportal.png";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal - Web Application for Job Seekers",
      description:
        "A full-stack Job Portal web application where users can create profiles, explore job listings, and manage applications. Features include job listings & company setup, user profile & application forms, toast notifications using sonner, admin tools to company setup and jobs posting",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Sonner",
        "Node.js",
        "Express",
        "MongoDB",
        "BcryptJs",
        "Cookie-Parser",
        "Multer",
        "Axios",
        "Cloudinary",
      ],
      image: JobPortal,
      github: "https://github.com/arpitsingh0311/job-portal",
      demo: "https://job-portal-ktu1.onrender.com",
    },
    {
      title: "Pingly - RealTime Chat Application",
      description:
        "Pingly is a modern real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) that lets users connect and chat instantly. With a clean UI and smooth UX, Pingly is designed to be simple, responsive, and intuitive.",
      technologies: [
        "React",
        "Vite",
        "Axios",
        "Node.js",
        "Express.js",
        "JWT Auth",
        "Socket.io",
        "MongoDB",
      ],
      image: ChatApp,
      github: "https://github.com/arpitsingh0311/chat-app",
      demo: "https://chat-app-1a3d.onrender.com/",
    },
    {
      title: "Vital Drops - Blood Donation Website",
      description:
        "A full-stack web application that connects blood donors with recipients. The platform allows users to register as donors, request blood, and find suitable donors based on location and blood type. It features user authentication, blood request form and tracking, search for donors by blood group and location.",
      technologies: [
        "React",
        "Vite",
        "React Toastify",
        "Node.js",
        "Express",
        "MongoDB",
        "BcryptJs",
        "Cookie-Parser",
        "JWT",
        "Axios",
      ],
      image: BloodDonation,
      github: "https://github.com/arpitsingh0311/blood-donation",
      demo: "https://blood-donation-du85.onrender.com/",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-6 text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Projects</h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-12 flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-4/9">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fit"
              />
            </div>
            <div className="md:w-5/9 p-5 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2 uppercase text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border-2 border-red-400 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition w-max"
                >
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition w-max"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
