import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const About = () => {

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-green-500/3 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <p className="text-blue-400/80 text-lg font-medium tracking-wider uppercase mb-4 animate-fade-in">
              Get to know me
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto animate-pulse"></div>
          </div>

          {/* Personal Introduction */}
          <div className="rounded-3xl p-10 mb-12 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-light mb-6">
                I'm a passionate <span className="text-blue-400 font-semibold">Software Developer</span> with a strong foundation in computer science and a drive to create innovative solutions that make a difference.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My journey in technology has been driven by curiosity and a desire to solve complex problems. I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.
              </p>
            </div>
          </div>

          {/* Education Section with Timeline */}
          <div className="rounded-3xl p-10 mb-12 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500">
            <h3 className="text-3xl font-bold mb-8 text-white text-center flex items-center justify-center gap-3">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education Journey
            </h3>

            <div className="space-y-8">
                             {/* University Row */}
               <div className="relative">
                 <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#0A5F38]/10 to-[#0A5F38]/20 backdrop-blur-sm border border-[#0A5F38]/30 hover:bg-gradient-to-r hover:from-[#0A5F38]/15 hover:to-[#0A5F38]/25 hover:border-[#0A5F38]/40 transition-all duration-500 group">
                   <div className="relative">
                     <img 
                       src="/C_only.png" 
                       alt="UNC Charlotte Logo" 
                       className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                     />
                     <div className="absolute inset-0 bg-[#0A5F38]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   </div>
                   <div className="flex-1">
                     <h4 className="text-2xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h4>
                     <p className="text-[#0A5F38] text-lg font-medium">University of North Carolina at Charlotte</p>
                     <p className="text-gray-400 text-sm mt-1">Concentration in Web/Mobile Development & Software Engineering</p>
                   </div>
                   <div className="text-right">
                     <div className="text-[#0A5F38] text-sm font-medium">2023 - 2025</div>
                     <div className="w-3 h-3 bg-[#0A5F38] rounded-full mt-2"></div>
                   </div>
                 </div>
               </div>

                             {/* College Row */}
               <div className="relative">
                 <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#990F4B]/10 to-[#990F4B]/20 backdrop-blur-sm border border-[#990F4B]/30 hover:bg-gradient-to-r hover:from-[#990F4B]/15 hover:to-[#990F4B]/25 hover:border-[#990F4B]/40 transition-all duration-500 group">
                   <div className="relative">
                     <img 
                       src="/mcc_only.png" 
                       alt="Mitchell Community College Logo" 
                       className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                     />
                     <div className="absolute inset-0 bg-[#990F4B]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   </div>
                   <div className="flex-1">
                     <h4 className="text-2xl font-bold text-white mb-2">Associate in Science</h4>
                     <p className="text-[#990F4B] text-lg font-medium">Mitchell Community College</p>
                     <p className="text-gray-400 text-sm mt-1">Dean's List</p>
                   </div>
                   <div className="text-right">
                     <div className="text-[#990F4B] text-sm font-medium">2020 - 2023</div>
                     <div className="w-3 h-3 bg-[#990F4B] rounded-full mt-2"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

                      {/* Enhanced Skills Section */}
            <div className="rounded-3xl p-10 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500">
              <h3 className="text-3xl font-bold mb-8 text-white text-center flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Technical Skills
              </h3>
              
              <p className="text-gray-300 text-lg mb-10 text-center max-w-3xl mx-auto leading-relaxed">
                I've developed a diverse set of technical skills through academic projects, personal development, and real-world applications. Here's what I bring to the table:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Programming Languages */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/30 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">💻</div>
                    <h4 className="text-xl font-bold text-white">Programming Languages</h4>
                  </div>
                  <div className="space-y-2">
                    {['Java', 'JavaScript', 'Python', 'C', 'C++'].map((lang, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Web Technologies */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/20 hover:border-green-400/30 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🌐</div>
                    <h4 className="text-xl font-bold text-white">Web Technologies</h4>
                  </div>
                  <div className="space-y-2">
                    {['HTML5', 'CSS3', 'React', 'Node.js', 'Express.js'].map((tech, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases & APIs */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/30 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🗄️</div>
                    <h4 className="text-xl font-bold text-white">Databases & APIs</h4>
                  </div>
                  <div className="space-y-2">
                    {['MongoDB', 'MySQL', 'Firebase', 'REST APIs', 'SQLite'].map((db, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>{db}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Development Tools */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/30 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🛠️</div>
                    <h4 className="text-xl font-bold text-white">Development Tools</h4>
                  </div>
                  <div className="space-y-2">
                    {['Git', 'VS Code', 'Postman', 'Android Studio', 'Eclipse'].map((tool, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Development */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/30 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">📱</div>
                    <h4 className="text-xl font-bold text-white">Mobile Development</h4>
                  </div>
                  <div className="space-y-2">
                    {['Android Development', 'JavaFX', 'Responsive Design', 'UI/UX'].map((mobile, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span>{mobile}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialized Skills */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/10 backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/30 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <h4 className="text-xl font-bold text-white">Specialized Skills</h4>
                  </div>
                  <div className="space-y-2">
                    {['RISC-V Assembly', 'Game Development', 'AI Integration', 'Performance Optimization'].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full border border-white/10">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-300 font-medium">Always learning and expanding my skill set</span>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
