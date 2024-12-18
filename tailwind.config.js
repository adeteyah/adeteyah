export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        dark: "#343a40",
        darker: "#212529",
        blue: "#455CE9",
        bluedark: "#334BD3",
        gray: "#f1f2f3",
        lightgray: "#fefefe",
        white: "#f8f9fa",
        text: {
          light: "#e3e3e3",
          dark: "#242424",
        },
        background: {
          light: "#e3e3e3",
          dark: "#242424",
        },
        border: {
          light: "#e3e3e3",
          dark: "#242424",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
