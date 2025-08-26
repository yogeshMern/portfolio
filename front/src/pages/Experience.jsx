
import experiences from "../data/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[var(--luxury-black)]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-[var(--emerald-green)] mx-auto mb-4 rounded"></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            A journey of continuous growth, learning, and impactful
            contributions in the world of development and design.
          </p>
        </div>

        {/* Professional Experience Timeline */}
        <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 text-[var(--emerald-green)] text-center">
          Professional Experience
        </h3>
        <div className="relative border-l border-gray-600 max-w-3xl mx-auto mb-16">
          {experiences.professionalExperience.map((exp, index) => (
            <div
              key={index}
              className="mb-12 ml-6 relative border border-white rounded-lg"
            >
              {/* Dot */}
              <div className="absolute w-4 h-4 bg-[var(--gold)] rounded-full mt-2.5 -left-2 border border-white"></div>

              {/* Card */}
              <div className="bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg md:text-xl font-semibold text-[var(--emerald-green)]">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {exp.company} • {exp.period} ({exp.duration})
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Production Projects */}
        <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 text-[var(--emerald-green)] text-center">
          Production Projects
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-8 text-base md:text-lg">
          I have worked on multiple projects in both professional and personal
          capacities, applying the MERN stack and modern technologies to deliver
          impactful and scalable solutions. Among these,{" "}
          <span className="font-semibold text-[var(--gold)]">Praesentia</span>{" "}
          (AI-Powered HRMS) and{" "}
          <span className="font-semibold text-[var(--gold)]">Mark Me</span>{" "}
          (HRMS) stand out as my biggest professional contributions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16">
          {experiences.productionProjects.map((project, index) => (
            <div
              key={index}
              className="border border-white bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-lg font-semibold text-[var(--emerald-green)] mb-2">
                {project.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-white text-xs md:text-sm bg-[var(--emerald-green)]/10 text-[var(--emerald-green)] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Projects */}
        <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 text-[var(--emerald-green)] text-center">
          Personal Projects
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-8 text-base md:text-lg">
          I am passionate about building my career in the{" "}
          <span className="font-semibold text-[var(--gold)]">AI era</span>, as I
          believe it offers transformative capabilities that can redefine
          industries, enhance user experiences, and create more intelligent and
          efficient digital solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {experiences.personalProjects.map((project, index) => (
            <div
              key={index}
              className="border border-white bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-lg font-semibold text-[var(--emerald-green)] mb-2">
                {project.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-white text-xs md:text-sm bg-[var(--emerald-green)]/10 text-[var(--emerald-green)] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
