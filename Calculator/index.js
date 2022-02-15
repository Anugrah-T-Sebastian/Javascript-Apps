let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let resultEl = document.getElementById("result-el");

function add() {
    let sum = num1 + num2;
    resultEl.textContent = "Sum: " + sum;
}

function subtract() {
    let difference = num1 - num2;
    resultEl.textContent = "Difference: " + difference;
}

function multiply() {
    let product = num1 * num2;
    resultEl.textContent = "Product: " + product;
}

function divide() {
    let quotient = num1 / num2;
    resultEl.textContent = "Quotient: " + quotient;
}