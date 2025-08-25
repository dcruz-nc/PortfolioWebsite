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
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12">
            {/* Contact Form */}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-6 text-white">
                💬 Send Message
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
                    className="w-full bg-white/10 border-white/20 border rounded-lg px-4 py-3 text-white placeholder-white/70 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
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
                    className="w-full bg-white/10 border-white/20 border rounded-lg px-4 py-3 text-white placeholder-white/70 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
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
                    className="w-full bg-white/10 border-white/20 border rounded-lg px-4 py-3 text-white placeholder-white/70 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] resize-none"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-6 text-white">
                💻 Contact Information
              </h3>
              
              <div className="space-y-5">
                {/* LinkedIn */}
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                  <span className="text-blue-400 text-2xl">🔗</span>
                  <a
                    href="https://www.linkedin.com/in/david-cruz-b29683258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                  <span className="text-gray-400 text-2xl">🐙</span>
                  <a
                    href="https://github.com/dcruz-nc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    GitHub Repository
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                  <span className="text-green-400 text-2xl">✉️</span>
                  <a
                    href="mailto:dcruz.nc@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    dcruz.nc@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                  <span className="text-purple-400 text-2xl">📱</span>
                  <a
                    href="tel:7042530889"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    (704) 253-0889
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-3">Let's Connect!</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
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
