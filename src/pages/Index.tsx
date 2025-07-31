import { PortfolioContainer } from '@/components/PortfolioContainer';
import { PortfolioHero } from '@/components/PortfolioHeader';
import { AboutSection } from '@/components/AboutSection';
import { BlogSection } from '@/components/BlogSection';
import { PortfolioFooter } from '@/components/PortfolioFooter';

const Index = () => {
  return (
    <PortfolioContainer>
      <PortfolioHero />
      <div className="flex-1 flex flex-col justify-center space-y-4">
        <AboutSection />
        <BlogSection />
      </div>
      <PortfolioFooter />
    </PortfolioContainer>
  );
};

export default Index;
