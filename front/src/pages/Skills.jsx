import skillCategories from "../data/skills.json";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-[var(--luxury-black)] dark:text-[var(--pearl-white)]">
            Professional Skills
          </h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Combining cutting-edge AI prompt engineering with robust full-stack
            development capabilities to create innovative digital solutions.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[var(--pearl-white)] dark:bg-[var(--luxury-black)] p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-playfair font-semibold mb-6 text-center text-[var(--emerald-green)]">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-[var(--luxury-black)] dark:text-[var(--pearl-white)]">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-[var(--emerald-green)] to-[var(--gold)] transition-all"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

