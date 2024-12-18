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
          light: "#f5efed",
          dark: "#808080",
        },
        background: {
          light: "#fefefe",
          dark: "#0f0a0a",
        },
        border: {
          light: "#e3e3e3",
          dark: "#424242",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
