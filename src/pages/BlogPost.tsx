import { PortfolioContainer } from '@/components/PortfolioContainer';
import { PortfolioHero } from '@/components/PortfolioHeader';
import { PortfolioFooter } from '@/components/PortfolioFooter';

const BlogPost = () => {
  return (
    <PortfolioContainer>
      <div className="flex-1 flex flex-col">
        <PortfolioHero />
        
        <section className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl text-notebook-text font-body">My First Blog</h1>
            <a 
              href="/blog" 
              className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all text-sm"
            >
              ← Back to blog
            </a>
          </div>
          
          <div className="text-notebook-text font-body">
            nothing here yet.......
          </div>
        </section>
      </div>
      <PortfolioFooter />
    </PortfolioContainer>
  );
};

export default BlogPost;