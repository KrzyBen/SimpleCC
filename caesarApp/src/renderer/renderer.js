document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text");
  const shiftSlider = document.getElementById("shift");
  const shiftValue = document.getElementById("shiftValue");
  const result = document.getElementById("result");
  const charCount = document.getElementById("charCount");
  const radios = document.querySelectorAll("input[name='mode']");

  function update() {
    const text = textInput.value;
    const shift = parseInt(shiftSlider.value, 10);
    const mode = document.querySelector("input[name='mode']:checked").value;

    shiftValue.textContent = shift;
    charCount.textContent = text.length;

    if (!text) {
      result.textContent = "";
      return;
    }

    if (mode === "encrypt") {
      result.textContent = window.api.encrypt(text, shift);
    } else {
      result.textContent = window.api.decrypt(text, shift);
    }
  }

  textInput.addEventListener("input", update);
  shiftSlider.addEventListener("input", update);
  radios.forEach(r => r.addEventListener("change", update));

  update();
});