import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     message: "",
   });
   const [status, setStatus] = useState("");

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.id]: e.target.value });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus("Sending...");

     try {
       const res = await fetch("http://localhost:5000/api/contact", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });

       const data = await res.json();

       if (data.success) {
         setStatus("Message sent successfully!");
         setFormData({ name: "", email: "", message: "" });
       } else {
         setStatus("Failed to send message.");
       }
     } catch (err) {
       console.error(err);
       setStatus("An error occurred.");
     }
   };
  return (
    <section className="bg-gray-900 text-white py-24 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Connect with Me
        </h2>

        {/* Contact Info */}
        <div className="text-center text-gray-400 mb-10 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-gray-300" />
            +91 7355695054
          </p>
          <a
            className="flex items-center justify-center gap-2"
            href="https://mail.google.com/mail/?view=cm&to=arpit0316@gmail.com"
            target="_blank"
          >
            <FaEnvelope className="text-gray-300" />
            arpit0316@gmail.com
          </a>
          <div className="flex justify-center gap-6 text-2xl mt-4">
            <a
              href="https://github.com/arpitsingh0311"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="/src/assets/Resume.pdf"
              download
              className="hover:text-red-400 transition text-sm border px-3 py-1 rounded"
            >
              Resume
            </a>
          </div>
        </div>

        <p className="text-center text-gray-400 mb-12">
          Have a question, idea, or just want to say hi? Fill out the form
          below, and I'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </div>
          {status && (
            <p className="text-center mt-4 text-sm text-gray-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
