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

function checkDate() {}

function checkFields() {}

function handleSubmit(event) {
  // const checkFields = checkFields();
  // if (checkFields === true) createCurriculum();
  event.preventDefault();
  console.log(document.getElementsByClassName("was-validated"));
}

function addListner() {
  submit.addEventListener("click", handleSubmit);
}

window.onload = () => {
  addListner();
};
