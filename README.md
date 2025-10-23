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
4. Run the development server (`npx expo start` or `yarn start`).

## Setup Guide

Before contributing to or running the NST Shuttle Tracker App locally, please follow these steps carefully to ensure a proper development environment setup:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (preferably latest LTS version)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (Install globally via `npm install -g expo-cli`)
- A smartphone or emulator with the [Expo Go](https://expo.dev/client) app installed for testing

### Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/nst-sdc/Shuttle-Tracker-App.git](https://github.com/nst-sdc/Shuttle-Tracker-App.git)
    cd Shuttle-Tracker-App
    ```

2.  **Install dependencies:**

    Use npm or yarn based on your preference:

    ```bash
    npm install
    ```
    *or*
    ```bash
    yarn install
    ```

3.  **Start the development server:**

    Launch the Expo development server:

    ```bash
    npx expo start
    ```
    *or*
    ```bash
    yarn start
    ```

4.  **Run the app:**

    - Scan the QR code from the Expo DevTools with your Expo Go app on your physical device, or
    - Use an Android/iOS emulator to run the app directly on your development machine.

### Additional Tips

- Regularly sync with upstream changes from the main branch to avoid merge conflicts.
- Follow the coding style and conventions used in the project.
- Write clear commit messages describing your changes.
- Test your changes thoroughly before submitting a pull request.

By following this setup guide, developers can smoothly contribute and test the shuttle tracker app while maintaining a consistent and stable development process.

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