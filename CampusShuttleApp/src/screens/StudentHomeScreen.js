import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function StudentHomeScreen({ toggleTheme, isDarkTheme }) {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
          <Text style={{ color: colors.text, fontSize: 20 }}>
            {isDarkTheme ? '💡' : '🌙'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={[styles.welcomeTitle, { color: colors.text }]}>
          Welcome to Home Page
        </Text>
        
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Track your campus shuttle in real-time
        </Text>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            🚌 Live Shuttle Tracking
          </Text>
          <Text style={[styles.cardDescription, { color: colors.text }]}>
            View real-time shuttle locations and arrival times
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            📍 Route Information
          </Text>
          <Text style={[styles.cardDescription, { color: colors.text }]}>
            Check shuttle routes and schedules
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            ⏰ Arrival Times
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
    alignItems: 'flex-end',
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
