export const ProjectsSection = () => {
  const projects = [
    "Minimal Design System",
    "Portfolio Template", 
    "Task Management App"
  ];

  return (
    <section className="mt-6">
      <h2 className="text-lg mb-2 text-notebook-text font-body">Recent Projects</h2>
      <ul className="list-none p-0">
        {projects.map((project, index) => (
          <li key={index} className="mb-1.5">
            <a 
              href="#" 
              className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all"
            >
              {project}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};