import React, { useState, useEffect } from "react";
import { scrollToSection } from "../utils/scrollSection";
import { useScrollSpy } from "../customHooks/useScrollSpy";

const Header = ({ isDarkMode, toggleDarkMode, openContactModal }) => {
  const [isActive, setIsActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = ["home", "about", "projects", "experience", "contact"];

  const activeSection = useScrollSpy(sectionIds, 150);

  const handleMenuOpen = () => {
    if (openContactModal) {
      openContactModal();
    }
  };
  useEffect(() => {
    setIsActive(activeSection);
  }, [activeSection]);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-4 z-50 px-2">
      <div
        className="flex items-center justify-between px-4 py-2 rounded-2xl border max-w-[95%] mx-auto
          bg-[#161b22] border-gray-800"
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1 mr-3">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <span
              className={`text-sm font-mono ${
                isDarkMode ? "text-gray-300" : "text-white"
              }`}
            >
              khangnguyen@portfolio:~$
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md border text-sm transition ${
                isActive === "home"
                  ? "bg-emerald-900/40 text-white border-emerald-800"
                  : "bg-transparent text-white border-gray-700 hover:bg-gray-800"
              } cursor-pointer`}
              onClick={() => {
                scrollToSection("home");
                setIsActive("home");
              }}
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
                className="lucide lucide-house"
                aria-hidden="true"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span>Home</span>
            </button>
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md border text-sm transition ${
                isActive === "about"
                  ? "bg-emerald-900/40 text-white border-emerald-800"
                  : "bg-transparent text-white border-gray-700 hover:bg-gray-800"
              } cursor-pointer`}
              onClick={() => {
                scrollToSection("about");
                setIsActive("about");
              }}
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
                className="lucide lucide-user"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>About</span>
            </button>
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md border text-sm transition ${
                isActive === "projects"
                  ? "bg-emerald-900/40 text-white border-emerald-800"
                  : "bg-transparent text-white border-gray-700 hover:bg-gray-800"
              } cursor-pointer`}
              onClick={() => {
                scrollToSection("projects");
                setIsActive("projects");
              }}
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
                aria-hidden="true"
              >
                <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
                <circle cx="13" cy="12" r="2"></circle>
                <path d="M18 19c-2.8 0-5-2.2-5-5v8"></path>
                <circle cx="20" cy="19" r="2"></circle>
              </svg>
              <span>Projects</span>
            </button>
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md border text-sm transition ${
                isActive === "experience"
                  ? "bg-emerald-900/40 text-white border-emerald-800"
                  : "bg-transparent text-white border-gray-700 hover:bg-gray-800"
              } cursor-pointer`}
              onClick={() => {
                scrollToSection("experience");
                setIsActive("experience");
              }}
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
                className="lucide lucide-briefcase"
                aria-hidden="true"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              <span>Experience</span>
            </button>
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md border text-sm transition ${
                isActive === "contact"
                  ? "bg-emerald-900/40 text-white border-emerald-800"
                  : "bg-transparent text-white border-gray-700 hover:bg-gray-800"
              } cursor-pointer`}
              onClick={() => {
                scrollToSection("contact");
                setIsActive("contact");
              }}
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
                className="lucide lucide-mail"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <span>Contact</span>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-3">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors
          text-white hover:bg-emerald-800/60 cursor-pointer"
              onClick={() => handleMenuOpen()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-search"
                aria-hidden="true"
              >
                <circle cx="10" cy="7" r="4"></circle>
                <path d="M10.3 15H7a4 4 0 0 0-4 4v2"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <path d="m21 21-1.9-1.9"></path>
              </svg>
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors
                text-white hover:bg-emerald-800/60 cursor-pointer"
              onClick={toggleDarkMode}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors
                text-white hover:bg-emerald-800/60 cursor-pointer z-999"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
                aria-hidden="true"
              >
                <path d="M4 12h16"></path>
                <path d="M4 18h16"></path>
                <path d="M4 6h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
