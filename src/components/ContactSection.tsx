export const ContactSection = () => {
  return (
    <section className="mt-6">
      <h2 className="text-lg mb-2 text-notebook-text font-body">Would love to chat</h2>
      <p className="text-notebook-text font-body leading-relaxed mb-3">
        Always open to interesting conversations about design, code, or life in general.
      </p>
      <div className="flex flex-col gap-1">
        <a 
          href="mailto:hello@jordanjoelson.com" 
          className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all text-sm"
        >
          hello@jordanjoelson.com
        </a>
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