import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.webp";
import { formatTime } from "../utils/formatTime";
import ProjectCard from "./ProjectCard";
import { projects } from "../JSON/project";
import { iconTech } from "../JSON/iconTech.jsx";
const Home = ({ isDarkMode, toggleDarkMode, openContactModal }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleMenuOpen = () => {
    if (openContactModal) {
      openContactModal();
    }
  };

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const repeatedIcons = [...iconTech, ...iconTech, ...iconTech];

  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr,400px,1.5fr] gap-4 md:gap-6"
    >
      <div className="max-h-[800px] transition-all duration-700 ease-in-out opacity-100 translate-y-0">
        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <div className="relative w-24 h-24 md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
              <img
                alt="Profile"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 200px"
                src={avatar}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-light mb-2 tracking-tight text-green-500">
                Hello!
                <br />
                I'm Khang Nguyen
              </h1>
              <p
                className={`body-text font-medium text-justify-enhanced text-sm w-full ${
                  isDarkMode ? "text-gray-500" : "text-black"
                }`}
              >
                <span className="text-primary font-medium text-green-500">
                  Frontend Developer
                </span>{" "}
                specializing in building performant, secure, and scalable web
                applications. Experienced in developing responsive interfaces,
                optimizing user experience, and integrating robust frontend
                architectures that support high-traffic environments.
              </p>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <a
                className={`text-gray-400 ${
                  isDarkMode
                    ? "hover:text-white bg-white/20 hover:bg-white/30"
                    : "hover:text-black bg-gray-800/50 hover:bg-gray-800/70 text-white"
                } transition-colors p-1 md:p-2 rounded-xl`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/khang-nguyen-680971199/"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a
                className={`text-gray-400 ${
                  isDarkMode
                    ? "hover:text-white bg-white/20 hover:bg-white/30"
                    : "hover:text-black bg-gray-800/50 hover:bg-gray-800/70 text-white"
                } transition-colors p-1 md:p-2 rounded-xl`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                href="https://github.com/Duy-Khang0607"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
              <button
                className="px-4 py-2 md:px-6 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors bg-green-500 cursor-pointer"
                onClick={() => handleMenuOpen()}
              >
                LET'S TALK
              </button>
            </div>
            <div className="h-6 md:h-8"></div>
            <div className="w-full h-[1px] bg-gray-800/50"></div>
            <div className="space-y-4">
              <div>
                <p
                  className={`text-sm mb-1 ${
                    isDarkMode ? "text-gray-500" : "text-black"
                  }`}
                >
                  Current Time
                </p>
                <p
                  className={`text-3xl font-mono ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {formatTime(currentTime)}
                </p>
                <button
                  className={`text-sm transition-colors flex items-center gap-1 mt-1 disabled:opacity-50 ${
                    isDarkMode
                      ? "text-gray-500 hover:text-gray-300"
                      : "text-black"
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-green-500 "></span>
                  Show My Location
                </button>
              </div>
              <div>
                <p
                  className={`text-sm mb-2 ${
                    isDarkMode ? "text-gray-500" : "text-black"
                  }`}
                >
                  When I don't have anything to do, I just create random thing
                  like below:
                </p>
                <div className="flex gap-3">
                  <span className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gray-800/70 transition-colors cursor-pointer">
                    🎮
                  </span>
                  <span className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gray-800/70 transition-colors cursor-pointer">
                    🎨
                  </span>
                  <span className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gray-800/70 transition-colors cursor-pointer">
                    📚
                  </span>
                  <span className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gray-800/70 transition-colors cursor-pointer">
                    🎵
                  </span>
                  <span className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gray-800/70 transition-colors cursor-pointer">
                    ⚡
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-h-[800px] transition-all duration-700 ease-in-out opacity-100 translate-y-0">
        <div className="space-y-6 md:space-y-8 rounded-lg">
          <section>
            <h2 className="section-title">
              <div className="flex items-center gap-2">
                <span className="section-title-dot w-2 h-2 bg-green-500 rounded-full transition-all duration-300 animate-pulse"></span>
                <span
                  className={`section-title-text font-bold ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Overview
                </span>
              </div>
            </h2>
            <div className="space-y-3 md:space-y-4 w-full">
              <p
                className={`body-text font-medium text-justify-enhanced text-sm ${
                  isDarkMode ? "text-gray-400" : "text-black"
                }`}
              >
                I am a passionate Frontend Developer with a strong foundation in
                HTML5, CSS3, JavaScript, and React.js. With experience in both
                UI/UX design and website optimization, I am dedicated to
                creating seamless, high-performance user interfaces that enhance
                the overall user experience.
              </p>
              <p
                className={`body-text font-medium text-justify-enhanced text-sm ${
                  isDarkMode ? "text-gray-400" : "text-black"
                }`}
              >
                I have worked on various projects, including CRM systems and web
                applications, where I utilized my skills in React.js,
                TypeScript, and modern frameworks to build responsive and
                user-friendly designs. I am constantly learning new tools and
                technologies, with a focus on performance optimization,
                scalability, and cross-browser compatibility. My goal is to
                contribute to dynamic projects and deliver impactful web
                solutions.
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-[9px] md:text-[10px] tracking-wider cursor-pointer transition-all duration-400 ${
                    isDarkMode
                      ? "text-gray-400 bg-white/20 hover:bg-white/30 hover:text-white"
                      : "text-black hover:text-white bg-gray-800/50 hover:bg-gray-800/70"
                  }`}
                >
                  Frontend Development
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[9px] md:text-[10px] tracking-wider cursor-pointer transition-all duration-400 ${
                    isDarkMode
                      ? "text-gray-400 bg-white/20 hover:bg-white/30 hover:text-white"
                      : "text-black hover:text-white bg-gray-800/50 hover:bg-gray-800/70"
                  }`}
                >
                  Web Security
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[9px] md:text-[10px] tracking-wider cursor-pointer transition-all duration-400 ${
                    isDarkMode
                      ? "text-gray-400 bg-white/20 hover:bg-white/30 hover:text-white"
                      : "text-black hover:text-white bg-gray-800/50 hover:bg-gray-800/70"
                  }`}
                >
                  UI/UX Design
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[9px] md:text-[10px] tracking-wider cursor-pointer transition-all duration-400 ${
                    isDarkMode
                      ? "text-gray-400 bg-white/20 hover:bg-white/30 hover:text-white"
                      : "text-black hover:text-white bg-gray-800/50 hover:bg-gray-800/70"
                  }`}
                >
                  API Integration
                </span>
              </div>
            </div>
          </section>
          <div className="w-full h-[1px] bg-gray-800/50"></div>
          <section>
            <h2 className="section-title">
              <div className="flex items-center gap-2">
                <span className="section-title-dot w-2 h-2 bg-green-500 rounded-full transition-all duration-300 animate-pulse"></span>
                <span
                  className={`section-title-text font-bold ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Tech Stack
                </span>
              </div>
            </h2>
            <div className="flex justify-center w-full py-4">
              <div className="tech-stack-wrapper w-full">
                <div className="relative space-y-6">
                  {/* Row top */}
                  <div className="relative flex">
                    <div className="scroll-container-left flex flex-row gap-6 will-change-transform">
                      {repeatedIcons?.map((icon, index) => (
                        <div
                          key={`top-${index}`}
                          className={`flex-none w-10 h-10 relative group rounded-xl opacity-50 transition-all duration-300 ${
                            isDarkMode
                              ? "bg-white/20 hover:bg-white/30"
                              : "bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer"
                          }`}
                        >
                          <div className="tech-icon absolute inset-0 rounded-xl transition-all duration-300"></div>
                          <div className="relative h-full w-full p-2">
                            <div className="tech-icon-text transition-colors duration-300">
                              {icon?.icon}
                            </div>
                          </div>
                          <div
                            className={`${
                              isDarkMode ? "text-white" : "text-black"
                            } opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs tech-icon-text whitespace-nowrap transition-opacity duration-300`}
                          >
                            {icon.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Row bottom */}
                  <div className="relative flex">
                    <div className="scroll-container-right flex flex-row gap-6 will-change-transform">
                      {repeatedIcons?.map((icon, index) => (
                        <div
                          key={`bottom-${index}`}
                          className={`flex-none w-10 h-10 relative group rounded-xl opacity-50 transition-all duration-300 ${
                            isDarkMode
                              ? "bg-white/20 hover:bg-white/30"
                              : "bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer"
                          }`}
                        >
                          <div className="tech-icon absolute inset-0 rounded-xl transition-all duration-300"></div>
                          <div className="relative h-full w-full p-2">
                            <div className="tech-icon-text transition-colors duration-300">
                              {icon?.icon}
                            </div>
                          </div>
                          <div
                            className={`${
                              isDarkMode ? "text-white" : "text-black"
                            } opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs tech-icon-text whitespace-nowrap transition-opacity duration-300`}
                          >
                            {icon.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full h-[1px] bg-gray-800/50"></div>
          <div className="mt-8 md:mt-12">
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-green-500">
              Code That Connects People <br /> and Secures Possibilities.
            </h2>
          </div>
        </div>
      </div>
      <div className="max-h-[850px] transition-all duration-700 ease-in-out opacity-100 translate-y-0">
        <div className="space-y-6 md:space-y-8 rounded-lg">
          {/* section project */}
          <div className="flex justify-center w-full py-4">
            <div className="tech-stack-wrapper w-full">
              <div className="relative space-y-6">
                {/* Row top - Scroll Left */}
                <div className="relative flex overflow-hidden">
                  <div className="scroll-container-left-img">
                    {/* Render 3 copies for seamless infinite scroll */}
                    {[...projects, ...projects, ...projects].map(
                      (project, index) => (
                        <ProjectCard key={`left-${index}`} project={project} />
                      )
                    )}
                  </div>
                </div>
                {/* Row bottom - Scroll Right */}
                <div className="relative flex overflow-hidden">
                  <div className="scroll-container-right-img">
                    {/* Render 3 copies for seamless infinite scroll */}
                    {[...projects, ...projects, ...projects].map(
                      (project, index) => (
                        <ProjectCard key={`right-${index}`} project={project} />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Open to work */}
          <div className="mt-6 md:mt-8 p-3 md:p-4 rounded-xl flex items-center gap-2 md:gap-3 border-[#374151] border-[1px]">
            <div className="flex items-center gap-2">
              <span className="section-title-dot w-2 h-2 bg-green-500 rounded-full transition-all duration-300 animate-pulse"></span>
              <p
                className={`text-xs tracking-wide ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Open for work:{" "}
              </p>
              <span className="text-green-500 font-medium">
                Full time / Remote
              </span>
            </div>
          </div>
          {/* Quote */}
          <div className="relative mt-16 md:mt-20">
            <div className="relative w-full mx-auto">
              <canvas
                className="w-full h-auto opacity-50"
                width="430"
                height="430"
              ></canvas>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[250px] md:max-w-[300px] text-center z-10">
              <p
                className={`text-xs leading-relaxed italic backdrop-blur-sm bg-background/50 p-3 md:p-4 rounded-xl ${
                  isDarkMode ? "text-gray-400" : "text-black"
                }`}
              >
                "A website is a crucial component of any digital presence,
                providing an engaging, responsive platform to showcase products
                and services, enhancing visibility and credibility in a global
                market."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
