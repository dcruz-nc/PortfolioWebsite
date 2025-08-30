import React from "react";

export const Footer = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "dcruz.nc@gmail.com",
      link: "mailto:dcruz.nc@gmail.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "David Cruz",
      link: "https://www.linkedin.com/in/david-cruz-b29683258/"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "dcruz-nc",
      link: "https://github.com/dcruz-nc"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (704) 253-0889",
      link: "tel:+17042530889"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black/90 backdrop-blur-xl border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      {/* Background decorative elements - Mobile optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-8 sm:left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-8 sm:right-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-4 sm:left-0 w-20 h-20 sm:w-24 sm:h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content - Mobile optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Contact Information - Mobile optimized */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center lg:text-left">
              Let's Connect
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="group">
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? "_blank" : "_self"}
                    rel={method.link.startsWith('http') ? "noopener noreferrer" : ""}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-gray-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1">
                        {method.title}
                      </h4>
                      <p className="text-white font-medium text-sm sm:text-base group-hover:text-blue-400 transition-colors duration-300 truncate">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links - Mobile optimized */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-3 sm:gap-4">
              <a href="#home" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-white/5">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-white/5">
                About
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-white/5">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base py-2 px-3 rounded-lg hover:bg-white/5">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - Mobile optimized */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 David Cruz. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
              <span className="flex items-center gap-2">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">Available for opportunities</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
