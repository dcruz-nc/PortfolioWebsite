import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-16 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12">
            {/* Project Cards */}
            {[...projectData].map((project, index) => (
              <div
                key={index}
                className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300 bg-white/5"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                  {project.icon} {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm transition
  ${
    project.color === "blue"
      ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
      : project.color === "green"
      ? "bg-green-500/10 text-green-400 hover:bg-green-500/20"
      : project.color === "yellow"
      ? "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20"
      : project.color === "purple"
      ? "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
      : project.color === "pink"
      ? "bg-pink-500/10 text-pink-400 hover:bg-pink-500/20"
      : project.color === "orange"
      ? "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20"
      : project.color === "cyan"
      ? "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
      : "bg-gray-500/10 text-gray-400 hover:bg-gray-500/20" // fallback color
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
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      {link.label} ➡️
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

