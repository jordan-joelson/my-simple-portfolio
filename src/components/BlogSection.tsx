import { Link } from "react-router-dom";

export const BlogSection = () => {
  const posts = [
    "My First Blog"
  ];

  return (
    <section className="mt-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg text-notebook-text font-body">Recent Blog Posts</h2>
        <Link 
          to="/blog" 
          className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all text-sm"
        >
          View all →
        </Link>
      </div>
      <ul className="list-none p-0">
        {posts.map((post, index) => (
          <li key={index} className="mb-1.5">
            <Link 
              to="/blog/my-first-blog" 
              className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all leading-tight"
            >
              {post}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};