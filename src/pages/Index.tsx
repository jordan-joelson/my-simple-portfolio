import { PortfolioContainer } from '@/components/PortfolioContainer';
import { PortfolioHero } from '@/components/PortfolioHeader';
import { NewsletterSection } from '@/components/NewsletterSection';
import { SocialLinks } from '@/components/SocialLinks';
import { AboutSection } from '@/components/AboutSection';
import { BlogSection } from '@/components/BlogSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { PortfolioFooter } from '@/components/PortfolioFooter';

const Index = () => {
  return (
    <PortfolioContainer>
      <div className="flex-1 flex flex-col">
        <PortfolioHero />
        <NewsletterSection />
        <SocialLinks />
        <AboutSection />
        <div className="mt-6">
          <BlogSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
      <PortfolioFooter />
    </PortfolioContainer>
  );
};

export default Index;
