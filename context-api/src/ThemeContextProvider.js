// Todo: Create & manage context in this file
// import { createContext } from 'react';
import React from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default function ThemeContextProvider({children}) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = React.useState('light');
 
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
