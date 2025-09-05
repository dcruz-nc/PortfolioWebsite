import { useState } from "react";

export const MobileMenuButton = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <button
      className="fixed top-6 left-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer z-40 md:hidden group"
      onClick={toggleMenu}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
    >
      <div className="flex items-center justify-center">
        {menuOpen ? (
          <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
        ) : (
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">☰</span>
        )}
      </div>
    </button>
  );
};
