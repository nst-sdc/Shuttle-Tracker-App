import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Sun, Moon, Eye, EyeOff, Search } from '@tamagui/lucide-icons';

export default function StudentLoginScreen({ toggleTheme, isDarkTheme }) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Student login attempt:', { email, password });
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In button pressed');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.backButtonContent}>
          <Ionicons name="arrow-back" size={20} color={colors.text} />
          <Text style={[styles.backButtonText, { color: colors.primary }]}>Back</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.themeToggleButton}
        onPress={toggleTheme}
      >
        {isDarkTheme ? (
          <Sun size={20} color={colors.text} />
        ) : (
          <Moon size={20} color={colors.text} />
        )}
      </TouchableOpacity>

      <Text style={[styles.title, { color: colors.text }]}>Student Login</Text>

      <View style={styles.form}>
        <Text style={[styles.label, { color: colors.text }]}>Email</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
          placeholder="Enter your email"
          placeholderTextColor={colors.text + '99'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={[styles.label, { color: colors.text }]}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
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

      <TouchableOpacity style={[styles.googleButton, { borderColor: colors.border }]} onPress={handleGoogleSignIn}>
        <View style={styles.googleButtonContent}>
          <Search size={16} color={colors.text} style={styles.googleIcon} />
          <Text style={[styles.googleButtonText, { color: colors.text }]}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>

      <Text style={[styles.signupText, { color: colors.text }]}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
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
  eyeIcon: {
    fontSize: 20,
  },
  loginButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleIcon: {
    marginRight: 8,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
