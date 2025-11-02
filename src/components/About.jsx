import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-5"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 inline-block border-b-4 border-blue-600">
          About Me
        </h1>
        
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          I don't just write code — <span className="font-semibold text-gray-900">I craft solutions that matter.</span>
        </p>

        <p className="mt-4 text-base leading-relaxed text-gray-700">
          As a <span className="font-semibold text-blue-600">Full Stack Web Developer</span> with a relentless passion for innovation, 
          I specialize in building <span className="font-semibold">high-performance, scalable web applications</span> that solve 
          real business challenges. My expertise spans the entire development lifecycle — from conceptualizing user experiences 
          to architecting robust backend systems.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🌟 What Sets Me Apart
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                🔥 Team Leadership Excellence
              </h3>
              <p className="text-gray-700">
                Successfully led and mentored <span className="font-semibold">10-member development teams</span>, 
                fostering collaborative environments that consistently exceed sprint goals and deliver ahead of schedule.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                🤖 AI Integration Mastery
              </h3>
              <p className="text-gray-700">
                Pioneered <span className="font-semibold">AI-powered platforms</span> leveraging OpenAI APIs, 
                creating intelligent solutions that enhance user engagement and automate complex workflows.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                ⚡ Performance Optimization Expert
              </h3>
              <p className="text-gray-700">
                Engineered backend architectures and frontend optimizations that reduced load times by 
                <span className="font-semibold"> 40%</span> and improved overall system efficiency.
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">
                🎨 User-Centric Design Advocate
              </h3>
              <p className="text-gray-700">
                Transformed complex requirements into intuitive, mobile-first interfaces using React.js, Redux, 
                and modern UI frameworks — prioritizing accessibility and user delight.
              </p>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                📈 Continuous Growth Mindset
              </h3>
              <p className="text-gray-700">
                Actively contributing to the tech community through mentorship, conducting 
                <span className="font-semibold"> 50+ technical mock interviews</span>, and staying ahead of emerging technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            💡 My Technical Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I believe in writing <span className="font-semibold">clean, maintainable code</span> that stands the test of time. 
            Every project is an opportunity to implement best practices in scalability, security, and performance — 
            because quality code is the foundation of exceptional products.
          </p>
        </div>

        <br />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b-2 border-blue-600 inline-block pb-2">
          🎓 Education & Training
        </h2>
        
        <div className="mt-4 space-y-3">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-blue-700">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-gray-600">Vellore Institute of Technology</p>
            <p className="text-sm text-gray-500">Expected Graduation: 2027</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-blue-700">
              Full Stack Web Development - MERN Stack
            </h3>
            <p className="text-gray-600">
              Masai School, Bengaluru | HSR Layout, Karnataka 560102
            </p>
            <p className="text-sm text-gray-500">Completed: 2024</p>
            <p className="text-sm text-gray-600 mt-2">
              1200+ hours of intensive coding | 450+ hours DSA mastery | 100+ hours soft skills
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-blue-700">
              Bachelor of Science (Mathematics)
            </h3>
            <p className="text-gray-600">Dr. Bhim Rao Ambedkar University, Agra</p>
            <p className="text-sm text-gray-500">Completed: December 2022</p>
          </div>
        </div>

        <br />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b-2 border-blue-600 inline-block pb-2">
          💻 Technical Skills & Expertise
        </h2>
        
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-blue-700 mb-2">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React.js</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Redux</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">JavaScript (ES6+)</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">HTML5</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">CSS3</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Bootstrap</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Chakra UI</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-green-700 mb-2">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Express.js</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">RESTful APIs</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Authentication (JWT)</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">API Integration</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-purple-700 mb-2">Database & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">MongoDB</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">MySQL</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Git & GitHub</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">AWS</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Postman</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Agile/Scrum</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-orange-700 mb-2">Advanced Capabilities</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">OpenAI API Integration</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Performance Optimization</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Responsive Design</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Code Review</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Team Leadership</span>
            </div>
          </div>
        </div>

        <br />
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b-2 border-blue-600 inline-block pb-2">
          🎯 Professional Journey
        </h2>
        
        <div className="mt-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <p className="text-gray-700 leading-relaxed text-lg">
            With <span className="font-bold text-blue-700">2+ years of professional experience</span>, I'm proficient in both 
            front-end and back-end technologies. My journey includes <span className="font-semibold">over 1200 hours of intensive coding practice</span> and 
            <span className="font-semibold"> 450+ hours</span> dedicated to mastering Data Structures and Algorithms. 
            I specialize in crafting efficient, scalable solutions while maintaining a strong focus on clean code principles.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 text-lg">
            Beyond technical expertise, I've invested <span className="font-semibold">100+ hours in soft skill development</span> to ensure 
            effective communication and collaboration. Currently pursuing my <span className="font-semibold text-blue-700">Master's in Computer Applications 
            at VIT</span>, I continue to stay ahead of emerging technologies while delivering production-ready applications.
          </p>
        </div>

        <div className="mt-8 p-6 bg-blue-600 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-3">📊 Career Highlights</h3>
          <ul className="space-y-2 text-lg">
            <li>✅ Led 10+ member development teams in agile environments</li>
            <li>✅ Architected AI-powered platforms serving thousands of users</li>
            <li>✅ Improved application performance by 40% through optimization</li>
            <li>✅ Mentored 100+ aspiring developers and conducted 50+ mock interviews</li>
            <li>✅ Delivered enterprise-grade solutions at Qurocity and WILYER</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
