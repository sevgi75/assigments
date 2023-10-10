let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate(operator) {
    switch (operator) {
        case '+':
            currentInput += '+';
            break;
        case '-':
            currentInput += '-';
            break;
        case '*':
            currentInput += '*';
            break;
        case '/':
            currentInput += '/';
            break;
        case '=':
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Hata';
            }
            break;
    }
    display.value = currentInput;
}
