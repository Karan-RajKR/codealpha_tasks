let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value); // ⚠️      1  only for simple project
  } catch {
    display.value = 'Error';
  }
}

// Bonus: Keyboard support
document.addEventListener('keydown', (event) => {
  if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/', '.'].includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === 'Enter') {
    calculateResult();
  } else if (event.key === 'Backspace') {
    deleteLast();
  } else if (event.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
