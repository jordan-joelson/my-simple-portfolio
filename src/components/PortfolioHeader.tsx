import { Link } from 'react-router-dom';

export const PortfolioHero = () => {
  return (
    <header className="text-left">
      <h1 className="font-handwritten text-4xl lg:text-5xl text-handwritten m-0">
        <Link to="/" className="no-underline text-handwritten">
          Jordan Joelson
        </Link>
      </h1>
      <p className="text-base mt-1 italic text-notebook-text">
        Minimal thoughts, real work, clean design.
      </p>
    </header>
  );
};