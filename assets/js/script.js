document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"];
    const calculatorButtons = document.getElementById("calculator-buttons");
    // Create Calculator Buttons
    // Initialise Calculation Variables
    // Handle Button Clicks
});

//Creating Caluclator Buttons
buttons.forEach(button => {
    const btnElement = document.createElement("button");
    btnElement.textContent = button;
    btnElement.classList.add("btn", button === "=" || button === "C" ? "btn-danger" : "btn-primary");
    btnElement.addEventListener("click", function () {
        handleButtonClick(button);
    });
    calculatorButtons.appendChild(btnElement);
});

//Initialise Variables
let operand1 = "";
let operand2 = "";
let operator = "";

//Handle Button Clicks
function handleButtonClick(button) {
    const display = document.getElementById("display");

    // ... code for handling the button clicks
    if (button >= "0" && button <= "9") {
        operand2 += button;
        display.value = operand2;
    }

    else if (["+", "-", "*", "/"].includes(button)) {
        operator = button;
        operand1 = operand2;
        operand2 = "";
    }

    else if (button === "C") {
        operand1 = operand2 = operator = "";
        display.value = "";
    }

    else if (button === "=") {
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);
        let result = 0;
        switch (operator) {
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
            case "*":
                result = operand1 * operand2;
                break;
            case "/":
                result = operand1 / operand2;
                break;
        }
        display.value = result;
        operand1 = result;
        operand2 = "";
    }


}

