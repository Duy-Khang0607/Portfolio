import React from "react";
import { useScrollVisibility } from "../customHooks/useScrollSpy";

const Project = ({ isDarkMode }) => {
  const isVisible = useScrollVisibility('projects', { threshold: 0.1 });

  return (
    <section id="projects">
      <div className={`flex items-center gap-2 scroll-fade ${isVisible ? 'scroll-fade-visible' : ''}`}>
        <span className="section-title-dot w-2 h-2 bg-green-400 rounded-full transition-all duration-300 animate-pulse"></span>
        <span
          className={`section-title-text font-medium ${isDarkMode ? "text-gray-400" : "text-black"
            } z-50`}
        >
          Projects
        </span>
      </div>
      <section className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Samar */}
        <div className={`relative rounded-xl border border-gray-700 shadow-lg overflow-hidden max-w-lg w-full h-full max-h-[600px] flex flex-col backdrop-blur bg-gray-900/80 scroll-fade-up scroll-fade-delay-1 ${isVisible ? 'scroll-fade-visible' : ''}`}>
          <div className="absolute -inset-0.5 rounded-xl blur opacity-20 z-0 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div
              className="p-3 rounded-t-xl border-b border-gray-700/50 flex items-center justify-between bg-purple-900/40"
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pink-400"></span>
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="w-3 h-3 rounded-full bg-pink-600"></span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full font-semibold bg-purple-600 text-purple-200">
                COMPLETED
              </span>
            </div>
            <div className="p-4 flex flex-col flex-grow h-full">
              <div className="flex items-center gap-2 text-xl font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>Samar</span>
              </div>
              <div
                className={`text-sm mt-2 flex items-center ${isDarkMode ? "text-gray-300" : "text-purple-300"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M4 17V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14l-8-4z"></path>
                </svg>
                <span className={`truncate ${isDarkMode ? "text-gray-300" : "text-white"}`}>
                  https://bc37-samar-dk.vercel.app/
                </span>
              </div>
              <p
                className={`mt-2 text-sm flex-grow h-32 overflow-y-auto custom-scrollbar ${isDarkMode ? "text-gray-200" : "text-white"
                  }`}
              >
                <ul className="list-disc list-inside space-y-2 ">
                  <li>A static website is developed using core web technologies such as HTML, CSS, and JavaScript, where the content remains fixed and does not dynamically change based on user interactions or time.</li>
                  <li>All text, images, and layout elements are delivered directly from the server without requiring database connectivity or backend processing.</li>
                </ul>
              </p>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300/50"} h-full`}>
              <h4 className="text-sm text-gray-100 font-medium">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mt-2 max-h-20 overflow-y-auto">
                <span className={`text-xs px-2 py-1 rounded-full border font-bold text-purple-300 ${isDarkMode ? "text-purple-300 border-purple-300" : "text-purple-300 border-purple-300"}`}>
                  HTML/CSS
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold text-purple-300 ${isDarkMode ? "text-purple-300 border-purple-300" : "text-purple-300 border-purple-300"}`}>
                  JavaScript
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold text-purple-300 ${isDarkMode ? "text-purple-300 border-purple-300" : "text-purple-300 border-purple-300"}`}>
                  jQuery
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold text-purple-300 ${isDarkMode ? "text-purple-300 border-purple-300" : "text-purple-300 border-purple-300"}`}>
                  Swiper Css
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold text-purple-300 ${isDarkMode ? "text-purple-300 border-purple-300" : "text-purple-300 border-purple-300"}`}>
                  Lightgallery-Popup
                </span>
              </div>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300/50"} flex justify-center`}>
              <a
                href="https://bc37-samar-dk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold bg-purple-700 hover:bg-purple-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                Details
              </a>
            </div>
          </div>
        </div>
        {/* Movies */}
        <div className={`relative rounded-xl border border-gray-700 shadow-lg overflow-hidden max-w-lg w-full h-full max-h-[600px] flex flex-col backdrop-blur bg-gray-900/80 scroll-fade-up scroll-fade-delay-2 ${isVisible ? 'scroll-fade-visible' : ''}`}>
          <div className="absolute -inset-0.5 rounded-xl blur opacity-20 z-0 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="p-3 rounded-t-xl border-b border-gray-700/50 flex items-center justify-between bg-green-900/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full font-semibold bg-green-600 text-green-200">
                COMPLETED
              </span>
            </div>
            <div className="p-4 flex flex-col flex-grow h-full">
              <div className="flex items-center gap-2 text-xl font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>Movie</span>
              </div>
              <div
                className={`text-sm mt-2 flex items-center ${isDarkMode ? "text-gray-300" : "text-green-300"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M4 17V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14l-8-4z"></path>
                </svg>
                <span className={`truncate ${isDarkMode ? "text-gray-300" : "text-white"}`}>
                  https://www.youtube.com/watch?v=OJPmgNMh6mw
                </span>
              </div>
              <p
                className={`mt-2 text-sm flex-grow h-32 overflow-y-auto custom-scrollbar ${isDarkMode ? "text-gray-200" : "text-white"
                  }`}
              >
                <ul className="list-disc list-inside space-y-2 ">
                  <li>Designed and implemented a responsive web interface with core application functionalities, including full CRUD operations and user-centric features such as authentication, booking workflows, location browsing, and advanced room search.</li>
                  <li>Emphasized clean architecture, maintainable code structure, and seamless user experience.</li>
                </ul>
              </p>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-green-300/50"} h-full`}>
              <h4
                className={`text-sm font-medium ${isDarkMode ? "text-gray-100" : "text-white"
                  }`}
              >
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2 max-h-20 overflow-y-auto">
                <span className={`text-xs px-2 py-1 rounded-full border border-gray-600 font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  React
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border border-gray-600 font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  JavaScript
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border border-gray-600 font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Tailwind CSS
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border border-gray-600 font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Ant Design
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border border-gray-600 font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Redux thunk
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border border-gray-600 font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  React Router
                </span>
              </div>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300/50"} flex justify-center`}>
              <a
                href="https://www.youtube.com/watch?v=OJPmgNMh6mw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold bg-green-700 hover:bg-green-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                Details
              </a>
            </div>
          </div>
        </div>
        {/* Air Bnb */}
        <div className={`relative rounded-xl border border-gray-700 shadow-lg overflow-hidden max-w-lg w-full h-full max-h-[600px] flex flex-col backdrop-blur bg-gray-900/80 mx-auto scroll-fade-scale scroll-fade-delay-3 ${isVisible ? 'scroll-fade-visible' : ''}`}>
          <div className="absolute -inset-0.5 rounded-xl blur opacity-20 z-0 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="p-3 rounded-t-xl border-b border-gray-700/50 flex items-center justify-between bg-blue-900/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full font-semibold bg-blue-600 text-blue-200">
                COMPLETED
              </span>
            </div>
            <div className="p-4 flex flex-col flex-grow h-full">
              <div className="flex items-center gap-2 text-xl font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>Air BnB</span>
              </div>
              <div
                className={`text-sm mt-2 flex items-center ${isDarkMode ? "text-gray-300" : "text-blue-300"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M4 17V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14l-8-4z"></path>
                </svg>
                <span className={`truncate ${isDarkMode ? "text-gray-300" : "text-white"}`}>
                  https://www.youtube.com/watch?v=k4mKjLHLW_8
                </span>
              </div>
              <p
                className={`mt-2 text-sm flex-grow h-32 overflow-y-auto custom-scrollbar ${isDarkMode ? "text-gray-200" : "text-white"
                  }`}
              >
                <ul className="list-disc list-inside space-y-2 ">
                  <li>Implemented CRUD functionality for core features.</li>
                  <li>Developed user experience interface.</li>
                  <li>Main features such as: Register, login, booking, view location, search room.</li>
                  <li>Building more interfaces and functions of admin management including: user administration, room administration, room administration and posting content.</li>
                </ul>
              </p>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300/50"} h-full`}>
              <h4
                className={`text-sm font-medium ${isDarkMode ? "text-gray-100" : "text-white"
                  }`}
              >
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2 max-h-20 overflow-y-auto">
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-blue-300 border-blue-700" : "text-blue-300 border-blue-700"}`}>
                  React
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-blue-300 border-blue-700" : "text-blue-300 border-blue-700"}`}>
                  TypeScript
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-blue-300 border-blue-700" : "text-blue-300 border-blue-700"}`}>
                  Bootstrap
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-blue-300 border-blue-700" : "text-blue-300 border-blue-700"}`}>
                  Material UI
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-blue-300 border-blue-700" : "text-blue-300 border-blue-700"}`}>
                  Redux toolkit
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-blue-300 border-blue-700" : "text-blue-300 border-blue-700"}`}>
                  React Router
                </span>
              </div>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300/50"} flex justify-center`}>
              <a
                href="https://www.youtube.com/watch?v=k4mKjLHLW_8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold bg-blue-700 hover:bg-blue-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                Details
              </a>
            </div>
          </div>
        </div>
        {/* Delivery App */}
        <div className={`relative rounded-xl border border-gray-700 shadow-lg overflow-hidden max-w-lg w-full h-full max-h-[600px] flex flex-col backdrop-blur bg-gray-900/80 mx-auto scroll-fade-scale scroll-fade-delay-3 ${isVisible ? 'scroll-fade-visible' : ''}`}>
          <div className="absolute -inset-0.5 rounded-xl blur opacity-20 z-0 bg-gradient-to-r from-green-400 to-green-400"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="p-3 rounded-t-xl border-b border-gray-700/50 flex items-center justify-between bg-green-900/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-600"></span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full font-semibold bg-green-600 text-blue-200">
                COMPLETED
              </span>
            </div>
            <div className="p-4 flex flex-col flex-grow h-full">
              <div className="flex items-center gap-2 text-xl font-bold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>Delivery App</span>
              </div>
              <div
                className={`text-sm mt-2 flex items-center ${isDarkMode ? "text-gray-300" : "text-green-300"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M4 17V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14l-8-4z"></path>
                </svg>
                <span className={`truncate ${isDarkMode ? "text-gray-300" : "text-white"}`}>
                  https://delivery-cart.vercel.app/
                </span>
              </div>
              <p
                className={`mt-2 text-sm flex-grow h-32 overflow-y-auto custom-scrollbar ${isDarkMode ? "text-gray-200" : "text-white"
                  }`}
              >
                <ul className="list-disc list-inside space-y-2 ">
                  <li>Built RESTful APIs and role-based authentication (Admin/User/Driver) with NextAuth v5</li>
                  <li>Developed real-time features using Socket.IO: order broadcasting, live driver tracking on map, and in-app chat.</li>
                  <li>Integrated Stripe Checkout + Webhook for secure online payments.</li>
                  <li>Implemented auto-assignment system using MongoDB Geospatial Queries to match orders with nearest available drivers.</li>
                  <li>Built OTP-based delivery verification via email and integrated Gemini Al for smart chat suggestions.</li>
                  <li>Designed responsive UI with Tailwind CSS and Framer Motion, deployed on Vercel with CI/CD via GitHub.</li>
                </ul>
              </p>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300/50"} h-full`}>
              <h4
                className={`text-sm font-medium ${isDarkMode ? "text-gray-100" : "text-white"
                  }`}
              >
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2 max-h-20 overflow-y-auto custom-scrollbar">
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Next.js 16 / React 19
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  TypeScript
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  MongoDB/Mongoose
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Socket.IO
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Stripe
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  NextAuth v5
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Redux Toolkit
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Tailwind CSS v4
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Gemini Al
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Cloudinary
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border font-bold ${isDarkMode ? "text-green-300 border-green-700" : "text-green-300 border-green-700"}`}>
                  Nodemailer
                </span>
              </div>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300/50"} flex justify-center`}>
              <a
                href="https://delivery-cart.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold bg-green-700 hover:bg-green-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Project;
