import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPhone, FaEnvelope } from "react-icons/fa";


function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const [isSubmitting, setIsSubmitting] = useState(false);


  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    
    setIsSubmitting(true);
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent successfully! 🎉");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div name="Contact" className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <p className="text-gray-600 text-sm sm:text-base">Let's work together</p>
            <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
          </div>
        </div>


        {/* Contact Options - Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Phone Card - OPENS PHONE DIALER */}
          <a
            href="tel:+919389958702"
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden p-4 sm:p-6 cursor-pointer"
          >
            <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-600 absolute top-0 left-0 right-0"></div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaPhone className="text-xl sm:text-2xl" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Call Me
                </p>
                <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent break-all">
                  +91 9389958702
                </p>
                <p className="text-xs text-gray-500 mt-1">Click to dial</p>
              </div>
            </div>


            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </a>


          {/* Email Card - OPENS EMAIL CLIENT */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=kushawahyogesh93@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden p-4 sm:p-6 cursor-pointer"
          >
            <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-600 absolute top-0 left-0 right-0"></div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaEnvelope className="text-xl sm:text-2xl" />
              </div>
              
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Email Me
                </p>
                <p className="text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent break-all line-clamp-2">
                  kushawahyogesh93@gmail.com
                </p>
                <p className="text-xs text-gray-500 mt-1">Click to compose</p>
              </div>
            </div>


            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </a>
        </div>


        {/* Contact Form */}
        <div className="max-w-2xl mx-auto px-2 sm:px-0">
          <div className="bg-white shadow-2xl rounded-2xl p-5 sm:p-8">
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Send a Message</h2>
              <p className="text-gray-600 text-xs sm:text-sm">Fill the form below or use quick contact options above</p>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name", { 
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                  })}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-200 ease-in-out`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.name.message}
                  </span>
                )}
              </div>


              {/* Email Field */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-200 ease-in-out`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>


              {/* Message Field */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" }
                  })}
                  rows="5"
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors duration-200 ease-in-out resize-none`}
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>


              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 sm:py-4 px-6 rounded-lg text-sm sm:text-base
                           transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                           ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;
