import { useState, useEffect, useRef } from "react";

const ChatBot = () => {
  const faqs = [
    {
      question: "Who are you?",
      answer:
        "I'm Yogesh Kushawah, a Full Stack Web Developer with 2+ years of professional experience. I specialize in the MERN stack and have hands-on expertise in building scalable web applications. Currently pursuing my Master's in Computer Applications from VIT (2027) and completed Full Stack Web Development from Masai School in 2024.",
    },
    {
      question: "What's your work experience?",
      answer:
        "I'm currently a Full Stack Developer at Qurocity since December 2024, leading a 10-member team and managing end-to-end MERN stack development. Previously, I was a Software Development Engineer at WILYER PVT. LTD. from July to December 2024, where I revamped CMS interfaces and built dynamic screen-scheduling features. I also worked as a Full Stack Developer at Masai from July 2023 to June 2024 providing coding instruction and mentorship.",
    },
    {
      question: "What are your technical skills?",
      answer:
        "I'm proficient in the MERN stack: MongoDB, Express.js, React.js with Redux, and Node.js. My frontend skills include HTML5, CSS3, JavaScript, Bootstrap, Chakra UI, and responsive design. On the backend, I work with RESTful APIs, SQL, MongoDB, authentication systems, and third-party API integrations. I'm experienced with Git, GitHub, CI/CD workflows, and Agile development.",
    },
    {
      question: "What's your best project?",
      answer:
        "My top projects include: Qurocity AI Platform at qurocity.ai - An AI-powered educational platform I'm leading at my current company. VerbiQ at verbiq.ai - A language-specific job opportunities platform. Kitchen Kingdom AI - An OpenAI-powered recipe generation platform with React.js and Chakra UI. All showcase my full-stack MERN expertise and AI integration capabilities.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach me via email at kushawahyogesh93@gmail.com, call or WhatsApp at +91 9389958702, or connect on LinkedIn at linkedin.com/in/yogeshkushawah. I'm based in Agra, Uttar Pradesh. Check out my GitHub at github.com/yogeshmasaist for my open-source projects!",
    },
    {
      question: "What makes you unique?",
      answer:
        "I bring 2+ years of proven experience leading development teams and delivering production-ready applications. I've successfully managed a 10-member team, integrated OpenAI APIs, built AI-powered platforms, and shipped live products like Qurocity.ai and VerbiQ.ai. My combination of technical expertise in MERN stack, team leadership, and real-world project delivery sets me apart.",
    },
    {
      question: "What are your career goals?",
      answer:
        "I'm focused on becoming a leading MERN stack expert and solution architect. My goal is to build innovative, scalable applications that solve real-world problems, contribute to open-source projects, and mentor the next generation of developers. I'm currently expanding my skills in AI integration and cloud technologies while pursuing my MCA from VIT.",
    },
    {
      question: "What's your education background?",
      answer:
        "I'm pursuing a Master of Computer Applications (MCA) from Vellore Institute of Technology, graduating in 2027. I completed Full Stack Web Development from Masai School, Bengaluru in 2024, and hold a Bachelor of Science in Mathematics from Dr. Bhim Rao Ambedkar University, Agra in 2022. I'm fluent in English and Hindi.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasSpokenWelcome, setHasSpokenWelcome] = useState(false);
  const chatBodyRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Speak welcome message when chatbot opens
  useEffect(() => {
    if (isOpen && !hasSpokenWelcome) {
      const welcomeMessage = "Hi! I'm Yogesh's virtual assistant. Ask me anything about his skills, projects, or work experience!";
      
      // Add welcome message to chat
      setMessages([
        { 
          type: "bot", 
          content: "👋 Hi! I'm Yogesh's virtual assistant. Ask me anything about his skills, projects, or work experience!" 
        }
      ]);
      
      // Speak the welcome message
      setTimeout(() => {
        speakAnswer(welcomeMessage);
      }, 500);
      
      setHasSpokenWelcome(true);
    }
  }, [isOpen, hasSpokenWelcome]);

  const handleQuestionClick = (question, answer) => {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    // Add user question
    setMessages((prev) => [...prev, { type: "user", content: question }]);
    
    // Add bot answer after a short delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", content: answer }]);
      speakAnswer(answer);
    }, 600);
  };

  const speakAnswer = (text) => {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.95; // Slightly slower for clarity
    speech.pitch = 1.0;
    speech.lang = 'en-US';
    
    setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);
    speech.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(speech);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleClose = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsOpen(false);
    setHasSpokenWelcome(false);
    setMessages([]);
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 md:bottom-6 md:right-6">
      {/* Chatbot Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse ring-4 ring-white/20 hover:ring-white/30 m-4 md:m-0 hover:scale-110"
          aria-label="Open chat"
        >
          <img
            src="https://avatars.githubusercontent.com/u/112820027?v=4"
            alt="Yogesh Kushwah"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
          />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex flex-col fixed inset-0 md:relative md:inset-auto w-full h-full md:w-[380px] md:h-[600px] bg-white shadow-2xl overflow-hidden transform transition-all border border-gray-200 md:rounded-2xl">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 sm:p-4 flex items-center gap-3 flex-shrink-0 shadow-lg">
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                <img
                  src="https://avatars.githubusercontent.com/u/112820027?v=4"
                  alt="Yogesh Kushawah"
                  className="w-full h-full object-cover"
                />
              </div>
              {isSpeaking && (
                <div className="absolute -bottom-1 -right-1 flex gap-0.5">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-white font-bold text-base sm:text-lg truncate">Yogesh Kushwah</h2>
              <p className="text-xs text-purple-100 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>
                <span className="truncate">Full Stack Developer • Available</span>
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {isSpeaking && (
                <button
                  onClick={stopSpeaking}
                  className="text-white hover:text-purple-200 transition-colors p-1"
                  aria-label="Stop speaking"
                  title="Stop speaking"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
              <button
                onClick={handleClose}
                className="text-white hover:text-purple-200 transition-colors text-2xl sm:text-3xl leading-none font-light"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden min-h-0">
            {/* Chat Body */}
            <div
              ref={chatBodyRef}
              className="flex-1 p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-purple-50 overflow-y-auto space-y-3 sm:space-y-4"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#d8b4fe #f3f4f6'
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`animate-fadeIn flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl max-w-[85%] sm:max-w-[80%] ${
                      msg.type === "user"
                        ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-br-none shadow-md"
                        : "bg-white text-gray-800 rounded-tl-none shadow-md border border-purple-100"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed break-words">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="flex-shrink-0 p-3 sm:p-4 bg-white border-t border-gray-200 max-h-48 sm:max-h-64 overflow-y-auto">
              <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 sm:mb-3">
                Quick Questions
              </p>
              <div className="grid grid-cols-1 gap-2">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(faq.question, faq.answer)}
                    className="text-left p-2.5 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl transition-all duration-200 text-xs sm:text-sm text-gray-700 hover:text-purple-900 shadow-sm hover:shadow-md border border-purple-100 hover:border-purple-300 font-medium active:scale-[0.98]"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
