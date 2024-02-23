// function declaration----

function add(a, b){
    const result = a + b;
    return result;
}

// function expression---
function add2(a, b){
    return a + b;
}

// arrow function ------
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2
// const sum = add3(5, 95);
// const sum = add4(5, 6, 7, 8);
// console.log(sum);
const mult = multiply(5, 12)
console.log(mult);