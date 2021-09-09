function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:

function createDaysOfTheMonth() {
  const monthDays = document.querySelector("#days");
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const monthDayListItem = document.createElement("li");
    monthDayListItem.classList.add("day");
    monthDayListItem.innerHTML = day;
    if (isHolyday(day)) monthDayListItem.classList.add("holyday");
    if (isFriday(day)) monthDayListItem.classList.add("friday");

    monthDays.appendChild(monthDayListItem);
  }
}

function isHolyday(day) {
  if (day === 24 || day === 25 || day === 31) return true;
  return false;
}

function isFriday(day) {
  if (day === 4 || day === 11 || day === 18 || day === 25) return true;
  return false;
}

createDaysOfTheMonth();

// Exercício 2:

function createBtnHolyday(str) {
  const buttonsContainer = document.querySelector(".buttons-container");
  buttom = document.createElement("button");
  buttom.innerHTML = str;
  buttom.id = "btn-holyday";

  buttonsContainer.appendChild(buttom);
}

createBtnHolyday("Feriados");

// Exercício 3:

function addHolydayListener() {
  const holydayBtn = document.querySelector("#btn-holyday");
  holydayBtn.addEventListener("click", changeBgColor);
}
function changeBgColor() {
  const holydays = document.getElementsByClassName("holyday");
  for (let index = 0; index < holydays.length; index += 1) {
    let day = holydays[index];
    let result = day.classList.toggle("holydaySelected");

    if (result) day.style.backgroundColor = "rgb(154, 219, 154)";
    else day.style.backgroundColor = "rgb(238,238,238)";
  }
}
addHolydayListener();

// Exercício 4:

function createBtnFriday(str) {
  const buttonsContainer = document.querySelector(".buttons-container");
  buttom = document.createElement("button");
  buttom.innerHTML = str;
  buttom.id = "btn-friday";

  buttonsContainer.appendChild(buttom);
}

createBtnFriday("Sexta-feira");

// Exercício 5:

function addFridayListener() {
  const fridayBtn = document.querySelector("#btn-friday");
  fridayBtn.addEventListener("click", changeFridayText);
}
function changeFridayText() {
  const fridays = document.getElementsByClassName("friday");
  const daysNumbers = [4, 11, 18, 25];
  for (let index = 0; index < fridays.length; index += 1) {
    let friday = fridays[index];
    let result = friday.classList.toggle("fridaySelected");

    if (result) friday.innerHTML = "SEXTOU !";
    else friday.innerHTML = daysNumbers[index];
  }
}
addFridayListener();

// Exercício 6:

function addMonthDaysListener() {
  const daysOfTheMonth = document.getElementsByClassName("day");
  for (let index = 0; index < daysOfTheMonth.length; index++) {
    daysOfTheMonth[index].addEventListener("mouseover", zoomDay);
    daysOfTheMonth[index].addEventListener("mouseout", zoomDay);
  }
}
function zoomDay(event) {
  number = event.target;
  if (event.type === "mouseover") number.style.fontSize = "25px";
  else number.style.fontSize = "22px";
}
addMonthDaysListener();

// Exercício 7:

function createTask(task) {
  const taskList = document.querySelector(".my-tasks");
  const taskElement = document.createElement("span");
  taskElement.innerHTML = task;
  taskList.appendChild(taskElement);
}

createTask("cozinhar");

// Exercício 8:

function addColor(color) {
  const divElement = document.createElement("div");
  const taskList = document.querySelector(".my-tasks");
  divElement.classList.add("task");
  divElement.style.backgroundColor = color;
  taskList.appendChild(divElement);
}
addColor("red");

// Exercício 9:

function addTaskListener() {
  const taskColor = document.getElementsByClassName("task");
  for (let index = 0; index < taskColor.length; index++) {
    taskColor[index].addEventListener("click", selectTask);
  }
}
function selectTask(event) {
  let task = event.target;
  return task.classList.toggle("selected");
}
addTaskListener();

// Exercício 10:

function addMonthDayColorChange() {
  const daysOfTheMonth = document.getElementsByClassName("day");
  for (let index = 0; index < daysOfTheMonth.length; index++) {
    daysOfTheMonth[index].addEventListener("click", changeDayColor);
  }
}
function changeDayColor(event) {
  let number = event.target;
  let result = number.classList.toggle("NumSelected");
  let selectedColor = document.querySelector(".selected").style.backgroundColor;
  console.log(selectedColor);
  if (result) number.style.color = selectedColor;
  else number.style.color = "rgb(119,119,119)";
}
addMonthDayColorChange();

// Bônus:

function addAppointmentsListener() {
  taskListBtn = document.getElementById("btn-add");
  input = document.getElementById("task-input");
  taskListBtn.addEventListener("click", addApointment);
  input.addEventListener("keydown", addApointment);
}

function addApointment(event) {
  inputText = document.getElementById("task-input").value;
  if (event.key === "Enter" || event.type === "click")
    addApointmentToList(inputText);
}
function addApointmentToList(text) {
  if (text === "") alert("Erro: Nada escrito");
  else {
    const taskList = document.querySelector(".task-list");
    const listElement = document.createElement("li");
    listElement.innerHTML = text;
    taskList.appendChild(listElement);
  }
}
addAppointmentsListener();

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode .
