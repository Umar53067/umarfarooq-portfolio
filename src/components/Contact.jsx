import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ui4nqco",
        "template_m8ozurj",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "PfX-5T9_dvZ7LKElw"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
            Contact<span className="text-accent">.</span>
          </h2>
          <div className="w-20 h-1 bg-white/20 rounded-full mb-6 mx-auto md:mx-0"></div>
          <p className="text-gray-400 text-lg max-w-2xl text-center md:text-left mx-auto md:mx-0">
            Have a project in mind or need a developer for your team? Let’s build something impactful.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-4">
                Let’s Work Together
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                I’m currently open to freelance and full-time opportunities.
                I specialize in .NET backend systems, APIs, and React apps.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-5 p-5 rounded-2xl glass border border-white/5 group hover:bg-white/5 transition-colors">
                <div className="p-3 bg-white/5 rounded-full text-accent group-hover:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <a href="mailto:umarfarooq53067@gmail.com" className="text-base text-gray-300 hover:text-white transition-colors">
                  umarfarooq53067@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl glass border border-white/5 group hover:bg-white/5 transition-colors">
                <div className="p-3 bg-white/5 rounded-full text-accent group-hover:scale-110 transition-transform">
                  <FaPhone size={20} />
                </div>
                <span className="text-base text-gray-300">+92-308-9184744</span>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl glass border border-white/5 group hover:bg-white/5 transition-colors">
                <div className="p-3 bg-white/5 rounded-full text-accent group-hover:scale-110 transition-transform">
                  <FaMapMarkedAlt size={20} />
                </div>
                <span className="text-base text-gray-300">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="glass-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-4 rounded-xl bg-background/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full p-4 rounded-xl bg-background/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-xl bg-background/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-70 disabled:hover:scale-100"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;