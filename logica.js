var result = document.getElementById('result');
var operator = '';
var operand1 = '';
var operand2 = '';

function addNumber(number) {
    if (operator == '') {
        operand1 += number;
        result.value = operand1;
    } else {
        operand2 += number;
        result.value = operand2;
    }
}

function addOperator(op) {
    if (operator == '') {
        operator = op;
    } else {
        calculate();
        operator = op;
    }
}

function clearResult() {
    operator = '';
    operand1 = '';
    operand2 = '';
    result.value = '';
}

function calculate() {
    if (operand1 != '' && operand2 != '') {
        var op1 = parseFloat(operand1);
        var op2 = parseFloat(operand2);
        switch (operator) {
            case '+':
                result.value = op1 + op2;
                break;
            case '-':
                result.value = op1 - op2;
                break;
            case '*':
                result.value = op1 * op2;
                break;
            case '/':
                result.value = op1 / op2;
                break;
        }
        operand1 = result.value;
        operand2 = '';
    }
}