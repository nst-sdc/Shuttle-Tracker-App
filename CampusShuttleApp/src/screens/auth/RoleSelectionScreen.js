import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RoleSelectionScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Campus Shuttle</Text>
      
      <Text style={styles.subtitle}>
        Please select your role to get started.
      </Text>

      <TouchableOpacity
        style={styles.studentButton}
        onPress={() => navigation.navigate('StudentLogin')}
      >
        <Text style={styles.buttonText}>🎓 I'm a Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.driverButton}
        onPress={() => navigation.navigate('DriverLogin')}
      >
        <Text style={styles.driverButtonText}>🚌 I'm a Driver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7F8FA',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A202C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5A5A5A',
    marginBottom: 40,
  },
  studentButton: {
    backgroundColor: '#007AFF', 
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  driverButton: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF', 
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  driverButtonText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

