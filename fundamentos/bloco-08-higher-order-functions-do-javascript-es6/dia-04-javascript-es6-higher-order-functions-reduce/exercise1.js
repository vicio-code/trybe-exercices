const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  const reducer = (previousValue, currentValue) => previousValue.concat(currentValue);
  return arrays.reduce(reducer)
}

console.log(flatten());
