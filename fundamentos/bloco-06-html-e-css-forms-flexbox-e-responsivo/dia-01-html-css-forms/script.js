const select = document.getElementById("state");
const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
  "DF",
];
const dateEle = document.getElementById("date");
const submit = document.getElementById("submit");

for (let index = 0; index < states.length; index++) {
  const state = states[index];
  const option = document.createElement("option");
  option.innerText = state;
  select.appendChild(option);
}

function checkDateFormat(date) {
  if ((date[2] === date[5]) === "/") return true;
  return false;
}

function checkDate() {
  let date = dateEle.value;
  if (date.length === 10 && checkDateFormat(date)) {
    const day = parseInt(date.slice(0, 2));
    const month = parseInt(date.slice(3, 5));
    const year = parseInt(date.slice(6));
    if (day < 0 || day > 31) return alert("dia invalido");
    if (month < 0 || month > 12) return alert("mês invalido");
    if (year < 0) return alert("ano invalido");
    return true;
  }
  return alert("formato de data invalido");
}

function checkFields() {}

function handleSubmit(event) {
  event.preventDefault();
  const checkFields = checkFields();
  if (checkFields === true) createCurriculum();
}

function addListner() {
  submit.addEventListener("click", handleSubmit);
}

window.onload = () => {
  addListner();
};
