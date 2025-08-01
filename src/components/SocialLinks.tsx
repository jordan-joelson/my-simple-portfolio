export const SocialLinks = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jordanjoelson/' },
    { name: 'GitHub', href: 'https://github.com/jordanjoelson' },
    { name: 'Instagram', href: 'https://www.instagram.com/jordanjoelson/' },
    { name: 'Email', href: 'mailto:jordan@jordanjoelson.com' }
  ];

  return (
    <section className="mt-6">
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all text-sm"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};