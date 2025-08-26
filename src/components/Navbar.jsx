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

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            David<span className="text-blue-500 hover:text-cyan-400 transition-colors duration-300">.Cruz</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white hover:text-blue-400 transition-colors duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex item-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                style={{ opacity: getOpacity(index) }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
