import React from 'react';
import '../styles/Navbar.css'; 
import { Button } from "@/components/ui/button";


const Navbar = () => {
  return (
    <div className="text">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto height-16">
        <div>
          <h1 className="spacing font-extrabold text-3xl text-white">
            Portfolio
          </h1>
        </div>
        <div className='flex gap-15'>
          <ul className="flex items-center gap-10 ">
            <li className="font-bold text-xl hover:text-white"><a href="#about">About</a></li>
            <li className="font-bold text-xl hover:text-white"><a href="#education">Education</a></li>
            <li className="font-bold text-xl hover:text-white"><a href="#skills">Skills</a></li>
            <li className="font-bold text-xl hover:text-white"><a href="#projects">Projects</a></li>
            
            {/* <li className="font-bold text-xl hover:text-white">Contact</li> */}
          </ul>
          <button className='btn1 bg-gray-800'><a href="#contact">Connect</a></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
