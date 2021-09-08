/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, LogBox } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from './src/hooks/ThemeContext';
import { Home } from './src/screens/Home';

LogBox.ignoreAllLogs();

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
