import React from 'react';
import { YStack, XStack, Button, Text, H1, H3 } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import { Sun, Moon } from '@tamagui/lucide-icons';

export default function RoleSelectionScreen({ toggleTheme, isDarkTheme }) {
  const navigation = useNavigation();

  return (
    <YStack flex={1} justifyContent="center" padding="$4" backgroundColor="$background">
      <XStack position="absolute" top="$4" right="$4">
        <Button
          size="$3"
          variant="outlined"
          onPress={toggleTheme}
          icon={isDarkTheme ? Sun : Moon}
          circular
        />
      </XStack>

      <YStack alignItems="center" marginBottom="$8">
        <H1 textAlign="center" marginBottom="$2" color="$color">
          Welcome to Campus Shuttle
        </H1>
        <H3 textAlign="center" color="$color" opacity={0.8}>
          Please select your role to get started.
        </H3>
      </YStack>

      <YStack gap="$4" paddingHorizontal="$2">
        <Button
          size="$5"
          theme="blue"
          onPress={() => navigation.navigate('StudentLogin')}
          icon="🎓"
        >
          I'm a Student
        </Button>

        <Button
          size="$5"
          variant="outlined"
          theme="blue"
          onPress={() => navigation.navigate('DriverLogin')}
          icon="🚌"
        >
          I'm a Driver
        </Button>
      </YStack>
    </YStack>
  );
}