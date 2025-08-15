import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK;

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      content: `**New Contact Form Submission**\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Message:** ${formData.message}`,
    };

    fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message Sent!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 md:px-10 lg:px-12"
    >
      <RevealOnScroll>
        <div className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                placeholder="Name..."
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
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
                placeholder="example@gmail.com"
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
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
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-white/70 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 sm:py-4 px-6 rounded font-semibold transition shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
