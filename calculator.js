const display = document.getElementById('display');
        let currentInput = '0';
        let isResultDisplayed = false;
        
        function updateDisplay() {
            display.innerText = currentInput;
        }
        
        function clearDisplay() {
            currentInput = '0';
            isResultDisplayed = false;
            updateDisplay();
        }
        
        function deleteDigit() {
            currentInput = currentInput.slice(0, -1) || '0';
            updateDisplay();
        }
        
        function appendNumber(number) {
            if (isResultDisplayed) {
                currentInput = number;
                isResultDisplayed = false;
            } else if (currentInput === '0' && number !== '.') {
                currentInput = number;
            } else {
                currentInput += number;
            }
            updateDisplay();
        }
        
        function appendOperator(operator) {
            if (isResultDisplayed) {
                isResultDisplayed = false;
            }
            if (!/[+\-*/]$/.test(currentInput)) {
                currentInput += operator;
            } else {
                currentInput = currentInput.slice(0, -1) + operator;
            }
            updateDisplay();
        }
        
        function calculate() {
            try {
                currentInput = eval(currentInput).toString();
                isResultDisplayed = true;
            } catch {
                currentInput = 'Error';
            }
            updateDisplay();
        }
        
        function toggleSign() {
            if (currentInput.startsWith('-')) {
                currentInput = currentInput.slice(1);
            } else if (currentInput !== '0') {
                currentInput = '-' + currentInput;
            }
            updateDisplay();
        }
        
        function percentage() {
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateDisplay();
        }
