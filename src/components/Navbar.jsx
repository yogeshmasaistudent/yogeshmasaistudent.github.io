


import React, { useState } from "react";
import pic from "../assets/photo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Skills" },
    { id: 6, text: "Contact" },
   
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img 
              src={pic} 
              className="h-12 w-12 rounded-full border-2 border-green-500 p-0.5 transition-transform duration-300 group-hover:scale-105" 
              alt="Profile" 
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                Yogesh<span className="text-green-500">.</span>
              </h1>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active-nav"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 cursor-pointer"
                >
                  {text}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-green-500 transition-all 
                                duration-300 group-hover:w-4/5"></span>
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-green-500 transition-all 
                                duration-300 group-hover:left-[10%]"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenu(!menu)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm
            overflow-hidden transition-all duration-300 ease-out ${menu ? "max-h-96" : "max-h-0"}`}>
          <ul className="px-4 py-6 space-y-4">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  onClick={() => setMenu(false)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active-nav"
                  className="block px-4 py-3 text-lg text-gray-600 hover:bg-green-50 rounded-lg
                           hover:text-green-600 transition-colors"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;