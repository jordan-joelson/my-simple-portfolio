import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const applyTheme = (dark: boolean) => {
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  const checkAndApplyTimeBasedTheme = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    // Check if it's exactly 8 PM or 6 AM (within the current minute)
    if ((hour === 20 && minute === 0) || (hour === 6 && minute === 0)) {
      const shouldBeDark = hour === 20;
      applyTheme(shouldBeDark);
      // Clear manual preference flag so time-based switching takes precedence
      localStorage.removeItem('themeManuallySet');
      return true;
    }
    return false;
  };

  useEffect(() => {
    // Check if it's a transition time first
    if (!checkAndApplyTimeBasedTheme()) {
      // Not a transition time, check for saved preferences
      const savedTheme = localStorage.getItem('theme');
      const hasManualPreference = localStorage.getItem('themeManuallySet') === 'true';
      
      if (hasManualPreference && savedTheme) {
        // Use saved manual preference
        const shouldBeDark = savedTheme === 'dark';
        applyTheme(shouldBeDark);
      } else {
        // Auto-detect based on current time (8 PM - 6 AM = night mode)
        const now = new Date();
        const hour = now.getHours();
        const isNightTime = hour >= 20 || hour < 6;
        applyTheme(isNightTime);
      }
    }

    // Set up interval to check for transition times every minute
    const interval = setInterval(checkAndApplyTimeBasedTheme, 60000);

    return () => clearInterval(interval);
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