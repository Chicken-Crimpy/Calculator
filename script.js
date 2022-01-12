function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return (a/b).toFixed(2);    
    }
};

const display = document.querySelector(".display");
let onScreen = display.innerText;
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (onScreen == "--------") {
            onScreen = e.target.innerText;
            display.innerText = onScreen;
        } else {
            onScreen += e.target.innerText;
            display.innerText = onScreen;
        }
    })
})

const clear = document.querySelector(".clear");

let firstNumber = "";
let lastClicked = "";

clear.addEventListener("click", (e) => {
    onScreen = "--------";
    firstNumber = undefined;
    lastClicked = "";
    display.innerText = onScreen;
})

const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
    op.addEventListener("click", (e) => {
        if (lastClicked == "") {
            lastClicked = e.target.innerText;
            firstNumber = onScreen;
            onScreen = "--------"
            display.innerText = onScreen;
        } else {
            onScreen = operate(lastClicked, parseInt(firstNumber), parseInt(onScreen));
            display.innerText = onScreen;
            firstNumber = onScreen;
            onScreen = "--------"
        }
    })
})

document.querySelector(".equals").addEventListener("click", (e) => {
    onScreen = operate(lastClicked, parseInt(firstNumber), parseInt(onScreen));
    display.innerText = onScreen;
    firstNumber = onScreen;
    lastClicked = "";
})