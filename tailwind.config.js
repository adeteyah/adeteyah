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
        dark: "#1C1D20",
        darker: "#141517",
        blue: "#455CE9",
        bluedark: "#334BD3",
        gray: "#f1f2f3",
        lightgray: "#fefefe",
        white: "#fefefe",
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
