const bgColorElements = document.getElementsByClassName("background-color");
const colorPicker = document.getElementById("text-color");
const text = document.getElementById("text-content").children;
const fontSize = document.getElementById("text-size");
const lineHeight = document.getElementById("line-height");

function changeBgColor(event) {
  color = event.target.id;
  document.body.style.backgroundColor = color;
  localStorage.setItem("bgColor", color);
}

function changeTextColor(event) {
  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    element.style.color = event.target.value;
  }
  localStorage.setItem("txtColor", event.target.value);
}

function changeSize(event) {
  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    element.style.fontSize = event.target.value + "px";
  }
  localStorage.setItem("fontSize", event.target.value + "px");
}

function changeLineHeight(event) {
  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    element.style.lineHeight = event.target.value;
  }
  localStorage.setItem("lineHeight", event.target.value);
}

function initialRenderization() {
  if (localStorage.length === 0) return;
  else {
    const lineHeight = localStorage.lineHeight;
    const txtColor = localStorage.txtColor;
    const fontSize = localStorage.fontSize;
    const bgColor = localStorage.bgColor;
    for (let index = 0; index < text.length; index++) {
      const element = text[index];
      if (lineHeight) element.style.lineHeight = lineHeight;
      if (txtColor) element.style.color = txtColor;
      if (fontSize) element.style.fontSize = fontSize;
    }
    if (bgColor) document.body.style.backgroundColor = bgColor;
  }
}

function addEvents() {
  colorPicker.addEventListener("change", changeTextColor);
  for (let index = 0; index < bgColorElements.length; index++) {
    const element = bgColorElements[index];
    element.addEventListener("click", changeBgColor);
  }
  fontSize.addEventListener("keyup", changeSize);
  lineHeight.addEventListener("input", changeLineHeight);
}

window.onload = function () {
  initialRenderization();
  addEvents();
};
