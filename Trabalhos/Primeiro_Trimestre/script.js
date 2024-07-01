// Seleciona o elemento de display
let display = document.getElementById('display');

// Limpa o display
function clearDisplay() {
    display.value = '';
}

// Deleta o último caractere do display
function deleteLast() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

// Adiciona um caractere ao display
function appendCharacter(char) {
    display.value += char;
}

// Calcula o resultado da expressão no display
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Adiciona event listeners para teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Números e operadores
    if (!isNaN(key) || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
        appendCharacter(key);
    }

    // Backspace
    if (key === 'Backspace') {
        deleteLast();
    }

    // Enter para calcular
    if (key === 'Enter') {
        calculateResult();
    }

    // Previne comportamentos padrões de teclas não numéricas
    if (isNaN(key) && key !== '.' && key !== '/' && key !== '*' && key !== '-' && key !== '+' && key !== 'Backspace' && key !== 'Enter') {
        event.preventDefault();
    }
});
