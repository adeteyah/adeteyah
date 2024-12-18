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
    classSuffix: "", // This ensures the 'dark' class is directly added to the <html> or <body> tag.
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
