const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  // escreva seu código aqui
  const spreadNames = (acc, curr) => {
    return [...acc, ...curr];
  };
  const countA = (acc, curr) => {
    console.log(acc, curr)
    if (curr.toUpperCase() === "A") acc++;
    return acc
  };
  const letters = names.reduce(spreadNames);

  return letters.reduce(countA, 0);
}

containsA();
