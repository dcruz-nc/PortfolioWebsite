import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // send name, email, message directly
    });

    if (response.ok) {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12">
            {/* Contact Form */}
            <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-white">
                💬 Send A Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    placeholder="Name..."
                    className="w-full bg-white/10 backdrop-blur-sm border-white/20 border rounded-xl px-5 py-4 text-white placeholder-white/70 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    placeholder="Email@gmail.com"
                    className="w-full bg-white/10 backdrop-blur-sm border-white/20 border rounded-xl px-5 py-4 text-white placeholder-white/70 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    placeholder="Your Message..."
                    className="w-full bg-white/10 backdrop-blur-sm border-white/20 border rounded-xl px-5 py-4 text-white placeholder-white/70 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] resize-none"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.4)] group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-white">
                💻 Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* LinkedIn */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <span className="text-blue-400 text-2xl group-hover:scale-110 transition-transform duration-300">🔗</span>
                  <a
                    href="https://www.linkedin.com/in/david-cruz-b29683258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <span className="text-gray-400 text-2xl group-hover:scale-110 transition-transform duration-300">🐙</span>
                  <a
                    href="https://github.com/dcruz-nc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                  >
                    GitHub Repository
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <span className="text-green-400 text-2xl group-hover:scale-110 transition-transform duration-300">✉️</span>
                  <a
                    href="mailto:dcruz.nc@gmail.com"
                    className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                  >
                    dcruz.nc@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <span className="text-purple-400 text-2xl group-hover:scale-110 transition-transform duration-300">📱</span>
                  <a
                    href="tel:7042530889"
                    className="text-gray-200 hover:text-white transition-colors duration-300 font-medium"
                  >
                    (704) 253-0889
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4 text-lg">Let's Connect!</h4>
                <p className="text-gray-200 text-base leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
