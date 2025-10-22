import React from "react";
import { useScrollVisibility } from "../customHooks/useScrollSpy";

const Footer = ({ isDarkMode }) => {
  const isVisible = useScrollVisibility('contact', { threshold: 0.3 });

  return (
    <footer className={`mt-20 py-8 border-t border-gray-800 relative z-50 scroll-fade ${isVisible ? 'scroll-fade-visible' : ''}`}>
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p 
          className="relative z-10"
          style={{ color: isDarkMode ? 'rgb(156, 163, 175)' : 'rgb(0, 0, 0)' }}
        >
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
