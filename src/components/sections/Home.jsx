import { RevealOnScroll } from "../RevealOnScroll";
import DarkVeil from "../WebGLDarkVeil";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
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
      
      <RevealOnScroll>
        <div className="text-center z-10 px-8 py-12 relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm David Cruz
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            I'm a Full-stack developer with a B.S. in Computer Science. I'm passionate about creating clean, high-performance solutions that deliver excellent performance and a great user experience.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-8 rounded-xl font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.3)] hover:bg-white/20 group"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="bg-transparent backdrop-blur-sm border border-white/30 text-white py-4 px-8 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] hover:bg-white/10 hover:border-white/50 group"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
