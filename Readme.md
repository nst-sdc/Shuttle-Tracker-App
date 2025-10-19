
# 🚍 Campus Shuttle Tracker

A **real-time, cross-platform shuttle tracking application** built with **React Native** for the campus community.  
This app provides a seamless experience for students to track buses and for drivers to manage their routes safely.

---

## Features

### For Students
- **Role-Based Authentication:** Clean separation between student and driver flows.  
- **Social & Email Login:** Easy sign-up and login using Google Sign-In or traditional email/password.  
- **Live Map Tracking:** See the real-time location of shuttles on an interactive map.  
- **The “Live Route Card”:** A unique, interactive UI showing a visual timeline of the bus's journey, its current capacity, and a personalized ETA to the user’s favorite stop.  
- **Service Alerts:** Receive push notifications and in-app alerts about delays or schedule changes.  

###  For Drivers
- **Secure Login:** A dedicated, secure portal for authorized drivers.  
- **Automated Journey Monitor:** Uses geofencing to automatically log arrivals and departures at stops, requiring minimal to zero driver interaction.  
- **Real-Time Capacity Updates:** Simple, large, one-tap buttons to update the bus's current fullness status for students.  

---

## 🛠 Tech Stack & Libraries

| Category | Tools / Libraries |
|-----------|-------------------|
| **Framework** | React Native (managed with Expo) |
| **UI Library** | Tamagui (for high-performance, modern components) |
| **Backend & Database** | Firebase (Authentication, Firestore for real-time data) |
| **Navigation** | React Navigation |
| **Maps & Geolocation** | React Native Maps, Expo Location |
| **Animations** | React Native Reanimated |

---

# 📂 Project Structure 

```plaintext
CampusShuttleApp/
├── assets/
│   ├── fonts/
│   └── images/
│
├── src/
│   ├── api/
│   │   ├── firebase.js
│   │   └── firestore.js
│   │
│   ├── components/
│   │   ├── common/
│   │   └── specific/
│   │
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── LocationContext.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useBusLocation.js
│   │
│   ├── navigation/
│   │   ├── AppNavigator.js
│   │   ├── AuthStack.js
│   │   └── StudentTabNavigator.js
│   │
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── RoleSelectionScreen.js
│   │   │   ├── StudentLoginScreen.js
│   │   │   └── DriverLoginScreen.js
│   │   ├── student/
│   │   │   ├── HomeScreen.js
│   │   │   ├── RoutesScreen.js
│   │   │   └── ProfileScreen.js
│   │   └── driver/
│   │       └── DriverDashboardScreen.js
│   │
│   └── utils/
│
├── .env
├── .gitignore
├── App.js
└── package.json

---
```

### Notes
- **`assets/`** – This folder Stores fonts and image resources.  
- **`src/`** – It Contains all app logic, organized by functionality.  
- **`api/`** –  This contains firebase configuration and firestore integration.  
- **`components/`** – This is used for Reusable UI elements which are (common and specific).  
- **`context/`** – React Context for authentication and location tracking.  
- **`hooks/`** – Custom React hooks for managing app logic.  
- **`navigation/`** – Navigation stacks and tab navigators.  
- **`screens/`** – All app screens grouped by user roles.  
- **`utils/`** – Helper functions and utilities.  

## ⚙️ Installation & Setup

## 1. Clone the repository
```bash
git clone https://github.com/your-username/campus-shuttle-app.git
cd campus-shuttle-app
## 2. Install dependencies
npm install
```
## Set up environment variables
```bash
EXPO_PUBLIC_FIREBASE_API_KEY="AIza..."
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN="project-id.firebaseapp.com"
EXPO_PUBLIC_FIREBASE_PROJECT_ID="project-id"
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET="project-id.appspot.com"
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="..."
EXPO_PUBLIC_FIREBASE_APP_ID="1:..."
```
## Start the development server:
``` 
npx expo start

- This will open a terminal window with a QR code.

- To run on a physical device:

- Install the Expo Go app on your iOS or Android phone.

- Scan the QR code displayed in the terminal.

- o run on an emulator:

- Press a for Android emulator.

- Press i for iOS simulator.
```

## License

This project is open-source and available under the MIT License.

## Contributing 

You can refer @Contributing.md 

## 👥 Authors

- **Gourav NSS** – Full Stack Developer
- **Parthkumar Patel** – Backend Developer
- **Sammer Pawar** – Developer

Built with ❤️ using **React Native** and **Firebase**.
