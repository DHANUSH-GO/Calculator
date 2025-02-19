const display = document.getElementById("display");
const MAX_LENGTH = 10; 

function append(input) {
    
    if (display.value.length < MAX_LENGTH) {
        display.value += input;
    }
}

function calculate() {
    try {
        let result = eval(display.value);
       
        let resultStr = result.toString();
        while (resultStr.length > MAX_LENGTH) {
            
            resultStr = resultStr.slice(0, MAX_LENGTH);
        }
        display.value = resultStr;
    } catch (error) {
        display.value = "Error";
    }
}

function clearit() {
    display.value = "";
}