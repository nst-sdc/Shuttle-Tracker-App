import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Sun, Moon, Eye, EyeOff } from '@tamagui/lucide-icons';

export default function DriverLoginScreen({ toggleTheme, isDarkTheme }) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [driverId, setDriverId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Driver login logic will go here
    console.log('Driver login attempt:', { driverId, password });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backButtonContent}>
            <Ionicons name="arrow-back" size={20} color={colors.text} />
            <Text style={[styles.backButtonText, { color: colors.text }]}>Back</Text>
          </View>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.themeToggleButton}
        onPress={toggleTheme}
      >
        {isDarkTheme ? (
          <Sun size={18} color={colors.text} />
        ) : (
          <Moon size={18} color={colors.text} />
        )}
      </TouchableOpacity>

      <Text style={[styles.title, { color: colors.text }]}>Driver Login</Text>

      <View style={styles.form}>
        <Text style={[styles.label, { color: colors.text }]}>Driver ID</Text>
        <TextInput
          style={[styles.input, { color: colors.text, borderColor: colors.border || '#E0E0E0', backgroundColor: colors.card || 'white' }]}
          placeholder="Enter your driver ID"
          placeholderTextColor={colors.text + '99'}
          value={driverId}
          onChangeText={setDriverId}
          autoCapitalize="none"
        />

        <Text style={[styles.label, { color: colors.text }]}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, color: colors.text, borderColor: colors.border || '#E0E0E0', backgroundColor: colors.card || 'white' }]}
            placeholder="Enter your password"
            placeholderTextColor={colors.text + '99'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} color={colors.text} />
            ) : (
              <Eye size={20} color={colors.text} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={[styles.loginButton, { backgroundColor: colors.primary }]} onPress={handleLogin}>
        <Text style={[styles.loginButtonText, { color: colors.background }]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, // Add padding to avoid the notch
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  backButtonText: {
    fontSize: 18,
  },
  themeToggleButton: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeButton: {
    paddingHorizontal: 10,
  },
  loginButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
