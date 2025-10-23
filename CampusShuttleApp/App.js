import React, { useState } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import { useColorScheme } from 'react-native';

export default function App() {
  const systemColorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemColorScheme === 'dark');

  const toggleTheme = () => setIsDarkTheme(prev => !prev);

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <AuthStack toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </NavigationContainer>
  );
}