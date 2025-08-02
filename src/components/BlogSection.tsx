export const BlogSection = () => {
  const posts = [
    "How Simplicity Wins",
    "Rethinking Portfolio Design", 
    "Tools I Actually Use"
  ];

  return (
    <section className="mt-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg text-notebook-text font-body">Recent Blog Posts</h2>
        <a 
          href="/blog" 
          className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all text-sm"
        >
          View all →
        </a>
      </div>
      <ul className="list-none p-0">
        {posts.map((post, index) => (
          <li key={index} className="mb-1.5">
            <a 
              href="#" 
              className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all"
            >
              {post}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};