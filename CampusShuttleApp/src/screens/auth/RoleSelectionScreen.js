import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

export default function RoleSelectionScreen({ toggleTheme, isDarkTheme }) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
        <Text style={{ color: colors.text, fontSize: 20 }}>
          {isDarkTheme ? '💡' : '🌙'}
        </Text>
      </TouchableOpacity>

      <Text style={[styles.title, { color: colors.text }]}>
        Welcome to Campus Shuttle
      </Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>
        Please select your role to get started.
      </Text>

      <TouchableOpacity
        style={[styles.studentButton, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('StudentHome')}
      >
        <Text style={[styles.buttonText, { color: 'white' }]}>🎓 I'm a Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.driverButton, { borderColor: colors.primary }]}
        onPress={() => navigation.navigate('DriverLogin')}
      >
        <Text style={[styles.driverButtonText, { color: colors.primary }]}>🚌 I'm a Driver</Text>
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
  },
  driverButton: {
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: { fontSize: 18, fontWeight: '600' },
  driverButtonText: { fontSize: 18, fontWeight: '600' },
});