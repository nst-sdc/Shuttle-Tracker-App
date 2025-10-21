# Shuttle Tracker App

Shuttle-Tracker-App is a campus transportation tool designed to provide real-time shuttle locations and route information, making daily commutes smoother and more predictable for everyone on campus. The app is aimed at students, faculty, and staff who rely on campus shuttle services.

## Project Vision & Goal

The goal is to create a modern, real-time shuttle tracking application for a campus community. It provides students with accurate, up-to-the-minute shuttle locations and arrival times, while offering drivers a safe and automated interface to broadcast location and status.

## Core User Groups
**Students:** Need fast, accurate info about shuttle location and ETA with a user friendly interface.

**Bus Drivers:** App automates location logging using geofencing.

## Features
- User role-based authentication (Students: email/password + Google sign-in; Drivers: admin-created accounts)

- Student Dashboard with interactive "Live Route Card" showing personalized ETAs, bus capacity, and visual timeline
- Driver Dashboard automating bus progress tracking using geofencing with minimal manual input
- Real-time updates powered by Firebase Firestore database and Authentication
- React Native maps for shuttle location visualization
- Smooth animations and responsive UI built with Tamagui and React Native Reanimated
- Navigation handled via React Navigation for seamless tab views

## Getting Started

1. Clone the repository:

```
git clone https://github.com/nst-sdc/Shuttle-Tracker-App.git 
```
2. Navigate to the project directory and open it:
```
cd Shuttle-Tracker-App
code .
```

3. Install dependencies based on your setup (`npm install` or `yarn install`).
4. Run the development server (`npm start` or `yarn start`).

## Contributing

- Fork the repository
- Create a feature branch:

```
git checkout -b feature/<feature-name>
```

- Commit your changes:

```
git commit -m "Describe your changes"
```
- Push to your branch:

```
git push origin feature/<feature-name>
```
- Open a Pull Request for review.

## License
This project is licensed under the [MIT License](LICENSE.md).

## Credits
Developed and maintained by NST Student Developer Club and contributors.