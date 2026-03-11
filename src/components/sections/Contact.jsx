import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background decorative elements - Mobile optimized */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-full"></div>
        <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header - Mobile optimized */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-400/80 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase mb-3 sm:mb-4">
              Let's connect
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4 sm:mt-6 animate-pulse"></div>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/5 via-white/3 to-white/5 border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] text-center">
              <div className="mb-4 sm:mb-6">
                <div className="w-32 h-40 sm:w-40 sm:h-56 mb-4 mx-auto overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                  <img 
                    src="/hsprofile.webp" 
                    alt="David Cruz - Full-Stack Developer" 
                    className="w-full h-full object-contain"
                    style={{ imageRendering: "high-quality" }}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">David Cruz</h3>
                <p className="text-blue-400 font-medium text-sm sm:text-base">Full-Stack Developer</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Passionate about creating innovative solutions and always eager to take on new challenges.
                Feel free to reach out through LinkedIn or check out my resume below if you’d like to connect or collaborate.
              </p>
              <div className="space-y-3">
                <a
                  href="/DavidCruz_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)]"
                >
                  View Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/david-cruz-b29683258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-white/20 text-white py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 hover:border-blue-400 hover:scale-105"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
