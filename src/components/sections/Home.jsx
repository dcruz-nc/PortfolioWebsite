import { RevealOnScroll } from "../RevealOnScroll";
import DarkVeil from "../WebGLDarkVeil";
import { useEffect, useState } from "react";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* DarkVeil as background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0 
      }}>
        <DarkVeil />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-cyan-400/20 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Interactive cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)',
        }}
      />

      <RevealOnScroll>
        <div className="text-center z-10 px-8 py-16 relative max-w-6xl mx-auto">
          {/* Main content container with enhanced glassmorphism */}
          <div className="relative bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] p-12 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] opacity-30"></div>
            
            {/* Animated underline */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>

            {/* Greeting text with enhanced typography */}
            <div className="mb-8">
              <p className="text-blue-400/80 text-lg font-medium tracking-wider uppercase mb-4 animate-fade-in">
                Welcome to my portfolio
              </p>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                  Hi, I'm David Cruz
                </span>
              </h1>
            </div>

            {/* Enhanced description with better typography */}
            <div className="mb-12 max-w-3xl mx-auto">
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light">
                I'm a <span className="text-blue-400 font-semibold">Full-stack Developer</span> with a 
                <span className="text-cyan-400 font-semibold"> B.S. in Computer Science</span>. 
                Passionate about crafting clean, high-performance solutions that deliver exceptional 
                user experiences and outstanding performance.
              </p>
            </div>

            {/* Enhanced CTA buttons with better hover effects */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="#projects"
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-5 px-10 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View Projects</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="#contact"
                className="group relative bg-transparent border-2 border-white/30 text-white py-5 px-10 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Contact Me</span>
                  <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </a>
            </div>


          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
