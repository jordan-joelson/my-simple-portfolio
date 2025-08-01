import { ThemeToggle } from './ThemeToggle';

export const PortfolioFooter = () => {
  return (
    <footer className="flex justify-between items-center text-sm">
      <p className="text-notebook-text font-body">
        © 2025 Jordan Joelson — <a 
          href="#" 
          className="text-notebook-text no-underline link-hover"
        >
          RSS
        </a>
      </p>
      <ThemeToggle />
    </footer>
  );
};