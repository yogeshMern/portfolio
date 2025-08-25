import { useState } from "react";
import Axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = contact;

    if (!name || !email || !message) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const response = await Axios.post("https://portfolio-back-ghtt.onrender.com/contact", {
        name,
        email,
        message,
      });

      if (response.status === 201) {
        alert("Message sent successfully ✅");
        setContact({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-[var(--luxury-black)] via-[var(--luxury-black)] to-[var(--emerald-green)] text-[var(--pearl-white)] overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-[var(--gold)] opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[var(--emerald-green)] opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-[var(--pearl-white)]">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-4 rounded"></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
            Let's create something amazing together. Reach out for
            collaborations, freelance projects, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--luxury-black)] text-[var(--pearl-white)] p-10 rounded-xl shadow-2xl space-y-6 border border-[var(--emerald-green)]/50"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-semibold text-[var(--gold)]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contact.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-3 border border-[var(--emerald-green)] bg-[var(--luxury-black)] text-[var(--pearl-white)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-[var(--gold)]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-5 py-3 border border-[var(--emerald-green)] bg-[var(--luxury-black)] text-[var(--pearl-white)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-semibold text-[var(--gold)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={contact.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message"
                className="w-full px-5 py-3 border border-[var(--emerald-green)] bg-[var(--luxury-black)] text-[var(--pearl-white)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-[var(--emerald-green)] text-[var(--pearl-white)] font-semibold rounded-md hover:bg-[var(--gold)] hover:text-[var(--luxury-black)] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[var(--luxury-black)] p-8 rounded-xl shadow-2xl border border-[var(--emerald-green)]/50">
              <h4 className="text-2xl font-semibold mb-4 text-[var(--gold)]">
                Location
              </h4>
              <p className="text-gray-300">Dubai, United Arab Emirates</p>
            </div>

            <div className="bg-[var(--luxury-black)] p-8 rounded-xl shadow-2xl border border-[var(--emerald-green)]/50">
              <h4 className="text-2xl font-semibold mb-4 text-[var(--gold)]">
                Email
              </h4>
              <p className="text-gray-300">contact@example.ae</p>
            </div>

            <div className="bg-[var(--luxury-black)] p-8 rounded-xl shadow-2xl border border-[var(--emerald-green)]/50">
              <h4 className="text-2xl font-semibold mb-4 text-[var(--gold)]">
                Phone
              </h4>
              <p className="text-gray-300">+971 50 123 4567</p>
            </div>

            <div className="bg-[var(--luxury-black)] p-8 rounded-xl shadow-2xl border border-[var(--emerald-green)]/50">
              <h4 className="text-2xl font-semibold mb-4 text-[var(--gold)]">
                Socials
              </h4>
              <div className="flex space-x-6 text-gray-300 text-xl">
                <a
                  href="#"
                  className="hover:text-[var(--emerald-green)] transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-[var(--emerald-green)] transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-[var(--emerald-green)] transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

