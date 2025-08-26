import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "JavaFX",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
  ];
  const backendSkills = [
    "Java",
    "C",
    "C++",
    "RISC-V Assembly",
    "Node.js",
    "MySQL", 
    "SQLite", 
    "Apache Derby", 
    "Firebase", 
    "MongoDB",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Education Section */}
          <div className="rounded-2xl p-8 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>

            {/* University Row */}
            <div className="flex items-center gap-4 mb-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300">
              <img 
                src="/C_only.png" 
                alt="UNC Charlotte Logo" 
                className="w-14 h-14 object-contain"
              />
              <p className="text-gray-200 text-lg">
                Bachelor of Science in Computer Science - University of North Carolina at Charlotte
              </p>
            </div>

            {/* College Row */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-300">
              <img 
                src="/mcc_only.png" 
                alt="Mitchell Community College Logo" 
                className="w-14 h-14 object-contain"
              />
              <p className="text-gray-200 text-lg">
                Associate in Science - Mitchell Community College
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300">
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Software developer dedicated to creating innovative and effective solutions using diverse programming languages and development tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 bg-white/5 backdrop-blur-sm border border-white/5 hover:-translate-y-1 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-white">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/20 text-blue-300 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,224,0.3)] hover:-translate-y-1 transition-all duration-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 bg-white/5 backdrop-blur-sm border border-white/5 hover:-translate-y-1 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-white">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/20 text-green-300 py-2 px-4 rounded-full text-sm font-medium hover:bg-green-500/30 hover:shadow-[0_4px_12px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-300 border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
