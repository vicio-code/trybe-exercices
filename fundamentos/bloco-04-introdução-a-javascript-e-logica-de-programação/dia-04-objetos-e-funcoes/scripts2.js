// Exercise For/in 1

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};
for (let name in names) {
  console.log(`Olá ${names[name]}`);
}

// Exercise For/in 2

let cars = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};
for (let feat in cars) {
  console.log(`key: ${feat} value: ${cars[feat]}`);
}
