let result=0;
let num = 0, num1, num2;
let operator = '';
let operatorSign = '';
let displayValue = '';
const history = document.getElementById('history');
const resultValue = document.getElementById('result');
updateScreen();

//Arrow functions for operations
const add = (num1, num2) => result = num1+num2;
const subtract = (num1, num2) => result = num1-num2;
const multiply = (num1, num2) => result = num1*num2;
const divide = (num1, num2) => result = num1/num2;

//Checks operator, operates and returns result
const operate = ((num1, operator, num2) => {
    operator == "+" ? add(num1, num2) :
    operator == "-" ? subtract(num1, num2) :
    operator == "×" ? multiply(num1, num2) :
    operator == "÷" ? divide(num1, num2) : result = "Error";
});

function updateScreen() {
    history.innerHTML = displayValue;
    resultValue.innerHTML = result;
}

function inputCheck(e) {

    if (this.id == "+" || this.id == "-" || this.id == "×" || this.id == "÷") {
        operator = this.id;
        num1 = Number(num);
        num=0;
        displayValue += this.id;
        console.log("Num1: " + num1);
    }
    else if (this.id == "equals") {
        num2 = Number(num);
        operate(num1, operator, num2);
        updateScreen();
    }
    else if (this.id == "backspace") {
        num = num.slice(0, num.length-1);
        displayValue = displayValue.slice(0, displayValue.length-1);
        updateScreen();
    }
    else if (this.id == "clear") {
        result = 0;
        num = 0;
        num1 = 0;
        num2 = 0;
        displayValue = '';
        updateScreen();
    }
    else {
        num += this.id;
        displayValue += this.id;
        console.log(num);
    }
    updateScreen();
}

//Add event listeners, returns button value
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', inputCheck));