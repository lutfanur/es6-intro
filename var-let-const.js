// var: no reason to use var
// let: allow it to re-assign
// const: do not allow it to re-assign

const money = 25;
// money = 50;
const rich = money + 25;
// console.log(rich);

// let
let count = 0;
count = count + 10;
// console.log(count);

const numbers = [23,4,45,67];
numbers[1] = 55;
numbers.push(60);
numbers.pop(102);
// console.log(numbers);

// object---------

const student = {
    name: 'Meherin',
    class: 1
}
// console.log(student);

// loop---------
let sum = 0;
for(let i = 0; i< 10; i++){
    // sum = sum + i;
    const num = i;
    sum = sum + num;
}
console.log(sum);