import { useEffect, useState } from "react";

export const ScrollbarNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center group-hover:scale-110 ${
                activeSection === section.id
                  ? "bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30 hover:text-white"
              }`}
              aria-label={`Go to ${section.label} section`}
            >
              <span className="text-sm font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {section.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900/90 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </button>
            
            {/* Connection line */}
            {index < sections.length - 1 && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-white/20 to-white/10"></div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
