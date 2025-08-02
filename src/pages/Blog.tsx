import { PortfolioContainer } from '@/components/PortfolioContainer';
import { PortfolioHero } from '@/components/PortfolioHeader';
import { PortfolioFooter } from '@/components/PortfolioFooter';

const Blog = () => {
  const posts = [
    {
      title: "How Simplicity Wins",
      date: "2024-01-15",
      excerpt: "Why removing features often makes products better..."
    },
    {
      title: "Rethinking Portfolio Design", 
      date: "2024-01-08",
      excerpt: "Moving away from flashy animations to focus on content..."
    },
    {
      title: "Tools I Actually Use",
      date: "2024-01-02",
      excerpt: "A honest look at my daily development workflow..."
    },
    {
      title: "The Notebook Method",
      date: "2023-12-20",
      excerpt: "Why I design interfaces like handwritten notes..."
    },
    {
      title: "Building for Clarity",
      date: "2023-12-12",
      excerpt: "How constraints lead to better design decisions..."
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