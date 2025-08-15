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
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Education Section */}
<div className="rounded-xl p-8 border-white/10 border mb-8 hover:-translate-y-1 transition-all">
  <h3 className="text-xl font-bold mb-4">Education</h3>

  {/* University Row */}
  <div className="flex items-center gap-4 mb-2">
  { /* <img 
      src="src\assets\C_only.png" 
      alt="UNC Charlotte Logo" 
      className="w-12 h-12 object-contain"
    /> */}
    <p className="text-gray-300">
      Bachelor of Science in Computer Science - University of North Carolina at Charlotte
    </p>
  </div>

  {/* College Row */}
  <div className="flex items-center gap-4 mb-2">
   { /* <img 
      src="src\assets\mcc_only.png" 
      alt="Mitchell Community College Logo" 
      className="w-12 h-12 object-contain"
    /> */}
    <p className="text-gray-300">
      Associate in Science - Mitchell Community College
    </p>
  </div>
</div>


          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Software developer dedicated to creating innovative and effective solutions using diverse programming languages and development tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
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
