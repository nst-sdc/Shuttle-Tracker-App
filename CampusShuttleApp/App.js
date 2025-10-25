import React, { useState } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import AuthStack from './src/navigation/AuthStack';
import { useColorScheme } from 'react-native';

export default function App() {
  const systemColorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemColorScheme === 'dark');

  const toggleTheme = () => setIsDarkTheme(prev => !prev);

  return (
    <TamaguiProvider config={config} defaultTheme={isDarkTheme ? 'dark' : 'light'}>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
        <AuthStack toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </NavigationContainer>
    </TamaguiProvider>
  );
}