function appendToDisplay(value) {
    document.getElementById('show').value += value;
}

function clearDisplay() {
    document.getElementById('show').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('show').value;
    document.getElementById('show').value = currentValue.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('show').value;

    try {
        // Using eval for simplicity, but be cautious with its security implications
        let result = eval(expression);
        document.getElementById('show').value = result;
    } catch (error) {
        document.getElementById('show').value = 'Error';
    }
}