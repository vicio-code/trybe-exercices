const wakeUp = () => 'Acordando!!'
const coffeeTime = () => 'Bora tomar café!!'
const sleepTime = () => 'Partiu dormir!!'

const doingThings = (time) => console.log(time())

const createEmployees = (employee) => {
    const name = employee
    let email = ""
    const emailAux = employee.split(' ')
    for (let index = 0; index < emailAux.length; index++) {
        const name = emailAux[index];
        email += `${name}_`
    }
    email = email.slice(0, email.length - 1)
    email += '@trybe.com'
    const employeeObj = {
        nomeCompleto: name,
        email
    }
    return employeeObj
}

const newEmployees = () => {
    const employees = {
      id1: createEmployees('Pedro Guerra'),
      id2: createEmployees('Luiza Drumond'),
      id3: createEmployees('Carla Paiva'),
      id4: createEmployees('Lucca Martini Falbo da Silva Sauro')
    }
    return employees;
};

const isEqual = (num1, num2) => {
    if(num1 === num2) return true
    return false
}

const drawResult = (playerNum, checkWinner) => {
    const winningNum = Math.floor(Math.random() * 5) +1
    console.log(winningNum)
    if (checkWinner(playerNum, winningNum)) return 'Parabéns você ganhou'
    return 'Tente novamente'
}

// console.log(drawResult(1, isEqual))

const getScore = (answers, studantAnswers, result) => result(answers, studantAnswers)

const sumScore = (rightAns, stuAns) => {
    let score = 0
    for (let index = 0; index < rightAns.length; index++) {
        const right = rightAns[index];
        const student = stuAns[index];
        if(student === 'N.A') score += 0
        else if (right === student) score += 1
        else score -= 0.5
    }
    return score
}
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(getScore(RIGHT_ANSWERS,STUDENT_ANSWERS,sumScore))