const firstNum = 45;
const secondNum = 5;
const thirdNum = 9;

//Exercise - 1

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function mod(a, b) {
  return a % b;
}

//Exercise - 2

function greater(a, b) {
  if (a > b) return a;
  else return b;
}

//Exercise - 3

function greaterOfThree(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > c && b > a) return b;
  else return c;
}

//Exercise - 4

function numberSign(a) {
  if (a > 0) return "positive";
  else if (a < 0) return "negative";
  else return "zero";
}

//Exercise - 5

function isTriangle(a, b, c) {
  if (a < 0 || b < 0 || c < 0) return "Error";
  else if (a + b + c === 180) return true;
  else return false;
}

//Exercise - 6

function chessGuide(piece) {
  let expression = piece;
  expression = expression.toLowerCase();
  switch (expression) {
    case "peon":
      return "moves foward one space";
      break;
    case "bishop":
      return "moves diagonals";
      break;
    case "rook":
      return "moves foward or sideways";
      break;
    case "knight":
      return "moves L shape";
      break;
    case "queen":
      return "moves any direction";
      break;
    case "king":
      return "moves any direction one space";
      break;
    default:
      return "not a piece of chess";
  }
}

//Exercise - 7

function note(a) {
  if (a > 100 || a < 0) return "invalid note";
  else if (a >= 90) return "A";
  else if (a >= 80) return "B";
  else if (a >= 70) return "C";
  else if (a >= 60) return "D";
  else if (a >= 50) return "E";
  else if (a < 50) return "F";
}

//Exercise - 8

function isAnyEven(a, b, c) {
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) return true;
  else return false;
}

//Exercise - 9

function isAnyOdd(a, b, c) {
  if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) return true;
  else return false;
}

//Exercise - 10

function thousandProfit(a, b) {
  if (a < 0 || b < 0) return "Numbers must be greater then zero";
  totalCost = 1000 * (a + a / 5);
  profit = b * 1000 - totalCost;
}

//Exercise - 11

function liquidSalary(salary) {
  let inssReduction;
  let ir;
  let bruteSalary = salary * 100;

  if (bruteSalary <= 155694)
    inssReduction = bruteSalary - Math.floor(bruteSalary * 0.08);
  else if (bruteSalary >= 155695 && bruteSalary <= 259492)
    inssReduction = bruteSalary - Math.floor(bruteSalary * 0.09);
  else if (bruteSalary >= 259493 && bruteSalary <= 518982)
    inssReduction = bruteSalary - Math.floor(bruteSalary * 0.11);
  else inssReduction = bruteSalary - 57088;

  if (inssReduction <= 190398) ir = 0;
  else if (inssReduction >= 190398 && inssReduction <= 282665)
    ir = Math.floor(inssReduction * 0.075) - 14280;
  else if (inssReduction >= 282666 && inssReduction <= 375105)
    ir = Math.floor(inssReduction * 0.15) - 35480;
  else if (inssReduction >= 375105 && inssReduction <= 466468)
    ir = Math.floor(inssReduction * 0.225) - 63613;
  else ir = Math.floor(inssReduction * 0.275) - 86936;
  return (inssReduction - ir) / 100;
}
