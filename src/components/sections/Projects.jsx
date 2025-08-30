import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects", color: "blue" },
    { id: "web", label: "Web Development", color: "cyan" },
    { id: "mobile", label: "Mobile Apps", color: "purple" },
    { id: "game", label: "Games", color: "pink" },
    { id: "ai", label: "AI/ML", color: "orange" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projectData 
    : projectData.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(activeFilter);
        }
        return project.category === activeFilter;
      });

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background decorative elements - Mobile optimized */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-16 left-8 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-orange-500/3 to-yellow-500/3 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="w-full max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header - Mobile optimized */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-400/80 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase mb-3 sm:mb-4 animate-fade-in">
              My creative work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              A showcase of my technical skills and creative problem-solving across various domains
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4 sm:mt-6 animate-pulse"></div>
          </div>

          {/* Filter Tabs - Mobile optimized */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeFilter === filter.id
                    ? `bg-gradient-to-r from-${filter.color}-500 to-${filter.color}-600 text-white shadow-[0_8px_25px_rgba(59,130,246,0.3)]`
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <span className="relative z-10">{filter.label}</span>
                {activeFilter === filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl sm:rounded-2xl opacity-20"></div>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid - Mobile optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 gap-y-8 sm:gap-y-12">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Enhanced Project Card - Mobile optimized */}
                <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 overflow-hidden flex flex-col h-full">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] opacity-30"></div>
                  
                  {/* Status Badge - Mobile optimized */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    {project.status === "completed" ? (
                      <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs">Completed</span>
                      </div>
                    ) : project.status === "in-progress" ? (
                      <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full border border-orange-500/30">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <span className="text-xs">In Progress</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-xs">Live</span>
                      </div>
                    )}
                  </div>

                  {/* Project Header - Mobile optimized */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-gray-400 text-xs sm:text-sm font-medium">{project.subtitle}</p>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced Tech Stack - Mobile optimized */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tech.map((tech, key) => (
                        <span
                          key={key}
                          className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border hover:-translate-y-1 hover:shadow-lg
                            ${getTechColorClasses(project.color)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links - Mobile optimized */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto">
                    {project.links.map((link, key) => (
                      <a
                        key={key}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {link.icon && <span>{link.icon}</span>}
                          {link.label}
                          <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    ))}
                  </div>

                  {/* Project Highlights & Learning Outcomes - Mobile optimized */}
                  {project.highlights && (
                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                      <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 flex items-center gap-2">
                          <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Key Learning Outcomes
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.highlights.map((highlight, index) => (
                            <span 
                              key={index}
                              className="px-2 sm:px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full border border-blue-400/30 hover:scale-105 transition-transform duration-200"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action - Mobile optimized */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-white/10">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-gray-300 font-medium text-sm sm:text-base">More projects coming soon!</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Helper function for tech stack colors
const getTechColorClasses = (color) => {
  const colorMap = {
    blue: "bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,224,0.3)]",
    green: "bg-green-500/20 text-green-300 border-green-500/20 hover:bg-green-500/30 hover:shadow-[0_4px_12px_rgba(34,197,94,0.3)]",
    yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/30 hover:shadow-[0_4px_12px_rgba(234,179,8,0.3)]",
    purple: "bg-purple-500/20 text-purple-300 border-purple-500/20 hover:bg-purple-500/30 hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)]",
    pink: "bg-pink-500/20 text-pink-300 border-pink-500/20 hover:bg-pink-500/30 hover:shadow-[0_4px_12px_rgba(236,72,153,0.3)]",
    orange: "bg-orange-500/20 text-orange-300 border-orange-500/20 hover:bg-orange-500/30 hover:shadow-[0_4px_12px_rgba(249,115,22,0.3)]",
    cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/30 hover:shadow-[0_4px_12px_rgba(6,182,212,0.3)]",
  };
  return colorMap[color] || colorMap.blue;
};

// Enhanced Project Data
const projectData = [
  {
    title: "Cruz Landscaping",
    subtitle: "Professional Business Website",
    icon: "🌿",
    description: "A professional landscaping website for Cruz Landscaping featuring comprehensive service descriptions, interactive image galleries, seasonal showcases, contact forms, and modern responsive design optimized for all devices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Webhooks", "Image Optimization", "Contact Forms"],
    color: "green",
    category: "web",
    status: "completed",
    links: [
      {
        label: "View Website",
        url: "https://cruzlandscaping.netlify.app/",
        icon: "🌐"
      },
    ],
    highlights: [
      "Responsive Design",
      "Modern UI/UX",
      "Performance Optimization",
      "Contact Integration"
    ]
  },
  {
    title: "1maginary.Online",
    subtitle: "Full-Stack Android Application",
    icon: "📻",
    description: "A full-stack Android application integrated with 1maginary.fm, featuring live radio streaming, real-time chat, user engagement tools like XP and pinned messages, and seamless background audio playback.",
    tech: ["Java", "Android Development", "Firebase", "REST API", "Real-time Chat"],
    color: "purple",
    category: "mobile",
    status: "completed",
    links: [
      {
        label: "Private Repo",
        url: "https://github.com/dcruz-nc",
        icon: "🔒"
      },
    ],
    highlights: [
      "Full-Stack Development",
      "Real-time Features",
      "Mobile App Architecture"
    ]
  },
  {
    title: "VoyagerAI",
    subtitle: "AI-Powered Car Rental Platform",
    icon: "🚐",
    description: "A responsive car rental website that integrates OpenAI to provide AI-powered car recommendations and interactive chatbot features for users with intelligent matching algorithms.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB", "OpenAI API", "BEM Methodology"],
    color: "blue",
    category: ["ai", "web"],
    status: "in-progress",
    links: [
      {
        label: "View Project",
        url: "https://voyagerai2.onrender.com/",
        icon: "🚀"
      },
    ],
    highlights: [
      "AI Integration",
      "OpenAI API",
      "Modern Web Stack"
    ]
  },
  {
    title: "GraveMan",
    subtitle: "2D Platform Adventure",
    icon: "🎲",
    description: "A web-based 2D platform game where your objective is to reach the end while dodging spooky enemies with smooth animations and engaging gameplay mechanics.",
    tech: ["HTML5", "CSS3", "JavaScript", "Game Physics", "Sprite Animations", "Level Design"],
    color: "pink",
    category: "game",
    status: "completed",
    links: [
      {
        label: "Play Game",
        url: "https://gravemangame.netlify.app/",
        icon: "🎮"
      },
    ],
    highlights: [
      "Game Development",
      "Physics Engine",
      "Sprite Animations"
    ]
  },

];

