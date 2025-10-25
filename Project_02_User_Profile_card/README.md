# 👥 User Profiles Card UI (React Mini Project)

A simple and elegant React mini project that displays multiple user profile cards dynamically using mock data.  
Each card shows a user's photo, designation, hourly pay, skills, and availability status — all styled with clean, responsive CSS and rendered through reusable React components.

---

## 🚀 Features

- ⚛️ **Built with React.js** (modular component-based architecture)
- 🎨 **Styled using pure CSS** (no frameworks)
- 🧱 **Dynamic rendering** of multiple cards using mock data
- 💡 **Reusable components** (`Users`, `Card`)
- 🧍‍♂️ **User details**: image, name, role, pay rate, short intro, and key skills
- 📱 **Responsive design** with Flexbox layout and wrapping behavior
- 💬 **Availability indicator** (Available / Offline)

---

## 📂 Project Structure

```
UserProfiles/
├── src/
│ ├── main.jsx # React entry point
│ ├── Card.jsx # Renders all user cards using mock data
│ ├── Users.jsx # Individual user card component
│ ├── mockData.js # Contains user mock data (15 sample profiles)
│ ├── index.css # Styling for all components
│ └── assets/ # (Optional) store images if not using URLs
├── index.html
├── package.json
└── README.md
```

## 🧠 Component Overview

### `Users.jsx`
- Displays **one user card**.
- Shows:
  - Profile image
  - Name, designation, pay rate
  - Availability (with color-coded button)
  - Short intro and key skills
  - “View Profile” link

### `Card.jsx`
- Imports mock data and renders **multiple user cards** by mapping through it.
- Acts as the **flex container** for all `.card-container` elements.

### `main.jsx`
- Application entry point.
- Renders the `<Card />` component into the root element.

---

🧩 How It Works
---
- mockData.js contains an array of 15 user objects.
- The Card component maps through that array and renders one <Users /> component for each item.
- Flexbox (.container) ensures all cards display side by side and wrap neatly.
- Each card’s design and details are dynamically pulled from props.

---

🧰 Tech Stack

Frontend: React.js

Styling: CSS3 (Flexbox)

Build Tool: Vite

---