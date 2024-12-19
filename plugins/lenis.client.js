import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp) => {
  const scrollContainer = document.querySelector("#scroll-container"); // Target your element here

  if (scrollContainer) {
    const lenis = new Lenis({
      wrapper: scrollContainer,
      content: scrollContainer.firstElementChild, // Target the scrollable content
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
