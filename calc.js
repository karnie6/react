var readline = require('readline-sync');

var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");
var operator = readline.question("Please enter an operator (+,-,*,/): ");

var Calculator = function(number1, number2, operator) {
    var self = this;
    self.number1 = number1;
    self.number2 = number2;
    self.operator = operator;
    
    this.compute = function() {
        if (operator == "+") {
            return number1 + number2;
        } else if (operator == "-") {
            return number1 - number2;
        } else if (operator == "*") {
            return number1 * number2;
        } else if (operator == "/") {
            return number1 / number2;
        } else {
            return "Invalid Operator!";
        }
    }
};

var calculator = new Calculator(parseInt(num1), parseInt(num2), operator);
console.log("The output of this operation is : " + calculator.compute());

