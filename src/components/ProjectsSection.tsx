export const ProjectsSection = () => {
  const projects = [
    {
      name: "Microvault",
      description: "",
      href: "#"
    },
    {
      name: "Realvo",
      description: "REIT forecasting, backed by research and real-world data.",
      href: "#"
    },
    {
      name: "Jupiter", 
      description: "Helping students find meaningful ways to get involved on campus.",
      href: "#"
    }
  ];

  return (
    <section className="mt-6">
      <h2 className="text-lg mb-2 text-notebook-text font-body">Recent Projects</h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex items-center gap-2">
              <span className="text-notebook-text">→</span>
              <a 
                href={project.href} 
                className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all font-medium"
              >
                {project.name}
              </a>
            </div>
            {project.description && (
              <p className="text-notebook-text text-sm ml-4 mt-1 leading-relaxed">
                {project.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};