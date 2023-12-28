import React, { createContext, useContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';


const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const themeChange = createTheme({
    palette: {
      mode: lightMode ? 'light' : 'dark',
      background: {
        default: lightMode ? '#FDFFFC' : '#000',
        ribbon: lightMode ? '#072E2D' : '#eafe9b',
      },
      text: {
        primary: lightMode ? '#12141B' : '#d1d5db',
        secondary: lightMode ? '#0E352E' : '#fff',
        third: lightMode ? '#072E2D' : '#eafe9b',
        four: lightMode ? '#373A43' : '#9ca3af',
      }
    },
  });

  return (
    <ThemeContext.Provider value={{ themeChange, lightMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
