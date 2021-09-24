const skills = ["js", "css", "html", "react", "bumbum"];

function changeX(str, word) {
  let newWord = "";
  for (let index = 0; index < str.length; index++) {
    const letter = str[index];
    if (letter === "x") newWord = newWord.concat(word);
    else newWord = newWord.concat(letter);
  }
  return newWord;
}

function skillsPhrase(str) {
  let phrase = `${str} Minhas cinco principais habilidades são:
    `;
  const ordedSkills = skills.sort();
  ordedSkills.forEach((skill) => {
    phrase = phrase.concat(`${skill};
    `);
  });
  return console.log(phrase);
}
skillsPhrase(changeX("Tryber x aqui!", "Bebeto"));
