const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");
const elementList = [firstLi, secondLi, thirdLi];
window.onload = function () {
  createListener();
  addInputListener();
  addMyWebpageListener();
  addH1Listner();
};

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function createListener() {
  elementList.forEach((element) =>
    element.addEventListener("click", addTechClass)
  );
}
function addTechClass(event) {
  event.target.classList.add("tech");
  removeListener(event);
}
function removeListener(event) {
  elementList.forEach((element) => {
    if (element !== event.target) element.classList.remove("tech");
  });
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function addInputListener() {
  input.addEventListener("keyup", changeTechText);
}
function changeTechText() {
  techElement = document.getElementsByClassName("tech")[0];
  techElement.innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

function addMyWebpageListener() {
  myWebpage.addEventListener("dblclick", redirect);
}
function redirect() {
  window.open("https://www.betrybe.com/", "_blank").focus();
}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function addH1Listner() {
  h1Element = document.getElementsByTagName("h1")[0];
  h1Element.addEventListener("mouseover", changeColor);
  h1Element.addEventListener("mouseout", changeColor);
}
function changeColor(event) {
  h1Element = document.getElementsByTagName("h1")[0];
  if (event.type === "mouseover") h1Element.style.color = "#006dfb";
  else h1Element.style.color = "#2fc18c";
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
