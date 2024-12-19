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
      scrollbar: {
        width: "2",
        track: "gray-100",
        thumb: "gray-300",
        "thumb-dark": "neutral-500",
        "track-dark": "neutral-700",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#181818",
        white: "#f1f1f1",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar")],
};
