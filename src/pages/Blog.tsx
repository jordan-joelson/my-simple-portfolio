import { PortfolioContainer } from '@/components/PortfolioContainer';
import { PortfolioHero } from '@/components/PortfolioHeader';
import { PortfolioFooter } from '@/components/PortfolioFooter';

const Blog = () => {
  const posts = [
    {
      title: "My First Blog",
      date: "2025-01-15",
      excerpt: "Welcome to my blog where I'll share thoughts on design, development, and building meaningful products..."
    }
  ];

  return (
    <PortfolioContainer>
      <div className="flex-1 flex flex-col">
        <PortfolioHero />
        
        <section className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl text-notebook-text font-body">All Blog Posts</h1>
            <a 
              href="/" 
              className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all text-sm"
            >
              ← Back home
            </a>
          </div>
          
          <div className="space-y-4">
            {posts.map((post, index) => (
              <article key={index} className="border-b border-notebook-border pb-3 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h2 className="text-lg text-notebook-text font-body">
                    <a 
                      href="#" 
                      className="no-underline border-b border-dotted border-current hover:border-solid transition-all"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <time className="text-sm text-notebook-text opacity-70 font-body">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <p className="text-sm text-notebook-text opacity-80 font-body">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <PortfolioFooter />
    </PortfolioContainer>
  );
};

export default Blog;