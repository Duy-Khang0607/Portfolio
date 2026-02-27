import React from "react";

const ScrollTop = () => {
  return (
    <section className="scroll-top fixed -bottom-10 right-2 md:right-4">
      <div className="h-full w-full rounded-full bg-green-500 text-black flex items-center justify-center font-bold hover:bg-green-400 transition disabled:opacity-50 shadow-lg">
        <button
          className="h-10 w-10 flex items-center justify-center cursor-pointer"
          onClick={() => {
            const scrollToTopSlow = () => {
              const position = document.documentElement.scrollTop || document.body.scrollTop;
              if (position > 0) {
                const next = position - Math.max(1, position * 0.05);
                window.scrollTo(0, next);
                requestAnimationFrame(scrollToTopSlow);
              }
            };
            scrollToTopSlow();
          }}
        >
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
