const actor = {
    name: 'Ajoy',
    age: 30,
    phone: '01717519834',
    money: 123456789987

}


const {phone, age:boyos} = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)

console.log(boyos)
// console.log(age)
// console.log(age)

// array destructuring---
const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}

const [potom, dotu] = doubleThem(6, 9);
console.log(potom, dotu);