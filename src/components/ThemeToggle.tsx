import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const hasManualPreference = localStorage.getItem('themeManuallySet') === 'true';
    
    if (hasManualPreference && savedTheme) {
      // Use saved manual preference
      const shouldBeDark = savedTheme === 'dark';
      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      }
    } else {
      // Auto-detect based on time (8 PM - 6 AM = night mode)
      const now = new Date();
      const hour = now.getHours();
      const isNightTime = hour >= 20 || hour < 6;
      
      setIsDark(isNightTime);
      if (isNightTime) {
        document.documentElement.classList.add('dark');
      }
      // Save the auto-detected theme
      localStorage.setItem('theme', isNightTime ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Mark as manually set to override auto-detection
    localStorage.setItem('themeManuallySet', 'true');
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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