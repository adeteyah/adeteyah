import Lenis from "lenis";
export default defineNuxtPlugin((nuxtApp) => {
  const scrollContainer = document.querySelector("#scroll-container");
  if (scrollContainer) {
    const lenis = new Lenis({
      wrapper: scrollContainer,
      content: scrollContainer.firstElementChild,
      lerp: 0.1,
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    nuxtApp.provide("lenis", lenis);
  }
});
