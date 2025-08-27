import { RevealOnScroll } from "./RevealOnScroll";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-2xl border-t border-white/20 py-20 px-6">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology and development.
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/david-cruz-b29683258/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300"
              >
                <span className="text-blue-400 text-xl group-hover:scale-110 transition-transform duration-300">🔗</span>
                <span className="text-white font-medium">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/dcruz-nc"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300"
              >
                <span className="text-gray-300 text-xl group-hover:scale-110 transition-transform duration-300">🐙</span>
                <span className="text-white font-medium">GitHub</span>
              </a>
            </div>

            {/* Contact Info Text */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">✉️</span>
                <a 
                  href="mailto:dcruz.nc@gmail.com"
                  className="hover:text-white transition-colors duration-300 font-medium"
                >
                  dcruz.nc@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-purple-400 text-xl">📱</span>
                <a 
                  href="tel:7042530889"
                  className="hover:text-white transition-colors duration-300 font-medium"
                >
                  (704) 253-0889
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <a href="#home" className="hover:text-white transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#about" className="hover:text-white transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#projects" className="hover:text-white transition-colors duration-300 font-medium">
                Projects
              </a>
              <a href="#contact" className="hover:text-white transition-colors duration-300 font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm">
              © 2024 David Cruz. All rights reserved.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
};
