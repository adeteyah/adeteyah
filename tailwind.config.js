/** @type {import('tailwindcss').Config} */
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
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: "#1C1D20",
      darker: "#141517",
      blue: "#455CE9",
      bluedark: "#334BD3",
      gray: "#999D9E",
      lightgray: "#E9EAEB",
      white: "#ffffff",
      border: "#D2D2D2",
    },
  },
  plugins: [],
};
