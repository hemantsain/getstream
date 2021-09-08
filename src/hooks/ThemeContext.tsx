import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import Dark from '../themes/Dark';
import Light from '../themes/Light';
import { ThemeTypes } from '../types/ThemeTypes';

export type Theme = {
  isDark: boolean,
  colors: ThemeTypes,
  setScheme: (value: string) => void
}

export const ThemeContext = React.createContext({
  isDark: false,
  colors: Light,
  setScheme: () => { },
} as Theme);

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = (props: Props): JSX.Element => {
  const { children } = props;
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = useState<boolean>(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme: Theme = {
    isDark,
    colors: isDark ? Dark : Light,
    setScheme: scheme => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
