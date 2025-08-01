export const SocialLinks = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Email', href: 'mailto:' }
  ];

  return (
    <section className="mt-6">
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-notebook-text no-underline link-hover text-sm"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};