import { ThemeToggle } from './ThemeToggle';

export const PortfolioHeader = () => {
  return (
    <header className="mb-8">
      <h1 className="font-handwritten text-4xl lg:text-5xl text-handwritten mb-4">
        Jordan Joelson
      </h1>
      <nav className="flex justify-between items-center">
        <div className="flex gap-4">
          <a 
            href="#" 
            className="text-notebook-text no-underline font-medium hover:underline transition-all"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-notebook-text no-underline font-medium hover:underline transition-all"
          >
            Blog
          </a>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};