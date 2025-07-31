import { PortfolioContainer } from '@/components/PortfolioContainer';
import { PortfolioHero } from '@/components/PortfolioHeader';
import { NewsletterSection } from '@/components/NewsletterSection';
import { BlogSection } from '@/components/BlogSection';
import { PortfolioFooter } from '@/components/PortfolioFooter';

const Index = () => {
  return (
    <PortfolioContainer>
      <div className="flex-1 flex flex-col">
        <PortfolioHero />
        <NewsletterSection />
        <div className="mt-8">
          <BlogSection />
        </div>
      </div>
      <PortfolioFooter />
    </PortfolioContainer>
  );
};

export default Index;
