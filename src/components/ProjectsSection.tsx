export const ProjectsSection = () => {
  const projects = [
    {
      name: "Microvault",
      description: "Collateralized crypto loans. Borrow and lend securely.",
      href: "https://github.com/veermshah/MicroVault"
    },
    {
      name: "Realvo",
      description: "REIT forecasting, backed by research and real-world data.",
      href: "/Realvo.pdf"
    },
    {
      name: "Jupiter", 
      description: "Helping students find meaningful ways to get involved on campus.",
      href: "https://github.com/UTDNebula/jupiter"
    }
  ];

  return (
    <section className="mt-6">
      <h2 className="text-lg mb-2 text-notebook-text font-body">Recent Projects</h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index}>
            <a 
              href={project.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all"
            >
              {project.name}
            </a>
            {project.description && (
              <p className="text-notebook-text text-sm ml-4 mt-1 leading-relaxed">
                – {project.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};