import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Sun, Moon, Bus, MapPin, Clock } from '@tamagui/lucide-icons';

export default function StudentHomeScreen({ toggleTheme, isDarkTheme }) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.backButtonText, { color: colors.text }]}>← Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
          {isDarkTheme ? (
            <Sun size={20} color={colors.text} />
          ) : (
            <Moon size={20} color={colors.text} />
          )}
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
          <View style={styles.cardHeader}>
            <Bus size={24} color={colors.primary} style={styles.cardIcon} />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Live Shuttle Tracking
            </Text>
          </View>
          <Text style={[styles.cardDescription, { color: colors.text }]}>
            View real-time shuttle locations and arrival times
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.cardHeader}>
            <MapPin size={24} color={colors.primary} style={styles.cardIcon} />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Route Information
            </Text>
          </View>
          <Text style={[styles.cardDescription, { color: colors.text }]}>
            Check shuttle routes and schedules
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.cardHeader}>
            <Clock size={24} color={colors.primary} style={styles.cardIcon} />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Arrival Times
            </Text>
          </View>
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
    marginBottom: 0,
  },
  backButtonText: {
    fontSize: 18,
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardIcon: {
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },
  cardDescription: {
    fontSize: 16,
    opacity: 0.8,
  },
});
