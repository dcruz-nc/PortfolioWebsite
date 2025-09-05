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

  const getCurvePath = () => {
    const activeIndex = sections.findIndex(s => s.id === activeSection);
    const totalSections = sections.length;
    
    // Create a curved path that changes based on active section
    const curveIntensity = 0.3 + (activeIndex / totalSections) * 0.4; // 0.3 to 0.7
    const curveOffset = activeIndex * 20; // Offset based on active section
    
    return `M 0,0 Q 16,${curveOffset + 16} 32,${curveOffset + 32} T 64,${curveOffset + 64}`;
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      {/* Curved background container */}
      <div className="relative">
        {/* Dynamic curved background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-blue-500/10 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
        
        {/* Curved connection line */}
        <svg 
          className="absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-full pointer-events-none"
          viewBox="0 0 64 160"
          preserveAspectRatio="none"
        >
          <path
            d={getCurvePath()}
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            className="curve-path transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 0.5)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative flex flex-col space-y-6 p-4 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            const isNext = sections.findIndex(s => s.id === activeSection) === index - 1;
            const isPrev = sections.findIndex(s => s.id === activeSection) === index + 1;
            
            return (
              <div key={section.id} className="relative group">
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative w-14 h-14 rounded-xl border-2 transition-all duration-500 flex flex-col items-center justify-center group-hover:scale-110 group-hover:rotate-2 ${
                    isActive
                      ? "bg-gradient-to-br from-blue-500 to-cyan-400 border-blue-300 text-white shadow-2xl shadow-blue-500/50 scale-110 scrollspy-active"
                      : isNext || isPrev
                      ? "bg-gradient-to-br from-white/20 to-white/10 border-white/30 text-white shadow-lg shadow-white/10 scale-105"
                      : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30 hover:text-white hover:shadow-lg"
                  }`}
                  aria-label={`Go to ${section.label} section`}
                >
                  {/* Animated background for active state */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-300/20 to-blue-400/20 animate-pulse"></div>
                      <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    </div>
                  )}

                  {/* Section number with dynamic styling */}
                  <div className={`text-sm font-bold transition-all duration-300 ${
                    isActive ? 'text-white' : isNext || isPrev ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Ripple effect */}
                  <div className={`absolute inset-0 rounded-xl bg-white/20 scale-0 transition-transform duration-300 ${
                    isActive ? 'scale-100' : ''
                  }`}></div>
                </button>
                
                {/* Enhanced tooltip with curved design */}
                <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-xl text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none group-hover:translate-x-0 group-hover:scale-100 translate-x-2 scale-95">
                  <div className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-blue-400 animate-pulse' : 'bg-gray-400'
                    }`}></div>
                    <span>{section.label}</span>
                  </div>
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-3 border-l-gray-900/95 border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
