import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust smoothness
      smooth: true, // Enable smooth scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    nuxtApp.provide("lenis", lenis);
  }
});
