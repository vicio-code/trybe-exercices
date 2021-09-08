// Exercise 1

console.log("Exercise 1")
console.log(document.querySelector('#elementoOndeVoceEsta'))

// Exercise 2

console.log("Exercise 2")
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = "red")

// Exercise 3

console.log("Exercise 3")
console.log(document.querySelector('#primeiroFilhoDoFilho').innerText = "Um texto teste")

// Exercise 4

console.log("Exercise 4")
console.log(document.querySelector('#pai').firstElementChild)

// Exercise 5

console.log("Exercise 5")
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling)

// Exercise 6

console.log("Exercise 6")
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.innerText)

// Exercise 7

console.log("Exercise 7")
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling)

// Exercise 8

console.log("Exercise 8")
console.log(document.querySelector('#pai').lastElementChild.previousElementSibling)

// Exercise 9

function exercise9(){
    let elementoPai = document.querySelector("#pai")
    let novoIrmao = document.createElement('section')
    novoIrmao.setAttribute('id', 'irmaoCriadoAgora')
    novoIrmao.innerText = 'eu fui criado agora'
    elementoPai.appendChild(novoIrmao)
}
exercise9()

// Exercise 10

function exercise10(){
    let elementoPai = document.querySelector("#elementoOndeVoceEsta")
    let novoFilho = document.createElement('section')
    novoFilho.setAttribute('id', 'filhoCriadoAgora')
    novoFilho.innerText = 'eu sou o novo filho'
    elementoPai.appendChild(novoFilho)
}
exercise10()

// Exercise 11

function exercise11(){
    let elementoPai = document.querySelector("#primeiroFilhoDoFilho")
    let novoFilho = document.createElement('section')
    novoFilho.setAttribute('id', 'filhoDofilhoCriadoAgora')
    novoFilho.innerText = 'eu sou o novo filho do filho'
    elementoPai.appendChild(novoFilho)
}
exercise11()

// Exercise 12

console.log("Exercise 12")
console.log(document.querySelector('#filhoDofilhoCriadoAgora').parentNode.parentNode.nextElementSibling)