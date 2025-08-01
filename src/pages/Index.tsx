import { PortfolioContainer } from '@/components/PortfolioContainer';
import { PortfolioHero } from '@/components/PortfolioHeader';
import { NewsletterSection } from '@/components/NewsletterSection';
import { SocialLinks } from '@/components/SocialLinks';
import { BlogSection } from '@/components/BlogSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { PortfolioFooter } from '@/components/PortfolioFooter';

const Index = () => {
  return (
    <PortfolioContainer>
      <div className="flex-1 flex flex-col">
        <PortfolioHero />
        <NewsletterSection />
        <SocialLinks />
        <div className="mt-8">
          <BlogSection />
          <ProjectsSection />
        </div>
      </div>
      <PortfolioFooter />
    </PortfolioContainer>
  );
};

export default Index;
