const addForm = document.getElementById("add-form")
const addResult = document.getElementById("add-result")

const substractForm = document.getElementById("substract-form")
const substractResult = document.getElementById("substract-result")

const multiplyForm = document.getElementById("multiply-form")
const multiplyResult = document.getElementById("multiply-result")

const divideForm = document.getElementById("divide-form")
const divideResult = document.getElementById("divide-result")

const moduloForm = document.getElementById("modulo-form")
const moduloResult = document.getElementById("modulo-result")

// -----------------------------------------------------------------------------
// BASIC FUNCTIONS

const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b
const modulo = (a, b) => a % b

// -----------------------------------------------------------------------------
// DOM FUNCTIONS

const addDOM = (event) => {
    event.preventDefault()
    const addFirst = Number(document.getElementById("add-first").value)
    const addSecond = Number(document.getElementById("add-second").value)
    if (addFirst && addSecond) addResult.innerHTML = add(addFirst, addSecond)
}

const substractDOM = (event) => {
    event.preventDefault()
    const substractFirst = Number(document.getElementById("substract-first").value)
    const substractSecond = Number(document.getElementById("substract-second").value)
    if (substractFirst && substractSecond) substractResult.innerHTML = substract(substractFirst, substractSecond)
}

const multiplyDOM = (event) => {
    event.preventDefault()
    const multiplyFirst = Number(document.getElementById("multiply-first").value)
    const multiplySecond = Number(document.getElementById("multiply-second").value)
    if (multiplyFirst && multiplySecond) multiplyResult.innerHTML = multiply(multiplyFirst, multiplySecond)
}

const divideDOM = (event) => {
    event.preventDefault()
    const divideFirst = Number(document.getElementById("divide-first").value)
    const divideSecond = Number(document.getElementById("divide-second").value)
    if (divideFirst && divideSecond) divideResult.innerHTML = divide(divideFirst, divideSecond)
}

const moduloDOM = (event) => {
    event.preventDefault()
    const moduloFirst = Number(document.getElementById("modulo-first").value)
    const moduloSecond = Number(document.getElementById("modulo-second").value)
    if (moduloFirst && moduloSecond) moduloResult.innerHTML = modulo(moduloFirst, moduloSecond)
}

// -----------------------------------------------------------------------------
// EVENT LISTENERS

addForm.addEventListener("submit", addDOM)
substractForm.addEventListener("submit", substractDOM)
multiplyForm.addEventListener("submit", multiplyDOM)
divideForm.addEventListener("submit", divideDOM)
moduloForm.addEventListener("submit", moduloDOM)