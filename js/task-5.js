const refs = {
  body: document.body,
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onClick);

function onClick() {
  const currentColor = getRandomHexColor();

  refs.body.style.backgroundColor = currentColor;
  refs.span.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
