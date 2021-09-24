const countEl = document.getElementById('count')
const btnEl = document.getElementById('btn')
let counter = 0

function addCounter(){
    counter++
    countEl.innerText = `${counter} Cliques`
    console.log('que passa?')
}

btnEl.addEventListener('click', addCounter)