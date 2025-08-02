export const ContactSection = () => {
  return (
    <section className="mt-6 pt-4 pb-4 border-t border-b border-notebook-border">
      <h2 className="text-lg mb-2 text-notebook-text font-body">Let's chat ☕</h2>
      <p className="text-notebook-text font-body leading-relaxed mb-4">
        Bring your ideas to life. Always excited to collaborate on interesting projects.
      </p>
      <div className="flex items-center gap-4">
        <a 
          href="mailto:hello@jordanjoelson.com" 
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-notebook-border text-notebook-text no-underline hover:bg-notebook-text hover:text-notebook-bg transition-colors text-sm"
        >
          Email me
        </a>
        <span className="text-notebook-text opacity-40">or</span>
        <a 
          href="https://twitter.com/jordanjoelson" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all text-sm"
        >
          @jordanjoelson
        </a>
      </div>
    </section>
  );
};