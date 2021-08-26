let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercise 1

function exercise1() {
  numbers.forEach((number) => console.log(number));
}

// exercise 2

function exercise2() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// exercise 3

function exercise3() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// exercise 4

function exercise4() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let media = sum / numbers.length;
  if (media > 20) return "valor maior que 20";
  else return "valor menor ou igual a 20";
}

// exercise 5

function exercise5() {
  let maxNum = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) maxNum = numbers[i];
  }
  return maxNum;
}

// exercise 6

function exercise6() {
  let evenNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) evenNum++;
  }
  if (evenNum === 0) return "nenhum valor impar encontrado";
  else return evenNum;
}

// exercise 7

function exercise7() {
  let minNum = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum) minNum = numbers[i];
  }
  return minNum;
}

// exercise 8

function exercise8() {
  let arr = [];
  for (let i = 0; i < 25; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

// exercise 9

function exercise9() {
  array = exercise8();
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] / 2);
  }
  return true;
}
exercise9();
