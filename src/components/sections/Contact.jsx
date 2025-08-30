import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, isSubmitted: false }));
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: "Something went wrong. Please try again." 
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "dcruz.nc@example.com",
      link: "mailto:dcruz.nc@example.com",
      color: "blue"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "David Cruz",
      link: "https://www.linkedin.com/in/david-cruz-b29683258/",
      color: "cyan"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "dcruz-nc",
      link: "https://github.com/dcruz-nc",
      color: "purple"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (704) 253-0889",
      link: "tel:+17042530889",
      color: "green"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <p className="text-blue-400/80 text-lg font-medium tracking-wider uppercase mb-4 animate-fade-in">
              Let's work together
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-6 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Section */}
            <div className="lg:col-span-1 space-y-8">
              {/* Personal Introduction */}
              <div className="rounded-3xl p-8 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    👨‍💻
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">David Cruz</h3>
                  <p className="text-blue-400 font-medium">Full-Stack Developer</p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  Passionate about creating innovative solutions and always eager to take on new challenges. Let's discuss how we can work together!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? "_blank" : "_self"}
                    rel={method.link.startsWith('http') ? "noopener noreferrer" : ""}
                    className="group block rounded-2xl p-6 bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                        <p className="text-gray-300 text-sm">{method.value}</p>
                      </div>
                      <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="rounded-2xl p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">
                    Available for Opportunities
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Currently accepting new projects and full-time opportunities
                </p>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl p-10 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Send A Message
                  </h3>
                  <p className="text-gray-400">I'll get back to you within 24 hours</p>
                </div>

                {/* Success/Error Messages */}
                {formStatus.isSubmitted && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-300 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  </div>
                )}

                {formStatus.error && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-300 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formStatus.error}
                    </div>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-blue-400 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        placeholder="Enter your full name"
                        className={`w-full bg-white/10 backdrop-blur-sm border rounded-2xl px-5 py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:shadow-lg resize-none ${
                          focusedField === 'name' 
                            ? 'border-blue-400 bg-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block text-blue-400 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        placeholder="your.email@example.com"
                        className={`w-full bg-white/10 backdrop-blur-sm border rounded-2xl px-5 py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:shadow-lg resize-none ${
                          focusedField === 'email' 
                            ? 'border-blue-400 bg-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                            : 'border-white/20 hover:border-white/30'
                        }`}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="subject" className="block text-blue-400 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      placeholder="What's this about?"
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-2xl px-5 py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:shadow-lg resize-none ${
                        focusedField === 'subject' 
                          ? 'border-blue-400 bg-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-blue-400 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-2xl px-5 py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:shadow-lg resize-none ${
                        focusedField === 'message' 
                          ? 'border-blue-400 bg-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {formStatus.isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-white/10">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300 font-medium">Response time: Usually within 24 hours</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
