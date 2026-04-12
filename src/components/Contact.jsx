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
    <section
      id="contact"
      className="bg-white dark:bg-black text-black dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Contact
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Have a project in mind or need a developer for your team? Let’s build something impactful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Let’s Work Together
              </h3>

              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m currently open to freelance and full-time opportunities.
                I specialize in .NET backend systems, APIs, and React apps.
              </p>
            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
                <FaEnvelope className="text-green-400" />
                <a href="mailto:umarfarooq53067@gmail.com" className="text-sm">
                  umarfarooq53067@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
                <FaPhone className="text-green-400" />
                <span className="text-sm">+92-308-9184744</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
                <FaMapMarkedAlt className="text-green-400" />
                <span className="text-sm">Lahore, Pakistan</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg bg-white dark:bg-black border"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg bg-white dark:bg-black border"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full p-3 rounded-lg bg-white dark:bg-black border"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 
                text-white font-semibold py-3 rounded-full"
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