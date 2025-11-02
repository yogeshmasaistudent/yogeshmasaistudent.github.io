import React, { useEffect, useState } from "react";
import pic from "../assets/photo.jpg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import ChateBot from "./ChateBot/ChateBot";

function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Voice greeting function
  const speakGreeting = () => {
    if ("speechSynthesis" in window && !isMuted) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(
        "Hi, welcome to Vivek Web Site."
      );

      const voices = synth.getVoices();
      const voice = voices.find((voice) => voice.lang === "en-US");
      if (voice) {
        utterance.voice = voice;
      }

      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;

      synth.speak(utterance);
    }
  };

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      console.warn("Web Speech API is not supported in this browser.");
      return;
    }

    const handleUserInteraction = () => {
      if (!isMuted) {
        speakGreeting();
      }
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (isMuted) {
      speakGreeting();
    }
   };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 relative overflow-hidden mt-16"
      >
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-50 opacity-50">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-200"></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 bg-blue-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Visual Greeting with fade-in animation */}
        <div
          className={`text-center mb-8 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg text-red-900 hover:text-gray-800 duration-100">
            👋 Hi, welcome to Yogesh WebSite.
          </p>
          {!("speechSynthesis" in window) && (
            <p className="text-sm text-red-500">
              (Voice greeting not supported in this browser.)
            </p>
          )}
         
        </div>

        <div className="flex flex-col md:flex-row relative z-10">
          <div
            className={`md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <span className="text-xl text-gray-700 font-medium">
              👋 Transforming Ideas into Digital Reality
            </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
             I'm Yogesh Kushawah, a Full Stack Web Developer with 2 years of professional experience in building scalable web applications using the MERN stack. With expertise in both front-end and back-end technologies, I've led development teams, delivered AI-integrated platforms, and optimized full-stack solutions for real-world business challenges.

Currently pursuing my Master of Computer Applications (MCA) from Vellore Institute of Technology while working as a Full Stack Developer at Qurocity, I'm passionate about creating impactful and efficient web solutions.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  {[
                    { Icon: BsFillPersonLinesFill, href: "/resume.pdf" },
                    {
                      Icon: FaLinkedin,
                      href: "https://www.linkedin.com/in/yogeshkushawah/",
                    },
                    { Icon: FaGithub, href: "https://github.com/yogeshmasaistudent" },
                    {
                      Icon: MdEmail,
                      href: "https://mail.google.com/mail/?view=cm&to=kushawahyogesh93@gmail.com",
                    },
                  ].map(({ Icon, href }, index) => (
                    <li
                      key={index}
                      className="transform hover:scale-125 transition-transform duration-300"
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="text-2xl cursor-pointer hover:text-blue-600" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  {[SiMongodb, SiExpress, FaReact, FaNodeJs].map(
                    (Icon, index) => (
                      <Icon
                        key={index}
                        className="text-2xl md:text-3xl transform hover:scale-125 transition-all duration-300 hover:text-blue-600 rounded-full border-[2px] cursor-pointer hover:border-blue-600 p-1"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
 <div className="flex justify-center items-center">
  <img
    src={pic}
    className="rounded-full w-64 h-64 md:w-[400px] md:h-[400px] transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl ring-4 ring-blue-100 hover:ring-blue-300"
    alt="Vivek's Profile"
  />
</div>

          </div>
        </div>
        <ChateBot />
      </div>
      <hr />
    </>
  );
}

export default Home;
