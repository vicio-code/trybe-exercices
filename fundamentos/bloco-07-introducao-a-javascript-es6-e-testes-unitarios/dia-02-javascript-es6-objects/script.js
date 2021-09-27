// // Parte 1
// // Exercise 1

// const order = {
//   name: "Rafael Andrade",
//   phoneNumber: "11-98763-1416",
//   address: {
//     street: "Rua das Flores",
//     number: "389",
//     apartment: "701",
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: "Coca-Cola Zero",
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: "Ana Silveira",
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// // Note que o parâmetro da função já está sendo passado na chamada da função.

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   return console.log(
//     `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
//   );
// };

// customerInfo(order);

// // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// // Modifique o nome da pessoa compradora.
// // Modifique o valor total da compra para R$ 50,00.

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   order.name = "Luiz Silva";
//   const price = (order.payment.total = "50,00");
//   const [pizza1, pizza2] = [
//     Object.keys(order.order.pizza)[0],
//     Object.keys(order.order.pizza)[1],
//   ];
//   return console.log(
//     `Olá ${order.name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${order.order.drinks.coke.type} é R$ ${price}.`
//   );
// };

// orderModifier(order);

// Part 2

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const exercise1 = (modObj, newKey, keyValue) => {
  modObj[newKey] = keyValue;
};
exercise1(lesson2, "turno", "noite");

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const exercise2 = (obj) => console.log(Object.keys(obj));

// Crie uma função para mostrar o tamanho de um objeto.

const exercise3 = (obj) => console.log(Object.keys(obj).length);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const exercise4 = (obj) => console.log(Object.values(obj));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = {};
Object.assign(allLessons, { lesson1 }, { lesson2 }, { lesson3 });

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const exercise6 = (obj) => {
  const keys = Object.keys(obj);
  let students = 0;
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const value = obj[key].numeroEstudantes;
    students += value;
  }
  return students;
};

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueByNumber = (obj, index) => {
  return Object.entries(obj)[index][1];
};

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

const verifyPair = (obj, pair1, pair2) => {
  const entries = Object.entries(obj);
  let result = false;
  entries.forEach((pair) => {
    if (pair[0] === pair1 && pair[1] === pair2) result = true;
  });
  return result;
};
