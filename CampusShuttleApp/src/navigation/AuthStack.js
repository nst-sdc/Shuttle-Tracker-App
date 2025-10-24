import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen';
import StudentLoginScreen from '../screens/auth/StudentLoginScreen';
import DriverLoginScreen from '../screens/auth/DriverLoginScreen';
import StudentSignupScreen from '../screens/auth/StudentSignupScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
      <Stack.Screen name="DriverLogin" component={DriverLoginScreen} />
      <Stack.Screen name="StudentSignup" component={StudentSignupScreen} />
    </Stack.Navigator>
  );
}
