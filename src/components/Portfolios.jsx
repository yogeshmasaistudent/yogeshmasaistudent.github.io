import React, { useState } from "react";
import Generics from "../assets/portfolio/Generics.png";
import Reactmeal from "../assets/portfolio/Reactmeal.png";
import OurExpense from "../assets/portfolio/ourExpense.png";
import Yogasana from "../assets/portfolio/Yogasana.png";
import PetVet from "../assets/portfolio/petVerce.png";
import RentEasy from "../assets/portfolio/RentEasy.png";


const Portfolios = () => {
  const [activeTab, setActiveTab] = useState("all");


  // Professional Projects (Company Work)
  const professionalProjects = [
    {
      id: 1,
      name: "Qurocity AI Platform",
      category: "professional",
      type: "🏢 Company Project",
      description: "AI-powered educational platform developed at Qurocity. Leading full-stack development using MERN stack with OpenAI API integration.",
      tech: "React.js, Node.js, MongoDB, OpenAI API, Express.js",
      demoLink: "https://qurocity.ai/",
      codeLink: null, // Private company code
      badge: "Live Production",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: 2,
      name: "VerbiQ AI",
      category: "professional",
      type: "🏢 Company Project",
      description: "Language-specific job opportunities platform offering roles in French, British English, and other linguistic specializations.",
      tech: "React.js, Node.js, RESTful APIs, MongoDB",
      demoLink: "https://verbiq.ai/",
      codeLink: null, // Private company code
      badge: "Live Production",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      name: "Kitchen Kingdom AI",
      category: "professional",
      type: "💼 Featured Project",
      description: "AI-powered recipe generation platform delivering personalized dishes using OpenAI API integration with responsive UI built using React.js and Chakra UI.",
      tech: "React.js, OpenAI API, Chakra UI, Node.js",
      demoLink: "https://kitchen-kingdom-ai.vercel.app",
      codeLink: "https://github.com/yogeshmasaist/Kitchen-Kingdom-AI",
      badge: "AI Powered",
      gradient: "from-orange-600 to-red-600",
    }
  ];


  // Personal/Learning Projects
  const personalProjects = [
    {
      id: 5,
      name: "Yogasanas Tracker",
      category: "personal",
      type: "🚀 Full Stack",
      src: Yogasana,
      description: "Yogasana Tracker designed for tracking & sharing yogasana with community groups. Built with Firebase for real-time data sync.",
      tech: "React.js, Firebase, Google API, Real-time Database",
      demoLink: "https://cerulean-concha-368de4.netlify.app/",
      codeLink: "https://github.com/yogeshmasaistudent/Yogasana_Tracker",
      badge: "Firebase",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      id: 6,
      name: "PetVet Platform",
      category: "personal",
      type: "🚀 Full Stack",
      src: PetVet,
      description: "PetVerse is a simple and fun pet care management app that helps pet owners stay organized with appointment scheduling and health tracking.",
      tech: "React.js, Node.js, MongoDB, Express.js",
      demoLink: "https://candid-mandazi-949e6c.netlify.app/",
      codeLink: "https://github.com/yogeshmasaistudent/zoocoAssignment",
      badge: "MERN Stack",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 7,
      name: "RentEasy Platform",
      category: "personal",
      type: "🚀 Full Stack",
      src: RentEasy,
      description: "Smart Tenant-Landlord Platform with AI-Powered assistance for seamless property management and appointment scheduling.",
      tech: "React.js, MongoDB, Firebase, AI Integration",
      demoLink: "https://renteasy-appointment.netlify.app/",
      codeLink: "https://github.com/yogeshmasaistudent/Tenant-Landlord-master",
      badge: "AI Features",
      gradient: "from-teal-500 to-green-600",
    }
  ];


  const allProjects = [...professionalProjects, ...personalProjects];


  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : activeTab === "professional"
      ? professionalProjects
      : personalProjects;


  return (
    <div name="portfolio" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base">Building innovative solutions</p>
            <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
          </div>
        </div>


        {/* Filter Tabs - Responsive Wrap */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
              activeTab === "all"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:shadow-md"
            }`}
          >
            <span className="hidden sm:inline">All Projects ({allProjects.length})</span>
            <span className="sm:hidden">All ({allProjects.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("professional")}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
              activeTab === "professional"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:shadow-md"
            }`}
          >
            <span className="hidden sm:inline">Professional ({professionalProjects.length})</span>
            <span className="sm:hidden">Pro ({professionalProjects.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
              activeTab === "personal"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:shadow-md"
            }`}
          >
            <span className="hidden sm:inline">Personal ({personalProjects.length})</span>
            <span className="sm:hidden">Personal ({personalProjects.length})</span>
          </button>
        </div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>


              {/* Project Image (if available) */}
              {project.src && (
                <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
                  <img
                    src={project.src}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}


              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Badge & Type */}
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="text-xs font-semibold text-gray-500 truncate">
                    {project.type}
                  </span>
                  <span
                    className={`text-xs bg-gradient-to-r ${project.gradient} text-white px-2 sm:px-3 py-1 rounded-full font-semibold whitespace-nowrap flex-shrink-0`}
                  >
                    {project.badge}
                  </span>
                </div>


                {/* Title */}
                <h2
                  className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3`}
                >
                  {project.name}
                </h2>


                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>


                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Tech Stack
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {project.tech}
                  </p>
                </div>


                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 bg-gradient-to-r ${project.gradient} text-white text-center py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Live Demo
                  </a>
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg font-medium text-sm hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                      Code
                    </a>
                  )}
                  {!project.codeLink && (
                    <div className="flex-1 bg-gray-100 text-gray-400 text-center py-2 px-4 rounded-lg font-medium text-sm cursor-not-allowed">
                      Private
                    </div>
                  )}
                </div>
              </div>


              {/* Hover Glow Effect */}
              <div
                className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolios;
