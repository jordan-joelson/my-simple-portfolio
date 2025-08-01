import { ReactNode } from 'react';

interface PortfolioContainerProps {
  children: ReactNode;
}

export const PortfolioContainer = ({ children }: PortfolioContainerProps) => {
  return (
    <div className="min-h-screen bg-notebook-bg flex items-center justify-center p-4">
      <div className="w-full max-w-[600px] sm:max-w-[90vw] border border-notebook-border p-4 sm:p-8 bg-notebook-bg flex flex-col justify-between min-h-[90vh]">
        {children}
      </div>
    </div>
  );
};