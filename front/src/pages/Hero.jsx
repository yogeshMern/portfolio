import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-20 bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="mb-2 font-semibold flex items-center text-[var(--gold)]">
              <span className="w-8 h-px bg-[var(--gold)] mr-2"></span>
              WELCOME TO MY PORTFOLIO
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-[var(--luxury-black)] dark:text-[var(--pearl-white)]">
              Prompt Engineer &<br />
              <span className="text-[var(--emerald-green)]">
                MERN Stack
              </span>{" "}
              Developer
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              Creating intelligent solutions at the intersection of AI prompting
              and full-stack development. Based in Dubai, delivering world-class
              digital experiences.
            </p>

            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-[var(--emerald-green)] text-[var(--pearl-white)] font-medium rounded-sm hover:bg-opacity-90 transition-all shadow-md"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-[var(--gold)] text-[var(--gold)] font-medium rounded-sm 
                  hover:bg-[var(--gold)] hover:text-[var(--luxury-black)] transition-all"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Visual / Decorative */}
          <div className="md:w-2/5 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-[var(--emerald-green)] to-[var(--gold)]">
                <img
                  src="/chatgpt.jpg"
                  alt="Hero Visual"
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[var(--gold)] rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-[var(--emerald-green)] rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
