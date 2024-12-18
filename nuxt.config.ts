export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: {
      name: "fade",
    },
  },
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxt/icon", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "", // Adds the 'dark' class without a suffix
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
