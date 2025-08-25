import { useLocation } from "react-router-dom";

const ViewProject = () => {
  const location = useLocation();
  const project = location?.state?.project;

  if (!project) {
    return (
      <div className="py-20 text-center text-[var(--luxury-black)] dark:text-[var(--pearl-white)]">
        <p>No project details found.</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16 p-8 rounded-lg shadow-xl bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)] border border-gray-200 dark:border-gray-700">
          {/* Title & Importance */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-[var(--luxury-black)] dark:text-[var(--pearl-white)]">
              {project.title}
            </h2>
            <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-6 rounded"></div>
            <p className="text-lg font-medium text-[var(--emerald-green)] dark:text-[var(--gold)] mb-4">
              {project.importance}
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-8 flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--emerald-green)] dark:text-[var(--gold)]">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {project.tech.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex items-center justify-center px-4 py-3 rounded-lg shadow-md 
                   bg-[var(--luxury-black)] text-[var(--pearl-white)] 
                   border border-[var(--pearl-white)] font-medium 
                   hover:bg-[var(--gold)] hover:text-[var(--luxury-black)] hover:border-[var(--gold)]
                   transition-colors duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Link */}
          <div className="flex justify-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[var(--gold)] text-[var(--gold)] font-medium rounded-sm hover:bg-[var(--gold)] hover:text-[var(--luxury-black)] transition"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProject;
