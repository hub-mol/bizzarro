import { gridBorders } from "./grid-column";
import { setupMixcloud } from "./mixcloud";

document.addEventListener("DOMContentLoaded", () => {
  gridBorders;
  setupMixcloud;
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(gridBorders, 200);
});;