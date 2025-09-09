import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { href: "#home", label: "Home", description: "Welcome to my portfolio" },
    { href: "#about", label: "About", description: "Learn more about me" },
    { href: "#projects", label: "Projects", description: "View my work" },
    { href: "#contact", label: "Contact", description: "Get in touch" }
  ];


  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('button')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, setMenuOpen]);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen, setMenuOpen]);

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`mobile-menu fixed top-0 left-0 w-full h-screen z-50 transition-all duration-500 ease-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Backdrop with gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-blue-900/80 backdrop-blur-2xl transition-all duration-500 ease-out
          ${menuOpen ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
      ></div>

      {/* Navbar Header */}
      <div className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
              David<span className="text-blue-500 hover:text-cyan-400 transition-colors duration-300">.Cruz</span>
            </a>

            <button
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer z-40 group"
              onClick={handleClose}
              aria-label="Close menu"
              aria-expanded={menuOpen}
            >
              <div className="flex items-center justify-center">
                <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Container */}
      <div className={`relative z-40 h-full flex flex-col items-center justify-center transition-all duration-700 ease-out pt-16 pointer-events-none
        ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>

        {/* Menu Header */}
        <div className="text-center mb-12 px-6 pointer-events-auto">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
            <span className="text-white text-2xl font-bold">DC</span>
          </div>
          <h2 className="text-white text-2xl font-bold mb-2">David Cruz</h2>
          <p className="text-gray-400 text-sm font-medium">Full-Stack Developer</p>
        </div>

        {/* Menu Items */}
        <div className="w-full max-w-sm px-6 space-y-4 pointer-events-auto">
          {menuItems.map((item, index) => (
            <div
              key={item.href}
              className={`transform transition-all duration-500 ease-out delay-${index * 100}
                ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClose();
                  // Smooth scroll to section
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group block w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center space-x-4">
                  {/* Text Content */}
                  <div className="flex-1 text-left">
                    <h3 className="text-white text-lg font-semibold group-hover:text-blue-300 transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></div>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className={`mt-12 text-center px-6 transition-all duration-700 ease-out delay-500 pointer-events-auto
          ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium text-sm">Available for opportunities</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-8 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl opacity-0 animate-pulse"></div>
      </div>

      {/* Bottom Gradient Line */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-700 ease-out
        ${menuOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}></div>
    </div>
  );
};
