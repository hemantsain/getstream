import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import Dark from '../themes/Dark';
import Light from '../themes/Light';

export const ThemeContext = React.createContext({
  isDark: false,
  colors: Light,
  setScheme: () => {},
});

export const ThemeProvider = props => {
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? Dark : Light,
    setScheme: scheme => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
