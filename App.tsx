/**
 * NextJobz - Job Search App
 * Your custom React Native application
 * 
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigator } from './src/navigation/MainNavigator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#FFFFFF'}
      />
      <MainNavigator />
    </SafeAreaProvider>
  );
}

export default App;
