const emailListInData = [
  "roberta@email.com",
  "paulo@email.com",
  "anaroberta@email.com",
  "fabiano@email.com",
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

// emailListInData.forEach((email) => showEmailList(email));

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const found = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return found;
};

// console.log(findDivisibleBy3And5());

// const names = ["João", "Irene", "Fernando", "Maria"];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => name.length === 5);
};

// console.log(findNameWithFiveLetters());

const musicas = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((musica) => musica.id === id);
}

// console.log(findMusic("31031685"));

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((element) => element === name);
};

// console.log(hasName(names, "Ana"));

// const people = [
//   { name: "Mateus", age: 18 },
//   { name: "José", age: 19 },
//   { name: "Ana", age: 23 },
//   { name: "Cláudia", age: 20 },
//   { name: "Bruna", age: 19 },
// ];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((person) => person.age >= minimumAge);
};

// console.log(verifyAges(people, 18));

const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// Adicione se código aqui

const compare = (a, b) => {
  const ageA = a.age;
  const ageB = b.age;
  if (ageA < ageB) return 1;
  if (ageA > ageB) return -1;
  return 0;
};

console.log(people.sort(compare));
