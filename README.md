# 🌍 **Planets Fact Site**

> A React-based educational website providing fascinating facts about the planets in our solar system.

---

## 🗂 **Table of Contents**

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Data Source](#data-source)
- [Application Routes](#application-routes)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 📝 **About the Project**

The **Planets Fact Site** is an interactive platform designed to educate users about the planets in our solar system. It features detailed information about planetary structures, geology, and much more, presented in an aesthetically pleasing format.

---

## ✨ **Features**

- **Planetary Information**: View detailed facts about planets, including rotation period, revolution period, radius, and temperature.
- **Dynamic Navigation**: Navigate seamlessly between pages using `react-router-dom`.
- **Responsive Design**: Optimized for various devices with a fully responsive layout.
- **TypeScript Integration**: Ensures type safety and a robust codebase.

---

## 🛠 **Tech Stack**

- **Frontend**: React, TypeScript, React Router
- **Styling**: Tailwind CSS
- **Tooling**: Vite, ESLint, Prettier

---

## 🚀 **Getting Started**

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gilmore-1/planets-fact-site.git
   cd planets-fact-site
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
4. Start the development server:
   ```bash
   http://localhost:5173
### 📂 Project Structure
    ```bash
    planets-fact-site/
    ├── public/                   # Static assets
    ├── src/
    │   ├── components/           # Reusable UI components
    │   ├── data/                 # Planet data (JSON or static files)
    │   ├── pages/                # Planet-specific pages
    │   ├── styles/               # Tailwind configurations
    │   ├── App.tsx               # Main application file
    │   ├── main.tsx              # Application entry point
    │   ├── Root.tsx              # Layout with navigation
    │   ├── datainterface.ts      # TypeScript interfaces
    │   ├── router.tsx            # Route definitions
    ├── .eslintrc.json            # Linter configuration
    ├── .prettierrc               # Prettier configuration
    ├── package.json              # Dependencies and scripts
    └── README.md                 # Documentation 
### 📂 Project Structure
The project uses a static data source to populate planetary information. Below is an example:
  
    [
      {
        "name": "Earth",
        "overview": {
          "content": "Earth is the third planet from the Sun...",
          "source": "https://en.wikipedia.org/wiki/Earth"
        },
        "structure": {
          "content": "Earth's internal structure consists of layers...",
          "source": "https://en.wikipedia.org/wiki/Structure_of_the_Earth"
        },
        "geology": {
          "content": "Surface geology includes continents and oceans...",
          "source": "https://en.wikipedia.org/wiki/Geology_of_Earth"
        },
        "rotation": "24 hours",
        "revolution": "365.25 days",
        "radius": "6,371 km",
        "temperature": "14°C",
        "images": {
          "planet": "/images/earth.png",
          "internal": "/images/earth-internal.png",
          "geology": "/images/earth-geology.png"
        }
      }
    ]
## 🌐 **Application Routes**

| Route        | Description             |
|--------------|-------------------------|
| `/`          | Home page               |
| `/mercury`   | Mercury details         |
| `/venus`     | Venus details           |
| `/earth`     | Earth details           |
| `/mars`      | Mars details            |
| `/jupiter`   | Jupiter details         |
| `/saturn`    | Saturn details          |
| `/uranus`    | Uranus details          |
| `/neptune`   | Neptune details         |

## 🔮 **Future Enhancements**

- Add an interactive 3D model of the planets.
- Include more astronomical objects, such as moons and dwarf planets.
- Enable live data updates from an API.
## 📜 **License**
This project is licensed under the MIT License. See the LICENSE file for more details.

## 🙌 **Acknowledgments**
- NASA for inspiration and planetary data.
- Wikipedia for detailed planetary information.
- The creators of React, TypeScript, and Tailwind CSS for the amazing tools.

