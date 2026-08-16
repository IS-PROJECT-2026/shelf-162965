/* Reader controls. */

const text = document.getElementById("reader-text");
const MIN = 16;
const MAX = 28;
const STEP = 2;
let size = 18;

function setSize(next) {
  size = Math.min(MAX, Math.max(MIN, next));
  text.style.setProperty("--reader-size", size + "px");
  document.getElementById("font-down").disabled = size === MIN;
  document.getElementById("font-up").disabled = size === MAX;
}

document.getElementById("font-up").addEventListener("click", () => setSize(size + STEP));
document.getElementById("font-down").addEventListener("click", () => setSize(size - STEP));

setSize(size);