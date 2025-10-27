import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Feather has clean icons

export default function StudentHomeScreen({ toggleTheme, isDarkTheme }) {
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
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('RoleSelection')}
        >
          <Icon name="arrow-left" size={22} color={colors.text} />
        </TouchableOpacity>

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
      </View>

      <View style={styles.content}>
        <Text style={[styles.welcomeTitle, { color: colors.text }]}>
          Welcome to Home Page
        </Text>
        
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Track your campus shuttle in real-time
        </Text>

        {/* Live Shuttle Tracking Card */}
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Icon name="truck" size={24} color={colors.primary} style={{ marginBottom: 8 }} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Live Shuttle Tracking
          </Text>
          <Text style={[styles.cardDescription, { color: colors.text }]}>
            View real-time shuttle locations and arrival times
          </Text>
        </View>

        {/* Route Information Card */}
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Icon name="map-pin" size={24} color={colors.primary} style={{ marginBottom: 8 }} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Route Information
          </Text>
          <Text style={[styles.cardDescription, { color: colors.text }]}>
            Check shuttle routes and schedules
          </Text>
        </View>

        {/* Arrival Times Card */}
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Icon name="clock" size={24} color={colors.primary} style={{ marginBottom: 8 }} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Arrival Times
          </Text>
          <Text style={[styles.cardDescription, { color: colors.text }]}>
            Get accurate ETAs for your next shuttle
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  toggleButton: {
    padding: 10,
  },
  content: {
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    opacity: 0.8,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    opacity: 0.8,
  },
});
