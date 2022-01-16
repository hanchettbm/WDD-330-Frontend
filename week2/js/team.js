
function first_function() {
  
  const input = document.getElementById('first_input').value;

  const outputFirst = document.getElementById('first_output');

  outputFirst.innerHTML = 'You entered: ' + input;
}

function second_function() {
  const input = document.getElementById('second_input').value;
  const outputSecond = document.getElementById('second_output');

  const inputIsInt = parseInt(input);
  if (inputIsInt !== NaN) {
    outputSecond.innerHTML = 'total: ' + sum(inputIsInt);
  }
}
function sum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}


function add() {
  const third_number1 = document.getElementById('third_number1').value;
  const third_number2 = document.getElementById('third_number2').value;
  const outputThird = document.getElementById('third_output');
  const num1Float = parseFloat(third_number1);
  const num2Float = parseFloat(third_number2);
  if ((num1Float !== NaN) & (num2Float !== NaN)) {
    const total = num1Float + num2Float;
    outputThird.innerHTML = 'Total: ' + total;
  }
}


function getNum(numId) {
  const number = document.getElementById(numId).value;
  const numberFloat = parseFloat(number);
  if (numberFloat !== NaN) {
    return numberFloat;
  } else return 0;
}
function updateTotal(value) {
  const outputElement = document.getElementById('stretchOutput');
  outputElement.innerHTML = 'Total: ' + value;
}

function add2(num1, num2) {
  return num1 + num2;
}

const sub2 = function(num1, num2) {
  return num1 - num2;
};

const mult2 = (num1, num2) => num1 * num2;


function performOperation(operation) {
  
  const total = operation(
    getNum('stretchNumber1'),
    getNum('stretchNumber2')
  );
  updateTotal(total);
}