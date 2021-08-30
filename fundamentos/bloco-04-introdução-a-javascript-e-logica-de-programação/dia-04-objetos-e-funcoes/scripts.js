let name = "Marta";
let lastName = "Silva";
let age = 34;
let medals = { golden: 2, silver: 3 };

// Exercise Objects 1

let player = {
  name: name,
  lastName: lastName,
  age: age,
  medals: medals,
};

// Exercise Objects 2

console.log(
  `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`
);

// Exercise Objects 3

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Exercise Objects 4

console.log(
  `A jogadora ${player.name} ${player.lastName} goi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`
);

// Exercise Objects 5

console.log(
  `A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`
);
