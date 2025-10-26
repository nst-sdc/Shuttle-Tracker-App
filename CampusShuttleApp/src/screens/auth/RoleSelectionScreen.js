import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Feather has clean icons

export default function RoleSelectionScreen({ toggleTheme, isDarkTheme }) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [themeAnim] = useState(new Animated.Value(0));

  const handleToggleTheme = () => {
    Animated.sequence([
      Animated.timing(themeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(themeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
    toggleTheme();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Theme Toggle */}
      <TouchableOpacity style={styles.toggleButton} onPress={handleToggleTheme}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: themeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '180deg'],
                }),
              },
            ],
          }}
        >
          <Icon
            name={isDarkTheme ? 'sun' : 'moon'}
            size={22}
            color={colors.text}
          />
        </Animated.View>
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.title, { color: colors.text }]}>
        Welcome to Campus Shuttle
      </Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>
        Please select your role to get started.
      </Text>

      {/* Student Button */}
      <TouchableOpacity
        style={[styles.studentButton, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('StudentHome')}
      >
        <Icon name="user" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={[styles.buttonText, { color: 'white' }]}>I'm a Student</Text>
      </TouchableOpacity>

      {/* Driver Button */}
      <TouchableOpacity
        style={[styles.driverButton, { borderColor: colors.primary }]}
        onPress={() => navigation.navigate('DriverLogin')}
      >
        <Icon name="truck" size={20} color={colors.primary} style={{ marginRight: 8 }} />
        <Text style={[styles.driverButtonText, { color: colors.primary }]}>I'm a Driver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  toggleButton: { position: 'absolute', top: 50, right: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 40 },
  studentButton: {
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  driverButton: {
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: { fontSize: 18, fontWeight: '600' },
  driverButtonText: { fontSize: 18, fontWeight: '600' },
});