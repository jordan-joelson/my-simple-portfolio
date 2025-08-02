import { PortfolioContainer } from '@/components/PortfolioContainer';

const NotFound = () => {
  return (
    <PortfolioContainer>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="font-handwritten text-4xl lg:text-5xl text-handwritten mb-4">
          Not Found
        </h1>
        <p className="text-notebook-text font-body mb-6">
          This page doesn't exist.
        </p>
        <a 
          href="/" 
          className="text-notebook-text no-underline border-b border-dotted border-current hover:border-solid transition-all font-body"
        >
          ← Back home
        </a>
      </div>
    </PortfolioContainer>
  );
};

export default NotFound;
