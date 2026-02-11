import { useState } from "react";
import { Mail, Phone, MessageCircle, Instagram, Check, X } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show notification
    setShowNotification(true);

    // Clear form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 300);

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center px-4 sm:px-8">
      <div className=" w-full grid md:grid-cols-[1fr_1.2fr] gap-8 bg-white rounded-3xl shadow-2xl shadow-indigo-900/10 overflow-hidden">
        {/* Left Side - Contact Information */}
        <div className="bg-gradient-to-br from-indigo-800 to-indigo-600 p-8 sm:p-12 text-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          

          <div className="relative z-10">
            {/* Logo Section */}
            <div className="mb-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-2 font-serif">
                UniAid
              </h2>
              <p className="text-indigo-100 text-lg">Support Center</p>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:translate-x-1 group">
                <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                  <Mail className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider mb-1 text-indigo-100 font-semibold">
                    Email
                  </h3>
                  <a
                    href="mailto:support@uniaid.org"
                    className="text-white hover:text-amber-200 transition-colors"
                  >
                    support@uniaid.org
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:translate-x-1 group">
                <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider mb-1 text-indigo-100 font-semibold">
                    Phone
                  </h3>
                  <a
                    href="tel:+18001234567"
                    className="text-white hover:text-amber-200 transition-colors"
                  >
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:translate-x-1 group">
                <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                  <MessageCircle className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider mb-1 text-indigo-100 font-semibold">
                    Telegram
                  </h3>
                  <a
                    href="https://t.me/uniaid_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-200 transition-colors"
                  >
                    @uniaid_support
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:translate-x-1 group">
                <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-400/30">
                  <Instagram className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider mb-1 text-indigo-100 font-semibold">
                    Instagram
                  </h3>
                  <a
                    href="https://instagram.com/uniaid.global"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-200 transition-colors flex items-center gap-2"
                  >
                    @uniaid.global
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-8 sm:p-12">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-2 font-serif">
              Get in Touch
            </h1>
            <p className="text-gray-600">
              Have questions about scholarships? We&apos;re here to help!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-100 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-300 focus:ring-4 focus:ring-indigo-600/10"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-100 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-300 focus:ring-4 focus:ring-indigo-600/10"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Scholarship inquiry"
                className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-100 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-300 focus:ring-4 focus:ring-indigo-600/10"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us how we can help you..."
                className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-100 rounded-xl focus:outline-none focus:border-indigo-600 focus:bg-white transition-all duration-300 resize-y focus:ring-4 focus:ring-indigo-600/10"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-700 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-indigo-800 hover:to-indigo-700 transition-all duration-300 uppercase tracking-wide text-sm hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Notification */}
      <div
        className={`fixed top-8 right-8 bg-white rounded-2xl shadow-2xl flex items-center gap-4 p-5 border-l-4 border-indigo-500 min-w-[320px] transition-all duration-500 z-50 ${
          showNotification
            ? "translate-x-0 opacity-100"
            : "translate-x-[500px] opacity-0"
        }`}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
          <Check className="w-6 h-6 text-white stroke-[3]" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-0.5">Message Sent!</h4>
          <p className="text-sm text-gray-600">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={closeNotification}
          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
