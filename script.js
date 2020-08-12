function add(num1, num2) {
    return num1+num2;
}

//array.reduce((total, number) => total+= number);

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(array) {
    for(i=0; i<array.length; i++) {
        if (array[i]=='+') {
            return sum(array[i-1], array[i+1]);
        }
        else if (array[i]=='-') {
            return subtract(array[i-1], array[i+1]);
        }
        else if (array[i]=='*' || array[i]=='x') {
            return multiply(array[i-1], array[i+1]);
        }
        else if (array[i]=='/') {
            return divide(array[i-1], array[i+1]);
        }
    return array[i];
    }
}

function updateDisplay() {

}

displayValue = [5*7+6/7+6];

console.log(operate(displayValue));