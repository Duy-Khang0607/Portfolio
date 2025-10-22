import { useState, useEffect } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Project from "./component/Project";
import ScrollTop from "./component/ScrollTop";
import ContactForm from "./component/ContactForm";
import LoadingPage from "./component/LoadingPage";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Loading from "./component/Loading";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Handle ESC key and prevent body scroll when modal is open
  useEffect(() => {
    if (isContactModalOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Handle ESC key
      const handleEscape = (e) => {
        if (e.key === "Escape") {
          closeContactModal();
        }
      };

      window.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isContactModalOpen]);

  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      {/* Loading Page */}
      {isLoading && <LoadingPage onLoadingComplete={handleLoadingComplete} />}
      
      <div
        className={`absolute inset-0 z-0`}
        style={{
          backgroundImage: isDarkMode
            ? `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`
            : `radial-gradient(125% 125% at 50% 90%, #fff 40%, rgb(203 213 225) 100%)`,
        }}
      />
      <Toaster
        position="top-right"
        className="z-[9999]"
        toastOptions={{
          duration: 3000,
        }}
      />
      {/* Your Content/Components */}
      <section
        className={`min-h-screen p-4 md:p-8 max-w-7xl mx-auto ${
          isDarkMode ? "text-gray-400" : "text-black"
        }`}
      >
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          openContactModal={openContactModal}
        />
        <main
          className={`max-w-7xl mx-auto py-8 md:py-10 px-4 md:px-8 space-y-16 ${
            isDarkMode ? "text-gray-400" : "text-black"
          }`}
        >
          <Home
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            openContactModal={openContactModal}
          />
          <About isDarkMode={isDarkMode} />
          <Project isDarkMode={isDarkMode} />
          <Experience isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <ScrollTop />
          <Footer isDarkMode={isDarkMode} />
        </main>

        {/* Contact Modal */}
        {isContactModalOpen && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeContactModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <div
              className="relative z-10 w-full max-w-2xl animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeContactModal}
                className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-500/90 hover:bg-red-600 text-white transition-all z-10 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>

              {/* ContactForm */}
              <ContactForm isDarkMode={isDarkMode} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
