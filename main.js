const util = require("./myUtils.js");
const reader = require("readline-sync");

const a = reader.questionInt("Input the first number = ");
const b = reader.questionInt("Input the second number = ");

    if (a <= 0 || b <= 0) {
        console.log("Error");
    }

let array = [];

for (let i = a; i <= b; i++) {
    
    if (util.isPrime(i) > 0) {
        array.push(util.isPrime(i));
    }
}

console.log(util.printElements(array));


