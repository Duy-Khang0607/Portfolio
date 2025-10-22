import React from "react";

const ScrollTop = () => {
  return (
    <section className="scroll-top fixed bottom-4 right-4">
      <div className="h-full w-full rounded-full bg-green-500 text-black flex items-center justify-center font-bold hover:bg-green-400 transition disabled:opacity-50 shadow-lg">
        <button className="h-10 w-10 flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up font-bold"
          >
            <path d="M12 19V5"></path>
            <path d="M5 12l7-7 7 7"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ScrollTop;
