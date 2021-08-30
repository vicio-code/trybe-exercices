// Exercise 1

function isPalyndrome(word) {
  let inversedWord = [...word].reverse().join("");
  if (word !== inversedWord) return console.log(false);
  else return console.log(true);
}

// Exercise 2

function exercise2(arr) {
  let highestNum = -Infinity;
  for (let index in arr) {
    if (arr[index] > highestNum) {
      highestNum = arr[index];
    }
  }
  return console.log(arr.indexOf(highestNum));
}

// Exercise 3

function exercise3(arr) {
  let lowestNum = Infinity;
  for (let index in arr) {
    if (arr[index] < lowestNum) {
      lowestNum = arr[index];
    }
  }
  return console.log(arr.indexOf(lowestNum));
}

// Exercise 4

function mostLetterName(arr) {
  let highestName = "";
  for (let name in arr) {
    if (arr[name].length > highestName.length) highestName = arr[name];
  }
  return console.log(highestName);
}

// Exercise 5

function repetitionNum(arr) {
  let counter = {};
  let highestNum = -Infinity;
  let result;
  for (let num of arr) {
    if (!counter[num]) counter[num] = 1;
    else counter[num]++;
  }
  for (const [key, value] of Object.entries(counter)) {
    if (value > highestNum) {
      highestNum = value;
      result = key;
    }
  }
  return console.log(result);
}

// Exercise 6

function somatory(num) {
  let sum = 0;
  for (let i = num; i > 0; i--) sum += i;
  return console.log(sum);
}

// Exercise 7

function checkWordEnd(word, end) {
  if (word.slice(word.length - end.length) === end) return console.log(true);
  else return console.log(false);
}
