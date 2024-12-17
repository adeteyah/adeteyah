export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxt/icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
