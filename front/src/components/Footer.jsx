import { Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--luxury-black)] text-[var(--pearl-white)] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Branding */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <span className="text-[var(--emerald-green)]">Portfolio</span>
              <span className="text-[var(--gold)]">.</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Prompt Engineer and MERN Stack Developer creating innovative
              digital solutions in Dubai. Combining AI expertise with full-stack
              development for exceptional results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[var(--emerald-green)]/40 flex items-center justify-center text-gray-400 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              >
                <Linkedin className="fab fa-linkedin-in" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[var(--emerald-green)]/40 flex items-center justify-center text-gray-400 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              >
                <Github className="fab fa-github" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[var(--emerald-green)]/40 flex items-center justify-center text-gray-400 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              >
                <Twitter className="fab fa-twitter" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--pearl-white)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[var(--gold)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--pearl-white)]">
              Contact Info
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[var(--gold)] mt-1 mr-3"></i>
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-[var(--gold)] mt-1 mr-3"></i>
                <span>contact@example.ae</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-[var(--gold)] mt-1 mr-3"></i>
                <span>+971 50 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--emerald-green)]/30 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} All Rights Reserved. Designed with{" "}
            <span className="text-[var(--gold)]">❤️</span> in Dubai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
