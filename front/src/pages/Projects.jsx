import projects from "../data/projects.json";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const sendProjects = (project) => {
    navigate("/viewproject", { state: { project } });
  };

  return (
    <section
      id="projects"
      className="py-20 bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-[var(--luxury-black)] dark:text-[var(--pearl-white)]">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A selection of projects that showcase my expertise in AI prompting
            and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)] p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-playfair font-semibold mb-3 text-[var(--emerald-green)] group-hover:text-[var(--gold)] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium px-2 py-1 rounded bg-gradient-to-r from-[var(--emerald-green)] to-[var(--gold)] text-[var(--pearl-white)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                onClick={() => sendProjects(project)}
                className="inline-block px-4 py-2 border border-[var(--gold)] text-[var(--gold)] font-medium rounded-sm hover:bg-[var(--gold)] hover:text-[var(--luxury-black)] transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
