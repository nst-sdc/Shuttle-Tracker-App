import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen';
import StudentLoginScreen from '../screens/auth/StudentLoginScreen';
import DriverLoginScreen from '../screens/auth/DriverLoginScreen';
import StudentHomeScreen from '../screens/StudentHomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack({ toggleTheme, isDarkTheme }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="RoleSelection">
        {(props) => (
          <RoleSelectionScreen {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        )}
      </Stack.Screen>
      <Stack.Screen name="StudentLogin">
        {(props) => (
          <StudentLoginScreen {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        )}
      </Stack.Screen>
      <Stack.Screen name="DriverLogin">
        {(props) => (
          <DriverLoginScreen {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        )}
      </Stack.Screen>
      <Stack.Screen name="StudentHome">
        {(props) => (
          <StudentHomeScreen {...props} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}