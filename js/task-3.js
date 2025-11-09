const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(e) {
  output.textContent = e.currentTarget.value.trim() || "Anonymous";
}
