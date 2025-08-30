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
        body: JSON.stringify({
          ...formData,
          webhookUrl: import.meta.env.VITE_DISCORD_WEBHOOK
        }),
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

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background decorative elements - Mobile optimized */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header - Mobile optimized */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-400/80 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase mb-3 sm:mb-4 animate-fade-in">
              Let's work together
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-4 sm:mt-6 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Information Section - Mobile optimized */}
            <div className="lg:col-span-1 space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Personal Introduction - Mobile optimized */}
              <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-32 h-40 sm:w-40 sm:h-59 mb-4 mx-auto overflow-hidden rounded-xl sm:rounded-2xl border-2 border-blue-400/30 shadow-lg">
                    <img 
                      src="/hsprofile.webp" 
                      alt="David Cruz - Full-Stack Developer" 
                      className="w-full h-full object-contain"
                      style={{ 
                        imageRendering: 'high-quality'
                      }}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">David Cruz</h3>
                  <p className="text-blue-400 font-medium text-sm sm:text-base">Full-Stack Developer</p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Passionate about creating innovative solutions and always eager to take on new challenges. Let's discuss how we can work together!
                </p>
                
                {/* Availability Status - Mobile optimized */}
                <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/20">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                      Available for Opportunities
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs text-center">
                    Currently accepting new projects and full-time opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form - Mobile optimized */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2 sm:gap-3">
                    <svg className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Send A Message
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">I'll get back to you within 24 hours</p>
                </div>

                {/* Success/Error Messages - Mobile optimized */}
                {formStatus.isSubmitted && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500/20 border border-green-500/30 rounded-xl sm:rounded-2xl text-green-300 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm sm:text-base">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </div>
                )}

                {formStatus.error && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500/20 border border-red-500/30 rounded-xl sm:rounded-2xl text-red-300 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm sm:text-base">{formStatus.error}</span>
                    </div>
                  </div>
                )}

                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-blue-400 text-xs sm:text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        placeholder="Enter your full name"
                        className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:shadow-lg resize-none text-sm sm:text-base ${
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
                      <label htmlFor="email" className="block text-blue-400 text-xs sm:text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        placeholder="your.email@example.com"
                        className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:shadow-lg resize-none text-sm sm:text-base ${
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
                    <label htmlFor="subject" className="block text-blue-400 text-xs sm:text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      placeholder="What's this about?"
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:shadow-lg resize-none text-sm sm:text-base ${
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
                    <label htmlFor="message" className="block text-blue-400 text-xs sm:text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      className={`w-full bg-white/10 backdrop-blur-sm border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:shadow-lg resize-none text-sm sm:text-base ${
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
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {formStatus.isSubmitting ? (
                        <>
                          <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span className="text-sm sm:text-base">Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span className="text-sm sm:text-base">Send Message</span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Contact Info - Mobile optimized */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-white/10">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300 font-medium text-sm sm:text-base">Response time: Usually within 24 hours</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
