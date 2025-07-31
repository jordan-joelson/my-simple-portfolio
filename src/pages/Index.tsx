import { PortfolioContainer } from '@/components/PortfolioContainer';
import { PortfolioHeader } from '@/components/PortfolioHeader';

const Index = () => {
  return (
    <PortfolioContainer>
      <PortfolioHeader />
      <main>
        <p className="text-notebook-text font-body leading-relaxed">
          Hello — this is my minimalist portfolio. Built like a notebook. Clean and focused.
        </p>
      </main>
    </PortfolioContainer>
  );
};

export default Index;
