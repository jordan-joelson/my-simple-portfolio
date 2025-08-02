import { useState } from 'react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="mt-6">
      <h3 className="text-base mb-3 text-notebook-text font-body">Subscribe to newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="coming soon..."
          className="flex-1 px-3 py-1.5 border border-notebook-border bg-notebook-bg text-notebook-text text-sm focus:outline-none focus:ring-1 focus:ring-notebook-border opacity-60"
          disabled
        />
        <button
          type="submit"
          className="px-4 py-1.5 bg-notebook-text text-notebook-bg border border-notebook-border text-sm opacity-60 cursor-not-allowed"
          disabled
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};