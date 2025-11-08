import React, { useEffect, useState } from "react";
import pic from "../assets/photo.jpg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ReactTyped } from "react-typed";
import ChateBot from "./ChateBot/ChateBot";

function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resumeUrl = "/resume.pdf";

  const speakGreeting = () => {
    if ("speechSynthesis" in window && !isMuted) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(
        "Hi! I'm Yogesh's virtual assistant. Ask me anything about his skills, projects, or work experience!"
      );
      const voices = synth.getVoices();
      const voice = voices.find((voice) => voice.lang === "en-US");
      if (voice) utterance.voice = voice;
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;
      synth.speak(utterance);
    }
  };

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const handleUserInteraction = () => {
      if (!isMuted) speakGreeting();
      window.removeEventListener("click", handleUserInteraction);
    };
    window.addEventListener("click", handleUserInteraction);
    return () => window.removeEventListener("click", handleUserInteraction);
  }, [isMuted]);

  const handleResumeClick = () => {
    try {
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    } catch {}
    try {
      const a = document.createElement("a");
      a.href = resumeUrl;
      a.download = "Yogesh_Kushawah_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <>
      <div
        name="Home"
        className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 mt-16 overflow-hidden min-h-[90vh] py-16"
      >
        {/* Animated gradient background for hero */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 animate-gradientFlow opacity-20"></div>

        {/* Floating soft particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 bg-white rounded-full opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row relative z-10">
          <div
            className={`md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <span className="text-xl text-gray-700 font-medium">
              Transforming Ideas into Digital Reality
            </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold text-xl sm:text-2xl md:text-3xl"
                strings={[
                  "Software Engineer",
                  "MERN Developer",
                  "Frontend Engineer",
                  "Backend Engineer",
                  "Full Stack Dev",
                  "AI Enthusiast",
                ]}
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
            <div className="flex justify-center">
              <button
                onClick={handleResumeClick}
                className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold shadow-xl transform transition-all duration-300
                           bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-0"
                aria-label="Download and open resume"
              >
                <BsFillPersonLinesFill className="text-lg animate-pulse" />
                <span className="whitespace-nowrap">Download Resume</span>

                {/* Shine animation on hover */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-700"
                ></span>
              </button>
            </div>
          </div>

          <div
            className={`md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="flex justify-center items-center">
              <img
                src={pic}
                className="rounded-full w-64 h-64 md:w-[400px] md:h-[400px] transform hover:scale-105 transition-all duration-500 shadow-2xl"
                alt="Yogesh's Profile"
              />
            </div>
          </div>
        </div>

        <ChateBot />
      </div>

      {/* Gradient animation & particles CSS */}
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientFlow {
          background-size: 300% 300%;
          animation: gradientFlow 10s ease infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Home;
