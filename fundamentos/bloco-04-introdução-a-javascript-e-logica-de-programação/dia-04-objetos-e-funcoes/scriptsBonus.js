// Exercise Bonus 1

function romanNumeral(str) {
  let upperStr = str.toUpperCase();
  let numTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let prevNum = 0,
    currentNum,
    sum = 0;
  for (let i = 0; i < str.length; i++) {
    currentNum = numTable[upperStr[i]];
    if (currentNum <= prevNum) sum += currentNum;
    else sum = Math.abs(sum - prevNum * 2 + currentNum);
    prevNum = currentNum;
  }
  return console.log(sum);
}

// Exercise Bonus 2

function arrayOfNumbers(vector) {
  flattened = vector.flat();
  result = [];
  for (let i = 0; i < flattened.length; i++) {
    if (flattened[i] % 2 === 0) result.push(flattened[i]);
  }
  return console.log(result);
}

// Exercise Bonus 3

function arrayCount(arr) {
  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) counter[arr[i]]++;
    else counter[arr[i]] = 1;
  }
  return counter;
}

function displayBasket(arr) {
  let string = "Sua cesta possui: ";
  let basket = arrayCount(arr);
  for (let fruit in basket) {
    string = string.concat(`${basket[fruit]} ${fruit}s, `);
  }
  return console.log(string);
}
