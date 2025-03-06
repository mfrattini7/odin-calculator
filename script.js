let displayEl = document.getElementById("display");

function display(input) {
    displayEl.value += input;
}

function clearDisplay() {
    displayEl.value = "";
}

function calculate() {
    displayEl.value = eval(displayEl.value);
}

function unreachable() {
    throw Error("This should never happen...");
}
