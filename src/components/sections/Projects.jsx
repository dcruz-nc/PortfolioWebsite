import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
            {/* Project Cards */}
            {[...projectData].map((project, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 group"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.icon} {project.title}
                </h3>
                <p className="text-gray-200 text-base sm:text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 border hover:-translate-y-1
  ${
    project.color === "blue"
      ? "bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,224,0.3)]"
      : project.color === "green"
      ? "bg-green-500/20 text-green-300 border-green-500/20 hover:bg-green-500/30 hover:shadow-[0_4px_12px_rgba(34,197,94,0.3)]"
      : project.color === "yellow"
      ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/30 hover:shadow-[0_4px_12px_rgba(234,179,8,0.3)]"
      : project.color === "purple"
      ? "bg-purple-500/20 text-purple-300 border-purple-500/20 hover:bg-purple-500/30 hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)]"
      : project.color === "pink"
      ? "bg-pink-500/20 text-pink-300 border-pink-500/20 hover:bg-pink-500/30 hover:shadow-[0_4px_12px_rgba(236,72,153,0.3)]"
      : project.color === "orange"
      ? "bg-orange-500/20 text-orange-300 border-orange-500/20 hover:bg-orange-500/30 hover:shadow-[0_4px_12px_rgba(249,115,22,0.3)]"
      : project.color === "cyan"
      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/30 hover:shadow-[0_4px_12px_rgba(6,182,212,0.3)]"
      : "bg-gray-500/20 text-gray-300 border-gray-500/20 hover:bg-gray-500/30 hover:shadow-[0_4px_12px_rgba(107,114,128,0.3)]" // fallback color
  }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link, key) => (
                    <a
                      key={key}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative inline-flex items-center px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-blue-300 hover:text-blue-200 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)]"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {link.label}
                        <span className="text-blue-400 group-hover/link:translate-x-1 transition-transform duration-300">➡️</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Sample Project Data (for simplicity in mapping)
const projectData = [
  {
    title: "VoyagerAI",
    icon: "🚐",
    description:
      "A responsive car rental website that integrates OpenAI to provide AI-powered car recommendations and interactive chatbot features for users.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "OpenAI API Integration",
      "BEM Methodology",
      "Responsive Design",
      "DOM Manipulation",
    ],
    color: "blue",
    links: [
      {
        label: "View Project",
        url: "https://voyagerai-qxxm.onrender.com/",
      },
    ],
  },
  {
    title: "1maginary Online Mobile App",
    icon: "📻",
    description:
      "A full-stack Android application integrated with 1maginary.fm, featuring live radio streaming, real-time chat, user engagement tools like XP and pinned messages, and seamless background audio playback.",
    tech: [
      "Java",
      "Android Development",
      "Firebase (Auth, Firestore, Storage)",
      "REST API",
      "Real-time Chat",
      "Background Audio Playback",
    ],
    color: "purple",
    links: [
      {
        label: "Private Repo",
        url: "https://github.com/dcruz-nc",
      },
    ],
  },
  {
    title: "Cruz Landscaping",
    icon: "🌿",
    description:
      "A professional landscaping website for Cruz Landscaping featuring service descriptions, image galleries, and seasonal showcases.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Webhooks",
    ],
    color: "green",
    links: [
      {
        label: "View Website",
        url: "https://cruzlandscaping.netlify.app/",
      },
    ],
  },
  {
    title: "GraveMan Game",
    icon: "🎲",
    description:
      "A web-based 2D platform game where your objective is to reach the end while dodging spooky enemies.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Video Game Physics",
      "Sprite Animations",
      "Level Design & Game Logic",
    ],
    color: "pink",
    links: [
      {
        label: "View Project",
        url: "https://gravemangame.netlify.app/",
      },
    ],
  },
  {
    title: "TeamThinkTank.",
    icon: "📝",
    description:
      "A note-sharing application designed by students for students.",
    tech: [
      "Bootstrap",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
    color: "yellow",
    links: [
      {
        label: "View Project",
        url: "https://dcruz-nc.github.io/Team-Think-Tank/",
      },
    ],
  },
];

