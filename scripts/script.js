var inputValue = document.getElementById("inputNumber");

inputValue.value = 0; // default setting

function writeNumber(number) {
    number = (typeof number !== 'undefined') ?  number : 0;
    inputValue.value = number;
}
function getValue(obj) {
    if (getType(obj.value) === 'number'){
        obj.value = + obj.value //convert to number
    } else if (getType(obj.value) === 'string'){
        obj.value = getSymbol();
    }
    return writeNumber(obj.value)
}

function getType(objValue) {
    if ( typeof objValue === 'number'){
        return 'number';
    } else if ( typeof objValue === 'string'){
        return 'string'
    } else {
        return 'error type'
    }
}
function getSymbol() {

    switch(objValue){

        // Symbol operation
        case "C":
            return operation('symbol',objValue);
        case ".":
            return operation('symbol',objValue);
        case "del":
            return operation('symbol',objValue);

        // Math operation
        case "-":
            return operation('math',objValue);
        case "+":
            return operation('math',objValue);
        case "^":
            return operation('math',objValue);
        case "%":
            return operation('math',objValue);
        case "/":
            return operation('math',objValue);
        case "x":
            return operation('math',objValue);
        case "=":
            return operation('math',objValue);
    }
}
function operation(operationType, symbol) {
    if (operationType === 'math'){
        mathOperation(symbol);
    }else if (operationType ==='symbol'){
        symbolOperation(symbol);
    }
}
function mathOperation(number) {

}
function symbolOperation(symbol) {

}