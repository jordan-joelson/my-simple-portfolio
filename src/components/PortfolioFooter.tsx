import { ThemeToggle } from './ThemeToggle';

export const PortfolioFooter = () => {
  return (
    <footer className="flex justify-between items-center text-sm">
      <p className="text-notebook-text font-body">
        © 2025 Jordan Joelson — <a 
          href="/rss.xml" 
          className="text-notebook-text no-underline border-b border-dashed border-current"
        >
          RSS
        </a>
      </p>
      <ThemeToggle />
    </footer>
  );
};