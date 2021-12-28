console.log('Contador');

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var buttonAdicionarWrapper = document.getElementsByName('adicionar')[0];
var buttonSubtrairWrapper = document.getElementsByName('subtrair')[0];

buttonAdicionarWrapper.addEventListener('click', testarBotao);
buttonSubtrairWrapper.addEventListener('click', testarBotao);

function testarBotao() {
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = '';
    } else {
        currentNumberWrapper.style.color = 'red';
    }
    buttonAdicionarWrapper.removeAttribute('disabled');
    buttonSubtrairWrapper.removeAttribute('disabled');
    if (currentNumber >= 10) {
        buttonAdicionarWrapper.setAttribute('disabled', 'disabled');
    }
    if (currentNumber <= -10) {
        buttonSubtrairWrapper.setAttribute('disabled', 'disabled');
    }
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;    
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;    
}