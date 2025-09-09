import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const getOpacity = (index) => {
    if (hoveredIndex === null) return 1;
    if (index === hoveredIndex) return 1;
    
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 1) return 0.6;
    if (distance === 2) return 0.3;
    if (distance === 3) return 0.1;
    return 0.1;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            David<span className="text-blue-500 hover:text-cyan-400 transition-colors duration-300">.Cruz</span>
          </a>

          <button
            className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer z-40 group"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMenu();
            }}
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

        </div>
      </div>
    </nav>
  );
};
