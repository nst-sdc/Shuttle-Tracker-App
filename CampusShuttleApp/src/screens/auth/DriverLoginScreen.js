import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Feather has clean icons

export default function DriverLoginScreen({ toggleTheme, isDarkTheme }) {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [driverId, setDriverId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [themeAnim] = useState(new Animated.Value(0));
  const [eyeAnim] = useState(new Animated.Value(0));

  const handleLogin = () => {
    console.log('Driver login attempt:', { driverId, password });
  };

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

  const handleTogglePassword = () => {
    Animated.sequence([
      Animated.timing(eyeAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(eyeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={22} color={colors.text} />
      </TouchableOpacity>

      {/* Theme Toggle */}
      <TouchableOpacity style={styles.themeToggleButton} onPress={handleToggleTheme}>
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
      <Text style={[styles.title, { color: colors.text }]}>Driver Login</Text>

      {/* Form */}
      <View style={styles.form}>
        <Text style={[styles.label, { color: colors.text }]}>Driver ID</Text>
        <TextInput
          style={[
            styles.input,
            {
              color: colors.text,
              borderColor: colors.border || '#E0E0E0',
              backgroundColor: colors.card || 'white',
            },
          ]}
          placeholder="Enter your driver ID"
          placeholderTextColor={colors.text + '99'}
          value={driverId}
          onChangeText={setDriverId}
          autoCapitalize="none"
        />

        <Text style={[styles.label, { color: colors.text }]}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              {
                flex: 1,
                color: colors.text,
                borderColor: colors.border || '#E0E0E0',
                backgroundColor: colors.card || 'white',
              },
            ]}
            placeholder="Enter your password"
            placeholderTextColor={colors.text + '99'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.eyeButton} onPress={handleTogglePassword}>
            <Animated.View
              style={{
                transform: [
                  {
                    scale: eyeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.2],
                    }),
                  },
                ],
              }}
            >
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color={colors.text}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: colors.primary }]}
        onPress={handleLogin}
      >
        <Text style={[styles.loginButtonText, { color: colors.background }]}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 20,
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
