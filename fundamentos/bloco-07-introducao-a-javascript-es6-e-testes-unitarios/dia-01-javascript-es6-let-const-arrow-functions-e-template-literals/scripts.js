// Parte 1
// Ex 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

// testingScope(true);

// Ex 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortNum = (arr) => arr.sort((a, b) => a - b);

// console.log(`Os números ${sortNum(oddsAndEvens).join()} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Parte 2
// Ex 1

const factorial = (num) => (num == 1 ? num : num * factorial(num - 1));

// console.log(factorial(4));

// Ex 2

const longestWord = (str) => {
  let biggestWord = "";
  str.split(" ").forEach((word) => {
    if (word.length > biggestWord.length) biggestWord = word;
  });
  return biggestWord;
};

// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

let arr = [1, 2, 3, 4, 5];

function getEvenNumbers(array) {
  const evenNums = [];
  array.forEach((number) => {
    if (number % 2 === 0) evenNums.push(number);
  });
  return evenNums;
}

// console.log( getEvenNumbers(arr) ); // [2,4]

// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

const citiesAndStates1 = [
  {
    city: "Belo Horizonte",
    state: "Minas Gerais",
  },
  {
    city: "Salvador",
    state: "Bahia",
  },
  {
    city: "Porto Alegre",
    state: "Rio Grande do Sul",
  },
  {
    city: "Manaus",
    state: "Amazonas",
  },
];

function buildCitiesArray(array) {
  // Seu código aqui
  const result = [];
  array.forEach((obj) => {
    result.push(`${Object.values(obj)[0]} - ${Object.values(obj)[1]}`);
  });
  return result;
}

function buildCitiesArray2(array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const obj = array[index];
    result.push(`${Object.values(obj)[0]} - ${Object.values(obj)[1]}`);
  }
  return result;
}

// console.log(buildCitiesArray2(citiesAndStates));

// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que 18, falso caso contrário
// Ex: [20, 30, 19, 1, 50] => resultado esperado: false
// Ex: [20, 30, 19, 19] => resultado esperado: true

function allGreaterThan(number, array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const arrNum = array[index];
    if (arrNum > number) result.push(arrNum);
  }
  if (result.length === array.length) return true;
  return false;
}
//  console.log(allGreaterThan(18,[20, 30, 19, 21]))

// Desenvolva uma função que recebe como primeiro parâmetro um array contendo objetos com cidades e estados.
// Como segundo parâmetro ela recebe o nome de um estado.
// A função deverá retornar o primeiro objeto que contenha a propriedade state igual ao nome do estado recebido por parâmetro

// Exemplo do array
const citiesAndStates = [
  {
    city: "Belo Horizonte",
    state: "Minas Gerais",
  },
  {
    city: "Salvador",
    state: "Bahia",
  },
  {
    city: "Porto Alegre",
    state: "Rio Grande do Sul",
  },
  {
    city: "Ponta Grossa",
    state: "Paraná",
  },
  {
    city: "Manaus",
    state: "Amazonas",
  },
  {
    city: "Vitória da Conquista",
    state: "Bahia",
  },
  {
    city: "Curitiba",
    state: "Paraná",
  },
];

// Caso a função receba o array acima como primeiro parâmetro e a string 'Paraná' no parâmetro state, o resultado esperado é o objeto:
// { city: 'Ponta Grossa', state: 'Paraná' }

// Caso a função receba o array acima como primeiro parâmetro e a string 'Bahia' no parâmetro state, o resultado esperado é o objeto:
// { city: 'Salvador', state: 'Bahia' }

function getCityByState(array, state) {
  for (let index = 0; index < array.length; index++) {
    const obj = array[index];
    let citysAndStatesArray = Object.values(obj);
    if (citysAndStatesArray.includes(state)) return obj;
  }
}
// console.log(getCityByState(citiesAndStates, "Bahia"));

// Desenvolva uma função que recebe um array e retorna a soma de todos os números desse array
// Ex:
// array: [2, 3, 4, 6, 8, 12, 24]
// resultado esperado: 59

function sumAllNumbers(array) {
  // Seu código aqui
  let result = 0;
  for (let index = 0; index < array.length; index++) {
    const number = array[index];
    result += number;
  }
  return result;
}
// console.log(sumAllNumbers([2, 3, 4, 6, 8, 12, 24]))

function sumAllOdds(array) {
  // Seu código aqui
  let result = 0;
  for (let index = 0; index < array.length; index++) {
    const number = array[index];
    if (number % 2 === 1) result += number;
  }
  return result;
}
console.log(sumAllOdds([2, 3, 4, 5, 6, 8, 12, 24, 15]))