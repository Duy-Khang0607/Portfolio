import React from "react";
import Loading from "./Loading";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const ContactForm = ({ isDarkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isloading, setLoading] = useState(false);
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
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className={`p-6 md:p-8 bg-[#0d1117] rounded-xl border border-gray-100/10 shadow-lg font-mono text-gray-100 min-h-[500px] relative ${isDarkMode ? "text-gray-400" : "text-black"}`}>
      <div className="relative flex items-center justify-between px-4 py-2 bg-[#161b22] text-xs text-gray-400 rounded-t-lg">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
          <span className="ml-3">contact-form.js</span>
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
              <span className="text-cyan-400 text-sm">const name = "</span>
              <input
                placeholder="Enter your full name"
                className="bg-transparent border border-gray-700 rounded px-3 py-2 w-full my-2 text-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
              <span className="text-cyan-400 text-sm">";</span>
            </div>
            <div>
              <span className="text-cyan-400 text-sm">const email = "</span>
              <input
                placeholder="Enter your full name"
                className="bg-transparent border border-gray-700 rounded px-3 py-2 w-full my-2 text-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              ></input>
              <span className="text-cyan-400 text-sm">";</span>
            </div>
            <div>
              <span className="text-cyan-400 text-sm">const message = "</span>
              <textarea
                placeholder="Enter your full message"
                className="bg-transparent border border-gray-700 rounded px-3 py-2 w-full my-2 text-gray-200 focus:outline-none focus:border-green-500 transition-colors"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                required
              ></textarea>
              <span className="text-cyan-400 text-sm">";</span>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-green-400 transition disabled:opacity-50 cursor-pointer"
            >
              ▶ return sendMessage();
            </button>
            <pre className="text-green-400 text-sm">{"}"}</pre>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
