var input = [0,"",0,0]; // [number 1, operation, number 2, result]
var i = 0; // num i , num1 -> i=0 , num2 -> i=2

input[i] = document.getElementById("inputNumber");
input[i].value = 0;

function getValue(obj) {

    var compare = + obj.value; //convert to number; string -> convert -> NaN .

    if (isNaN(compare)){
        // true if obj.value - string
        symbolOperation(obj.value);
    } else {
        // false if obj.value - number
        numberOperation(obj.value);
    }
}


function numberOperation(number) {

        number.toString();
        input[i].value.toString();
        input[i].value += number;

}

function symbolOperation(symbol){

    symbol.toString();
    input[i].value.toString();

    switch (symbol){

        case "C":
            input[i].value = 0;
            break;

        case ".":
            input[i].value += '.';
            break;

        case "del":
            input[i].value = input[i].value.substring(0, input[i].value.length - 1); //del last num
            break;


        // Math operation
        case "-":
            input[1] = "-";
            input[i] = input[i].value;
            i = i+2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "+":
            input[1] = "+";
            input[i] = input[i].value;
            i = i+2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "^":
            input[1] = "^";
            input[i] = input[i].value;
            i = i+2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "%":
            input[1] = "%";
            input[i] = input[i].value;
            i = i + 2;
            // num 2 input
            input[2] =  document.getElementById("inputNumber");
            input[2].value = 0;
            break;

        case "/":
            input[1] = "/";
            input[i] = input[i].value;
            i = i + 2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "x":
            input[1] = "x";
            input[i] = input[i].value;
            i = i + 2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "=":
            input[i] = input[i].value;
            mathOperation();
            break;

        // ver 1.0.1
        case "sin":
            input[1] = "sin";
            input[i] = input[i].value;
            i = i+2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "cos":
            input[1] = "cos";
            input[i] = input[i].value;
            i = i+2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "tan":
            input[1] = "tan";
            input[i] = input[i].value;
            i = i+2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "ln":
            input[1] = "ln";
            input[i] = input[i].value;
            i = i+2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;

        case "e":
            input[1] = "e";
            input[i] = input[i].value;
            i = i+2;
            // num 2 input
            input[i] =  document.getElementById("inputNumber");
            input[i].value = 0;
            break;
    }
}

function mathOperation(objValue) {


    var num1 = input[0];
    var num2 = input[2];
    var oper = input[1];
    var res  = null;
    var resInput = document.getElementById("inputNumber");
    num1 = + num1;
    num2 = + num2;


    switch(oper){
        case "-":
            res = num1 - num2;
            resInput.value = res;
            break;
        case "+":
            res = num1 + num2;
            resInput.value = res;
            break;
        case "^":
            res = Math.pow(num1, num2);
            resInput.value = res;
            break;
        case "%":
            res = num1 % num2;
            resInput.value = res;
            break;
        case "/":
            res = num1 / num2;
            resInput.value = res;
            break;
        case "x":
            res = num1 * num2;
            resInput.value = res;
            break;

        // ver 1.0.1
        case "sin":
            res = Math.sin(num2);
            resInput.value = res;
            break;

        case "cos":
            res = Math.cos(num2);
            resInput.value = res;
            break;

        case "tan":
            res = Math.tan(num2);
            resInput.value = res;
            break;

        case "ln":
            res = Math.log(num2);
            resInput.value = res;
            break;

        case "e":
            res = Math.exp(num2);
            resInput.value = res;
            break;

    }

}
