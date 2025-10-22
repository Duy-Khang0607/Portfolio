import React from "react";
import { useScrollVisibility } from "../customHooks/useScrollSpy";

const Project = ({ isDarkMode }) => {
  const isVisible = useScrollVisibility('projects', { threshold: 0.1 });

  return (
    <section id="projects">
      <div className={`flex items-center gap-2 scroll-fade ${isVisible ? 'scroll-fade-visible' : ''}`}>
        <span className="section-title-dot w-2 h-2 bg-green-400 rounded-full transition-all duration-300 animate-pulse"></span>
        <span
          className={`section-title-text font-medium ${
            isDarkMode ? "text-gray-400" : "text-black"
          } z-50`}
        >
          Projects
        </span>
      </div>
      <section className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-4 gap-10">
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
                className={`text-sm mt-2 flex items-center ${
                  isDarkMode ? "text-gray-300" : "text-purple-300"
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
                className={`mt-2 text-sm flex-grow max-h-32 text-justify-enhanced ${
                  isDarkMode ? "text-gray-200" : "text-white"
                }`}
              >
                A static website is built using core web technologies such as
                HTML, CSS, and JavaScript, where the content is fixed and does
                not change dynamically based on user interactions or time. All
                text, images, and layout elements are loaded directly from the
                server without requiring a database or backend processing.
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
                className={`text-sm mt-2 flex items-center ${
                  isDarkMode ? "text-gray-300" : "text-green-300"
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
                className={`mt-2 text-sm flex-grow max-h-32 text-justify-enhanced ${
                  isDarkMode ? "text-gray-200" : "text-white"
                }`}
              >
                This project focuses on building a static web interface with
                essential functionalities and an intuitive user experience. It
                includes the implementation of basic CRUD (Create, Read, Update,
                Delete) operations for managing items and core user features
                such as registration, login, booking, viewing locations, and
                room search.
              </p>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-green-300/50"} h-full`}>
              <h4
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-100" : "text-white"
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
        <div className={`relative rounded-xl border border-gray-700 shadow-lg overflow-hidden max-w-lg w-full h-full max-h-[600px] flex flex-col backdrop-blur bg-gray-900/80 col-span-full mx-auto scroll-fade-scale scroll-fade-delay-3 ${isVisible ? 'scroll-fade-visible' : ''}`}>
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
                className={`text-sm mt-2 flex items-center ${
                  isDarkMode ? "text-gray-300" : "text-blue-300"
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
                className={`mt-2 text-sm flex-grow max-h-32 text-justify-enhanced ${
                  isDarkMode ? "text-gray-200" : "text-white"
                }`}
              >
                The project involves developing a web application with essential
                features and a user-friendly interface. It includes implementing
                basic CRUD (Create, Read, Update, Delete) functionalities and
                key user features such as registration, login, room booking,
                location viewing, and room searching.
              </p>
            </div>
            <div className={`p-4 border-t ${isDarkMode ? "border-gray-700/50" : "border-gray-300/50"} h-full`}>
              <h4
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-100" : "text-white"
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
      </section>
    </section>
  );
};

export default Project;
