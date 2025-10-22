import React from "react";
import avatar from "../assets/avatar.webp";
import { useScrollVisibility } from "../customHooks/useScrollSpy";

const About = ({ isDarkMode }) => {
  // Hook để detect khi scroll vào/ra section about
  const isVisible = useScrollVisibility('about', { threshold: 0.15 });

  return (
    <section id="about">
      <div className={`flex items-center gap-2 scroll-fade ${isVisible ? 'scroll-fade-visible' : ''}`}>
        <span className="section-title-dot w-2 h-2 bg-green-400 rounded-full transition-all duration-300 animate-pulse"></span>
        <span
          className={`section-title-text font-medium ${
            isDarkMode ? "text-white" : "text-black"
          } z-10`}
        >
          About
        </span>
      </div>
      <section className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left */}
        <div className="space-y-6">
          <div className={`scroll-fade-up scroll-fade-delay-1 ${isVisible ? 'scroll-fade-visible' : ''}`}>
            <button className="px-3 py-1 text-xs font-mono rounded-md border border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
              WHOAMI
            </button>
          </div>
          <div className={`scroll-fade-up scroll-fade-delay-2 ${isVisible ? 'scroll-fade-visible' : ''}`}>
            <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-float">
              Nguyen Hoang Duy Khang
            </h1>
          </div>
          <div className={`scroll-fade-up scroll-fade-delay-3 ${isVisible ? 'scroll-fade-visible' : ''}`}>
            <div className="relative rounded-xl bg-gray-900/80 border border-gray-700 shadow-lg overflow-hidden max-w-lg backdrop-blur">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur opacity-20"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700 relative z-10">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-3 text-xs text-gray-400">about.jsx</span>
              </div>
              <div className="p-4 font-mono text-sm text-white relative z-10">
                <div className="font-mono text-sm space-y-1">
                  <span className="text-emerald-400 block">
                    const role = "Frontend Developer"
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`scroll-fade-up scroll-fade-delay-4 ${isVisible ? 'scroll-fade-visible' : ''}`}>
            <div
              className={`rounded-xl border border-gray-700 shadow-lg p-5 font-mono text-[14px] ${
                isDarkMode
                  ? "text-gray-200 bg-[#0d1117]/80"
                  : "text-black bg-[#0d1117]/50"
              }`}
            >
              Experienced Frontend Developer specializing in JavaScript, UI/UX
              Design, and Responsive Web Development. Crafting seamless and
              scalable web experiences with modern frameworks and tools.
            </div>
          </div>
          <div className={`scroll-fade-up scroll-fade-delay-5 ${isVisible ? 'scroll-fade-visible' : ''}`}>
            <h3
              className={`font-bold flex items-center gap-2 mb-3 ${
                isDarkMode ? "text-gray-400" : "text-black"
              }`}
            >
              <span className="text-emerald-400">⚙</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-[#0d1117]/80 border border-emerald-500/30 text-emerald-400 font-mono text-sm">
                ReactJS
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#0d1117]/80 border border-sky-500/30 text-sky-400 font-mono text-sm">
                JavaScript
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#0d1117]/80 border border-sky-500/30 text-sky-400 font-mono text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#0d1117]/80 border border-blue-500/30 text-blue-400 font-mono text-sm">
                LowCode
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#0d1117]/80 border border-green-500/30 text-green-400 font-mono text-sm">
                TailwindCSS/Ant Design
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#0d1117]/80 border border-green-500/30 text-green-400 font-mono text-sm">
                Redux
              </span>
              <span className="px-4 py-2 rounded-lg bg-[#0d1117]/80 border border-green-500/30 text-amber-400 font-mono text-sm">
                MySQL/MongoDB
              </span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="space-y-6">
          <div className={`scroll-fade-scale scroll-fade-delay-2 ${isVisible ? 'scroll-fade-visible' : ''}`}>
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg shadow-emerald-500/40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 blur opacity-50 animate-pulse"></div>
                <img
                  alt="Profile"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover rounded-full border-2 border-white/30 shadow-lg shadow-cyan-400/50"
                  sizes="100vw"
                  src={avatar}
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-emerald-400 animate-pulse"></div>
              </div>
              <button className="mt-3 px-4 py-1.5 text-sm rounded-md bg-emerald-500/20 text-emerald-1000 border border-emerald-500/40 font-medium text-white">
                Contact Me
              </button>
            </div>
          </div>
          <div className={`scroll-fade-up scroll-fade-delay-3 ${isVisible ? 'scroll-fade-visible' : ''}`}>
            <div className="relative rounded-xl bg-gray-900/80 border border-gray-700 shadow-lg overflow-hidden max-w-lg backdrop-blur">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur opacity-20"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700 relative z-10">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-3 text-xs text-gray-400">
                  developer@terminal:~$
                </span>
              </div>
              <div className="p-4 font-mono text-sm space-y-1 relative z-10">
                <div className="font-mono text-sm space-y-1">
                  <span className="text-green-400 block">
                    $ npm run dev --mode=production
                  </span>
                  <span className="text-yellow-400 block">
                    &gt; Building the production version...
                  </span>
                  <span className="text-sky-400 block">
                    &gt; Server is live at https://localhost:5173
                  </span>
                  <span className="text-purple-400 block">
                    &gt; RAwaiting incoming connections... 🚀
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`scroll-fade-up scroll-fade-delay-4 ${isVisible ? 'scroll-fade-visible' : ''}`}>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-xl border border-gray-700 shadow p-5 text-center ${
                  isDarkMode ? "bg-[#0d1117]/80" : "bg-[#0d1117]/50"
                }`}
              >
                <p className="text-2xl font-bold text-cyan-400">1+</p>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400 " : "text-black"
                  }`}
                >
                  Years Experience
                </p>
              </div>
              <div
                className={`rounded-xl border border-gray-700 shadow p-5 text-center ${
                  isDarkMode ? "bg-[#0d1117]/80" : "bg-[#0d1117]/50"
                }`}
              >
                <p className="text-2xl font-bold text-emerald-400">3+</p>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
