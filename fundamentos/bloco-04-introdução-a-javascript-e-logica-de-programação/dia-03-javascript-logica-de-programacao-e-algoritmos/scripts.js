// Exercise 1

function exercise1(num) {
  let str = "";
  let lines = num;
  function makeString(n) {
    for (let i = 0; i < n; i++) {
      str = str.concat("*");
    }
  }
  function printLines(n) {
    for (let i = 0; i < n; i++) {
      console.log(str);
    }
  }
  makeString(lines);
  printLines(lines);
}

// Exercise 2

function exercise2(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str = str.concat("*");
    console.log(str);
  }
}

// Exercise 3

function exercise3(num) {
  let str = "";
  let lines = num;
  function makeString(n) {
    for (let i = 0; i < n; i++) {
      str = str.concat(" ");
    }
  }
  function printLines(n) {
    for (let i = 0; i < n; i++) {
      str = str.slice(1).concat("*");
      console.log(str);
    }
  }
  makeString(lines);
  printLines(lines);
}

// Exercise 4

function exercise4(num) {
  let str = "";
  let space = " ";

  function makePiramid() {
    str = space.repeat(Math.ceil(num / 2) - 1);
    if (num % 2 === 0) str = str.concat("**");
    else str = str.concat("*");
    console.log(str);
    for (let i = 1; i < Math.ceil(num / 2); i++) {
      str = str.slice(1).concat("**");
      console.log(str);
    }
  }
  makePiramid();
}

// Exercise 5

function exercise5(num) {
  let space = " ";
  let spaceStart = space.repeat(Math.ceil(num / 2) - 1);
  let spaceMiddle = "";
  let piramidButtom = "";
  let n = 1;

  console.log(spaceStart.concat("*"));

  for (let i = 1; i < Math.ceil(num / 2) - 1; i++) {
    spaceStart = spaceStart.slice(1);
    spaceMiddle = space.repeat(n);
    n += 2;
    console.log(spaceStart + "*" + spaceMiddle + "*");
  }
  for (let i = 0; i < num; i++) {
    piramidButtom = piramidButtom.concat("*");
  }
  console.log(piramidButtom);
}

// Exercise 6

function exercise6(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return console.log("Não é primo");
  }
  return console.log("É primo");
}
