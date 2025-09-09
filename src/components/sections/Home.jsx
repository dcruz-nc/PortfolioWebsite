import { RevealOnScroll } from "../RevealOnScroll";
import DarkVeil from "../WebGLDarkVeil";

export const Home = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* DarkVeil as background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <DarkVeil />
      </div>

      {/* Floating geometric elements - Mobile optimized */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-16 left-8 md:top-20 md:left-20 w-20 h-20 md:w-32 md:h-32 border border-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-8 md:top-40 md:right-32 w-16 h-16 md:w-24 md:h-24 border border-cyan-400/20 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-24 left-1/3 md:bottom-32 md:left-1/4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-8 md:top-1/2 md:right-20 w-16 h-16 md:w-20 md:h-20 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>



      <RevealOnScroll>
        <div className="text-center z-10 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 relative max-w-6xl mx-auto">
          {/* Main content container - Mobile optimized */}
          <div className="relative p-6 sm:p-8 md:p-12">

            {/* Greeting text with enhanced typography - Mobile optimized */}
            <div className="mb-6 sm:mb-8">
              <p className="text-blue-400/80 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase mb-3 sm:mb-4 animate-fade-in">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                  Hi, I'm David Cruz
                </span>
              </h1>
            </div>

            {/* Enhanced description with better typography - Mobile optimized */}
            <div className="mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-2">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                I'm a <span className="text-blue-400 font-semibold">Full-stack Developer</span> with a 
                <span className="text-cyan-400 font-semibold"> B.S. in Computer Science</span>. 
                Passionate about crafting clean, high-performance solutions that deliver exceptional 
                user experiences and outstanding performance.
              </p>
            </div>

            {/* Enhanced CTA buttons with better hover effects */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const projectsElement = document.getElementById('projects');
                  if (projectsElement) {
                    projectsElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 sm:py-5 px-6 sm:px-8 md:px-10 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center sm:justify-start space-x-2">
                  <span>View Projects</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative bg-transparent border-2 border-white/30 text-white py-4 sm:py-5 px-6 sm:px-8 md:px-10 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-500 hover:scale-105 hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center sm:justify-start space-x-2">
                  <span>Contact Me</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
              </a>
            </div>


          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
