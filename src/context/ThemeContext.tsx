'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

type Theme = 'designer' | 'developer';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('designer');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'designer' ? 'developer' : 'designer'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div
        data-theme={theme}
        className="min-h-screen transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
