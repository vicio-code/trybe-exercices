let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// Exercise 1

function exercise1() {
  console.log(`Bem vinda, ${info.personagem}`);
}

// Exercise 2

function exercise2() {
  info.recorrente = "Sim";
  console.log(info);
}

// Exercise 3

function exercise3() {
  exercise2();
  for (let keys in info) {
    console.log(keys);
  }
}

// Exercise 4

function exercise4() {
  exercise2();
  for (let keys in info) {
    console.log(info[keys]);
  }
}

// Exercise 5

function exercise5() {
  info.recorrente = "Sim";
  let scrouge = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  };
  console.log(`${info.personagem} e ${scrouge.personagem}`);
  console.log(`${info.origem} e ${scrouge.origem}`);
  console.log(`${info.nota} e ${scrouge.nota}`);
  if (info.recorrente === "Sim" && scrouge.recorrente === "Sim")
    console.log("Ambos recorrentes");
}
