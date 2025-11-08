import React, { useEffect, useRef, useState } from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.jpg";
import javascript from "../assets/experience/javascript.png";
import bootstrap from "../assets/experience/bootstrap.png";
import react from "../assets/experience/reactjs.png";
import tailwind from "../assets/experience/tailwind.png";
import firebase from "../assets/experience/firebase.png";
import postman from "../assets/experience/postman.png";
import typescript from "../assets/experience/typescript.png";
import node from "../assets/experience/node.png";
import express from "../assets/experience/express.png";
import mongodb from "../assets/experience/mongodb.jpg";
import mysql from "../assets/experience/mysql.png";
import github from "../assets/experience/github.png";
import aws from "../assets/experience/aws.png";

function Experience() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const cardItem = [
    { id: 1, logo: html, name: "HTML", color: "from-orange-500 to-red-500" },
    { id: 2, logo: css, name: "CSS", color: "from-blue-500 to-cyan-500" },
    { id: 3, logo: javascript, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { id: 4, logo: react, name: "ReactJS", color: "from-cyan-400 to-blue-500" },
    { id: 5, logo: bootstrap, name: "Bootstrap", color: "from-purple-500 to-pink-500" },
    { id: 6, logo: tailwind, name: "Tailwind", color: "from-teal-400 to-blue-500" },
    { id: 7, logo: firebase, name: "Firebase", color: "from-yellow-500 to-orange-500" },
    { id: 8, logo: postman, name: "Postman", color: "from-orange-500 to-red-600" },
    { id: 9, logo: typescript, name: "TypeScript", color: "from-blue-600 to-blue-800" },
    { id: 10, logo: node, name: "NodeJS", color: "from-green-500 to-green-700" },
    { id: 11, logo: express, name: "ExpressJs", color: "from-gray-600 to-gray-800" },
    { id: 12, logo: mongodb, name: "MongoDB", color: "from-green-600 to-green-800" },
    { id: 13, logo: mysql, name: "MySQL", color: "from-blue-500 to-indigo-600" },
    { id: 14, logo: aws, name: "AWS", color: "from-yellow-600 to-orange-600" },
    { id: 15, logo: github, name: "Github", color: "from-gray-700 to-gray-900" },
  ];

  const workExperience = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Qurocity",
      duration: "Dec 2024 - Sep 2025",
      type: "Full-time",
      gradient: "from-purple-600 to-pink-600",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGXK3LGDJXtPA/company-logo_200_200/company-logo_200_200/0/1724825288715/chalkboard_academy_logo?e=1763596800&v=beta&t=6mIMvdPTa7dXuM6_-7uQ9BaRyqzT1Gpe8gILogHY-OU",
      fallbackIcon: "💼",
      achievements: [
        "Leading development of full stack applications using MERN stack",
        "Managing a 10-member team and mentoring juniors",
        "Optimizing backend-frontend integration performance",
        "Managing CI/CD workflows for deployment efficiency",
      ],
    },
    {
      id: 2,
      role: "Software Development Engineer",
      company: "WILYER PVT. LTD.",
      duration: "July 2024 - December 2024",
      type: "Full-time",
      gradient: "from-blue-600 to-cyan-600",
      logo: "https://logo.clearbit.com/wilyer.com",
      fallbackIcon: "⚡",
      achievements: [
        "Revamped CMS interface for enhanced user engagement",
        "Engineered dynamic screen-scheduling feature",
        "Collaborated with cross-functional teams",
        "Maintained coding standards and agile goals",
      ],
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Masai",
      duration: "July 2023 - June 2024",
      type: "Remote",
      gradient: "from-green-600 to-emerald-600",
      logo: "https://logo.clearbit.com/masaischool.com",
      fallbackIcon: "🚀",
      achievements: [
        "Developed responsive web applications",
        "Provided coding instruction & mentorship",
        "Conducted mock technical interviews",
      ],
    },
    {
      id: 4,
      role: "Full Stack Web Developer",
      company: "Solar Secure Solution",
      duration: "April 2023 - June 2023",
      type: "Internship",
      gradient: "from-orange-600 to-yellow-600",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQH9khADhf7ClQ/company-logo_200_200/company-logo_200_200/0/1695123145651?e=1763596800&v=beta&t=a1RCuHkkLataVtWsw_WcBJcCJEnRqnOysyAnHaiLRkQ",
      fallbackIcon: "🌟",
      achievements: [
        "Full-cycle development using MERN stack",
        "Gained hands-on MERN experience",
        "Delivered clean, functional code",
      ],
    },
  ];

  // State to track which logos failed to load
  const [failedLogos, setFailedLogos] = useState({});

  const handleImageError = (companyId) => {
    setFailedLogos((prev) => ({ ...prev, [companyId]: true }));
  };

  // Use the first experience's gradient as the default UI gradient for all cards
  const defaultGradient =
    workExperience && workExperience.length > 0
      ? workExperience[0].gradient
      : "from-purple-600 to-pink-600";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            setTimeout(() => {
              setVisibleCards((prev) => {
                // avoid duplicates
                if (prev.includes(index)) return prev;
                return [...prev, index];
              });
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      name="Experience"
      className="w-full min-h-screen to-indigo-50 py-8 sm:py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Professional Experience Section */}
        <div className="mb-16 sm:mb-24 w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent px-2">
              Professional Journey
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3 px-2">
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <p className="text-gray-600 text-sm sm:text-base whitespace-nowrap">Building the future</p>
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto w-full">
            {workExperience.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`w-full transition-all duration-700 ${
                  visibleCards.includes(index) ? "opacity-100 translate-x-0" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden h-full w-full">
                  {/* Gradient Top Bar - uses defaultGradient */}
                  <div className={`h-2 bg-gradient-to-r ${defaultGradient}`}></div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 w-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4 w-full">
                      <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                        {/* Company Logo Container */}
                        <div className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                          {/* Gradient Border Ring */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${defaultGradient} rounded-xl opacity-20 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>

                          {/* White Background Circle */}
                          <div className="absolute inset-[2px] bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden">
                            {failedLogos[exp.id] ? (
                              <span className="text-lg sm:text-xl">{exp.fallbackIcon}</span>
                            ) : (
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain p-0.5 group-hover:scale-110 transition-transform duration-300"
                                onError={() => handleImageError(exp.id)}
                              />
                            )}
                          </div>

                          {/* Hover Glow */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${defaultGradient} rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10`}
                          ></div>
                        </div>

                        <div className="flex-1 min-w-0 overflow-hidden">
                          <h2
                            className={`text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r ${defaultGradient} bg-clip-text text-transparent mb-1 leading-tight break-words`}
                          >
                            {exp.role}
                          </h2>
                          <p className="text-gray-700 font-semibold text-xs sm:text-sm truncate">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Duration & Type */}
                    <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap w-full">
                      <span className="text-[10px] sm:text-xs text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded-full font-medium whitespace-nowrap">
                        📅 {exp.duration}
                      </span>
                      <span
                        className={`text-[10px] sm:text-xs bg-gradient-to-r ${defaultGradient} text-white px-2 sm:px-3 py-1 rounded-full font-semibold shadow-md whitespace-nowrap`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className="w-full">
                      <h3 className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 sm:mb-3 flex items-center gap-2">
                        <span className={`w-3 sm:w-4 md:w-6 h-0.5 bg-gradient-to-r ${defaultGradient} flex-shrink-0`}></span>
                        <span className="whitespace-nowrap">Key Highlights</span>
                      </h3>
                      <ul className="space-y-1.5 sm:space-y-2 w-full">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 group/item w-full"
                            style={{
                              animation: visibleCards.includes(index)
                                ? `slideIn 0.4s ease-out ${idx * 0.1}s both`
                                : "none",
                            }}
                          >
                            <span
                              className={`flex-shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br ${defaultGradient} flex items-center justify-center text-white text-[10px] sm:text-xs font-bold mt-0.5 group-hover/item:scale-125 transition-transform duration-300`}
                            >
                              ✓
                            </span>
                            <span className="leading-relaxed flex-1 break-words">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${defaultGradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent px-2">
              Tech Stack
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-3 px-2">
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <p className="text-gray-600 text-sm sm:text-base whitespace-nowrap">Tools I master</p>
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto w-full px-2">
            {cardItem.map(({ id, logo, name, color }, index) => (
              <div
                key={id}
                className="group relative w-full"
                style={{
                  animation: `techFloat 3s ease-in-out ${index * 0.1}s infinite`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Card */}
                <div className="relative flex flex-col items-center justify-center bg-white rounded-xl sm:rounded-2xl aspect-square shadow-md p-2 sm:p-3 md:p-4 cursor-pointer transform group-hover:scale-105 transition-all duration-500 border-2 border-transparent group-hover:border-white w-full">
                  {/* Logo */}
                  <div className="mb-1 sm:mb-2 transform group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    <img
                      src={logo}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain drop-shadow-lg"
                      alt={name}
                    />
                  </div>

                  {/* Name */}
                  <div
                    className={`text-center font-bold text-[9px] sm:text-[10px] md:text-xs bg-gradient-to-r ${color} bg-clip-text text-transparent leading-tight break-words w-full px-1`}
                  >
                    {name}
                  </div>

                  {/* Sparkle */}
                  <div className="absolute top-1 right-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes techFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}

export default Experience;
