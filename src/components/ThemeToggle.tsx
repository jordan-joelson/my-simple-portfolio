import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Always auto-detect based on time (8 PM - 6 AM = night mode)
    const now = new Date();
    const hour = now.getHours();
    const isNightTime = hour >= 20 || hour < 6;
    
    setIsDark(isNightTime);
    if (isNightTime) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-toggle-bg text-toggle-text border-none text-xl cursor-pointer font-body"
      aria-label="Toggle theme"
    >
      {isDark ? '🌙' : '🌞'}
    </button>
  );
};