import React, { useState } from "react";
import { useScrollVisibility } from "../customHooks/useScrollSpy";

const Experience = ({ isDarkMode }) => {
  const [isDetails1, setDetails1] = useState(false);
  const [isDetails2, setDetails2] = useState(false);
  const isVisible = useScrollVisibility('experience', { threshold: 0.15 });

  const handleDetails1 = () => {
    setDetails1(!isDetails1);
  };
  const handleDetails2 = () => {
    setDetails2(!isDetails2);
  };

  return (
    <section id="experience">
      <div className={`flex items-center gap-2 scroll-fade ${isVisible ? 'scroll-fade-visible' : ''}`}>
        <span className="section-title-dot w-2 h-2 bg-green-400 rounded-full transition-all duration-300 animate-pulse"></span>
        <span
          className={`z-50 section-title-text font-medium ${isDarkMode ? "text-gray-400" : "text-black"
            }`}
        >
          Experience
        </span>
      </div>
      <section className="relative font-mono text-sm max-w-7xl mx-auto py-12 px-4">
        <div className="relative w-full">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#6272a4] -translate-x-1/2"></div>
          <div className="space-y-16">
            {/* IDB */}
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full">
              <div
                className={`md:block w-full md:w-[80%] lg:w-[80%] md:mr-4 p-6 border rounded bg-[#282a36] transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg border-glow-green scroll-fade-up scroll-fade-delay-1 ${isVisible ? 'scroll-fade-visible' : ''} ${isDetails1 ? 'max-h-auto' : 'max-h-[200px]'}`}
                style={{ borderColor: "rgb(80, 250, 123)" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <p className="font-bold text-[#bd93f9] text-sm lg:text-lg">
                      Frontend Developer
                    </p>
                  </div>
                  <div className="text-xs text-sky-400 font-mono text-right w-full">
                    <p className="font-bold w-full">June - 2024</p>
                    <p className="font-bold w-full text-right">Present</p>
                  </div>
                </div>
                <div className="text-green-400 text-sm mb-2">
                  IDB - Công Ty Cổ Phần Phân Phối Quốc Tế
                </div>
                <div className={`mt-4 border-t pt-4 border-[#6272a4] overflow-hidden transition-all duration-500 ease-in-out ${isDetails1
                  ? 'max-h-auto opacity-100 translate-y-0'
                  : 'max-h-0 opacity-0 -translate-y-4 border-t-0 mt-0 pt-0'
                  }`}>
                  <div className={`${isDetails1 ? 'animate-slideDown' : ''}`}>
                    <p className="text-[#f8f8f2] mb-4 text-justify-enhanced">
                      Developed and optimized 10+ responsive web pages, improving page load speed by ~35% and boosting lead conversion rate.
                      Applied UI/UX best practices to reduce bounce rate by ~15%, creating fast and intuitive user interfaces.
                      Ensured cross-browser compatibility across 4 major browsers (Chrome, Firefox, Safari, Edge) and 3+ device types.
                      Built 2 customer management applications using Joget low-code platform, reducing development time by ~40%.
                    </p>
                    <div className="mb-4">
                      <p className="font-bold text-lg text-[#bd93f9] mb-2">
                        Projects
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-[#f8f8f2]">
                        <li>
                          CRM Interface Development – Lien Viet Banking System
                        </li>
                        <li>
                          CRM Interface Development – Bac A Banking System
                        </li>
                      </ul>
                    </div>
                    <p className="font-bold text-lg text-[#bd93f9] mb-2">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        HTML/CSS
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Jquery
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Bootstrap
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Docker
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        PM2
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        MYSQL
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Joget(Lowcode)
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Linux
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleDetails1}
                  className="w-full text-left text-sm text-[#f1fa8c] font-bold mt-2 hover:underline"
                >
                  {isDetails1 ? "Hide Details" : "Show Details"} &gt;
                </button>
              </div>
            </div>
            {/* INTER-K JSC */}
            <div className="relative flex flex-col md:flex-row items-center justify-center w-full">
              <div className="flex flex-col items-center z-20 md:mx-4">
                <span
                  className="w-4 h-4 rounded-full border-2 border-white z-10"
                  style={{ backgroundColor: "rgb(139, 233, 253)" }}
                ></span>
                <span className="w-1 bg-[#6272a4] flex-1 mt-2"></span>
              </div>
              <div
                className={`md:block w-full md:w-[80%] lg:w-[80%] md:ml-4 p-6 border rounded bg-[#282a36] transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg border-glow-blue scroll-fade-up scroll-fade-delay-2 ${isVisible ? 'scroll-fade-visible' : ''} ${isDetails2 ? 'max-h-auto' : 'max-h-[200px]'}`}
                style={{ borderColor: "rgb(139, 233, 253)" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <p className="font-bold text-[#bd93f9] text-sm lg:text-lg">
                      Frontend Developer
                    </p>
                  </div>
                  <div className="text-xs text-sky-400 font-mono text-right w-full">
                    <p className="font-bold w-full">May - 2023
                    </p>
                    <p className="font-bold w-full">Sep - 2023</p>
                  </div>
                </div>
                <div className="text-green-400 text-sm mb-2">INTER-K JSC</div>
                <div className={`mt-4 border-t pt-4 border-[#6272a4] overflow-hidden transition-all duration-500 ease-in-out ${isDetails2
                  ? 'max-h-auto opacity-100 translate-y-0'
                  : 'max-h-0 opacity-0 -translate-y-4 border-t-0 mt-0 pt-0'
                  }`}>
                  <div className={`${isDetails2 ? 'animate-slideDown' : ''}`}>
                    <p className="text-[#f8f8f2] mb-4 text-justify-enhanced">
                      Developed 2+ frontend modules for Inter-K software applications, improving user experience and interface consistency.
                      Collaborated with a team of 4 developers on debugging and issue resolution, reducing bug count by ~25% per release.
                      Assisted in building 2 web applications.
                    </p>
                    <div className="mb-4">
                      <p className="font-bold text-lg text-[#bd93f9] mb-2">
                        Projects
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-[#f8f8f2]">
                        <li>Web Application Coca - Cola</li>
                        <li>Web Application Farm Management</li>
                      </ul>
                    </div>
                    <p className="font-bold text-lg text-[#bd93f9] mb-2">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        PHP
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        HTML/CSS
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        JavaScript/TypeScript
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Bootstrap
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Docker
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Reactjs
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Redux
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        Ant Design
                      </span>
                      <span className="px-3 py-1 bg-[#44475a] text-[#8be9fd] rounded-full text-xs">
                        React Router
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleDetails2}
                  className="w-full text-left text-sm text-[#f1fa8c] font-bold mt-2 hover:underline"
                >
                  {isDetails2 ? "Hide Details" : "Show Details"} &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
