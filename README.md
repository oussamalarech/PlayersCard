# Player Cards React App

## Overview

This is a **React application** that displays a collection of football player cards with key details such as name, team, nationality, jersey number, age, and player image. The app uses **animated backgrounds, glassmorphism card styles, and interactive hover effects** to create a visually appealing user interface.

---

## Features

- Display multiple player cards in a **responsive grid layout**.
- **Glass-style cards** with smooth hover animations.
- **Player details** broken down into reusable components (`Name`, `Team`, `Nationality`, `JerseyNumber`, `Age`, `Image`).
- **Animated gradient background** that shifts colors smoothly.
- Optional **ticker/scrolling text** section for news or updates.

---

## Technologies Used

- **React** – for building the user interface.
- **React-Bootstrap** – for prebuilt components (Card, ListGroup, etc.).
- **CSS / Glassmorphism** – for styling the cards and background.
- **ES6 JavaScript** – for modern React code practices.

---

## File Structure

my-app/
├─ src/
│ ├─ components/
│ │ ├─ Player.js
│ │ ├─ Name.js
│ │ ├─ Team.js
│ │ ├─ Nationality.js
│ │ ├─ JerseyNumber.js
│ │ ├─ Age.js
│ │ └─ Image.js
│ ├─ players.js
│ ├─ App.js
│ └─ App.css
├─ public/
│ └─ images/
│ ├─ lionelmessi.png
│ ├─ cristianoronaldo.png
│ ├─ modric.png
│ └─ vinicius.png
├─ package.json
└─ README.md
