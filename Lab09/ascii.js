/* jshint esversion: 6 */
/* global ANIMATIONS */
window.onload = function () {
  "use strict";
  /* ------ Variables ------ */
  let animationIntervalId;
  const DEFAULT_ANIMATION_INTERVAL_MS = 250;
  const TURBO_ANIMATION_INTERVAL_MS = 50;

  /* ------ Event listeners ------ */
  document.getElementById("animation").addEventListener("change", displayAnimation);
  document.getElementById("fontsize").addEventListener("change", changeFontSize);
  document.getElementById("start-btn").addEventListener("click", startAnimation);
  document.getElementById("stop-btn").addEventListener("click", stopAnimation);
  document.getElementById("turbo").addEventListener("change", animationTurbo);

  function animationTurbo() {
    // create animation interval when animation starts.
    if (document.getElementById("start-btn").hasAttribute("disabled")) {
      clearInterval(animationIntervalId);
      const animation = document.getElementById("animation").value;
      const timeout = this.checked ? TURBO_ANIMATION_INTERVAL_MS : DEFAULT_ANIMATION_INTERVAL_MS;
      animationIntervalId = createAnimationInterval(animation, timeout);
    }
  }

  const createAnimationInterval = (animation, timeout) => {
    const frames = ANIMATIONS[animation].split("=====");
    let loopIdx = -1;
    return setInterval(function () {
      ++loopIdx;
      if (loopIdx >= frames.length) {
        loopIdx = 0;
      }
      document.getElementById("text-area").value = frames[loopIdx];
    }, timeout);
  };

  function startAnimation() {
    /* House keeping */
    document.getElementById("start-btn").disabled = true;
    document.getElementById("stop-btn").disabled = false;
    document.getElementById("animation").disabled = true;
    clearInterval(animationIntervalId);

    const animation = document.getElementById("animation").value;
    const isTurbo = document.getElementById("turbo").checked;
    const timeout = isTurbo ? TURBO_ANIMATION_INTERVAL_MS : DEFAULT_ANIMATION_INTERVAL_MS;
    animationIntervalId = createAnimationInterval(animation, timeout);
  }

  function stopAnimation() {
    /* House keeping */
    document.getElementById("stop-btn").disabled = true;
    document.getElementById("start-btn").disabled = false;
    document.getElementById("animation").disabled = false;
    clearInterval(animationIntervalId);
  }

  function displayAnimation() {
    const animationValue = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[animationValue];
  }

  function changeFontSize() {
    fontSizeValue = document.getElementById("fontsize").value
    document.getElementById("text-area").style.fontSize = fontSizeValue;
  }
};


// Functions from Lab 5
function sum(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

function multiply() {
  return arr.reduce((prev, curr) => prev * curr, 1);
}

function reverse(str) {
  return str.map((val, index, array) => array[array.length - 1 - index]);
}

function filterLongWords(arr, i) {
  if (arr.length < 1 || i < 1) {
    return [];
  }
  return arr.filter(w => w.length > i)
}