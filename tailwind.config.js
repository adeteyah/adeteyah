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
        gray: "#f5f3f4",
        lightgray: "#fefefe",
        white: "#f8f9fa",
        text: {
          light: "#252422",
          dark: "#fffcf2",
        },
        background: {
          light: "#fefefe",
          dark: "#0b090a",
        },
        border: {
          light: "#f5f3f4",
          dark: "#161a1d",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
