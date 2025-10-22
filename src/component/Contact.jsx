import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";
import ContactForm from "./ContactForm";
import { useScrollVisibility } from "../customHooks/useScrollSpy";

const Contact = ({ isDarkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isloading, setLoading] = useState(false);
  const isVisible = useScrollVisibility('contact', { threshold: 0.1 });

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const res = await axios.post(
        "https://api-foodies-send-mail-portfolio.onrender.com/api/portfolio/contact",
        { name, email, message }
      );
      if (res?.data?.success) {
        toast.success("Message sent successfully");
      } else {
        toast.error("Vui lòng thử lại sau !");
      }
    } catch (e) {
      toast.error(e?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className={`flex items-center gap-2 scroll-fade ${isVisible ? 'scroll-fade-visible' : ''}`}>
        <span className="section-title-dot w-2 h-2 bg-green-400 rounded-full transition-all duration-300 animate-pulse"></span>
        <span
          className={`section-title-text font-medium ${
            isDarkMode ? "text-gray-400" : "text-black"
          } z-50`}
        >
          Contact
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 rounded-lg py-12 px-4">
        <div className={`lg:w-1/2 scroll-fade-up scroll-fade-delay-1 ${isVisible ? 'scroll-fade-visible' : ''}`}>
          <div className="p-6 md:p-8 bg-[#0d1117] rounded-xl border border-gray-800 shadow-lg flex flex-col gap-8 font-sans">
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-28 h-28">
                <img
                  alt="Avatar"
                  className="rounded-full border-2 border-[#39d353] p-1 w-full h-full object-cover"
                  src="https://placehold.co/100x100/1e293b/d4d4d8?text=DK"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#58a6ff]">
                Nguyen Hoang Duy Khang
              </h3>
              <p className="text-sm text-[#bb80ff] italic">
                Frontend Developer
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#39d353]"
                >
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0h2v.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5V18h2"></path>
                </svg>{" "}
                <span className="text-[#58a6ff]">Tech Stack</span>
              </h4>
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">ReactJS</span>
                    <span
                      className="font-semibold"
                      style={{ color: "rgb(57, 211, 83)" }}
                    >
                      Proficient
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: "95%",
                        backgroundColor: "rgb(57, 211, 83)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">
                      JavaScript/TypeScript
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "rgb(57, 211, 83)" }}
                    >
                      Proficient
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: "95%",
                        backgroundColor: "rgb(57, 211, 83)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">TailwindCSS</span>
                    <span
                      className="font-semibold"
                      style={{ color: "rgb(57, 211, 83)" }}
                    >
                      Proficient
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: "95%",
                        backgroundColor: "rgb(57, 211, 83)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">Ant Design/Shadcn UI</span>
                    <span
                      className="font-semibold"
                      style={{ color: "rgb(57, 211, 83)" }}
                    >
                      Proficient
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: "95%",
                        backgroundColor: "rgb(57, 211, 83)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">NextJS</span>
                    <span
                      className="font-semibold"
                      style={{ color: "rgb(172 99 138)" }}
                    >
                      Intermediate
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: "70%",
                        backgroundColor: "rgb(172 99 138)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">Redux(Thunk/Toolkit)</span>
                    <span
                      className="font-semibold"
                      style={{ color: "rgb(88, 166, 255)" }}
                    >
                      Experienced
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: "75%",
                        backgroundColor: "rgb(88, 166, 255)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">Joget(Lowcode)</span>
                    <span
                      className="font-semibold"
                      style={{ color: "rgb(88, 166, 255)" }}
                    >
                      Experienced
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: "75%",
                        backgroundColor: "rgb(88, 166, 255)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">MySQL/MongoDB</span>
                    <span
                      className="font-semibold"
                      style={{ color: "#d7b145" }}
                    >
                      Experienced
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: "65%", backgroundColor: "#d7b145" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">Docker</span>
                    <span
                      className="font-semibold"
                      style={{ color: "#d7b145" }}
                    >
                      Experienced
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: "65%", backgroundColor: "#d7b145" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#58a6ff]">PM2</span>
                    <span
                      className="font-semibold"
                      style={{ color: "#d7b145" }}
                    >
                      Experienced
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: "65%", backgroundColor: "#d7b145" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#f9d342] text-lg"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[#58a6ff] font-medium">Email</span>
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-400"
                    }`}
                  >
                    nguyenhoangduykhang0607@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#f9d342] text-lg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2.02c-.49-.05-.98-.12-1.46-.22a15.04 15.04 0 0 1-7.38-7.38c-.1-.48-.17-.97-.22-1.46a2 2 0 0 1 2.02-2.18h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3a15.04 15.04 0 0 0-7.38 7.38A15.04 15.04 0 0 0 2 16.92v3a2 2 0 0 0 2 2h3a15.04 15.04 0 0 0 7.38-7.38c.1.48.17.97.22 1.46a2 2 0 0 0 2.18 2.02Z"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[#58a6ff] font-medium">Phone</span>
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-400"
                    }`}
                  >
                    +84 902 926 340
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#f9d342] text-lg"
                >
                  <path d="M12 18s-4-6-4-8a4 4 0 0 1 8 0c0 2-4 8-4 8z"></path>
                  <circle cx="12" cy="10" r="2"></circle>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[#58a6ff] font-medium">Location</span>
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-400"
                    }`}
                  >
                    Ho Chi Minh City, Vietnam
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`lg:w-1/2 scroll-fade-scale scroll-fade-delay-2 ${isVisible ? 'scroll-fade-visible' : ''}`}>
          {/* <div class="p-6 md:p-8 bg-[#0d1117] rounded-xl border border-gray-100/10 shadow-lg font-mono text-gray-100 min-h-[500px] relative">
            <div className="relative flex items-center justify-between px-4 py-2 bg-[#161b22] text-xs text-gray-400 rounded-t-lg">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span class="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span class="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                <span class="ml-3">contact-form.js</span>
              </div>
            </div>
            <form
              className="p-6 space-y-4 rounded-b-lg h-[580px]"
              onSubmit={handleSubmit}
            >
              {isloading ? (
                <Loading />
              ) : (
                <>
                  <pre className="text-green-400 text-sm">
                    function sendMessage(){"{"}
                  </pre>
                  <div>
                    <span className="text-cyan-400 text-sm">
                      const name = "
                    </span>
                    <input
                      placeholder="Enter your full name"
                      className="bg-transparent border border-gray-700 rounded px-3 py-2 w-full my-2 text-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <span className="text-cyan-400 text-sm">";</span>
                  </div>
                  <div>
                    <span className="text-cyan-400 text-sm">
                      const email = "
                    </span>
                    <input
                      placeholder="Enter your full name"
                      className="bg-transparent border border-gray-700 rounded px-3 py-2 w-full my-2 text-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                    ></input>
                    <span className="text-cyan-400 text-sm">";</span>
                  </div>
                  <div>
                    <span className="text-cyan-400 text-sm">
                      const message = "
                    </span>
                    <textarea
                      placeholder="Enter your full message"
                      className="bg-transparent border border-gray-700 rounded px-3 py-2 w-full my-2 text-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                    ></textarea>
                    <span className="text-cyan-400 text-sm">";</span>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-green-400 transition disabled:opacity-50"
                  >
                    ▶ return sendMessage();
                  </button>
                  <pre className="text-green-400 text-sm">{"}"}</pre>
                </>
              )}
            </form>
          </div> */}
          <ContactForm isDarkMode={isDarkMode}/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
