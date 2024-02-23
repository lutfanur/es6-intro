const max = Math.max(6, 45, 34, 39, 23, 6);
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
console.log(max);
console.log(numbers);
console.log(arrayMax);

// use spread operator to copy

const friends = [4, 5, 87,9];
const bondhu = friends;
const dosto = [...friends]
friends.push(100);
console.log(dosto)
console.log(friends)

bondhu.push(12);
// console.log(bondhu);
// console.log(friends);

// advanced

 const sonkha = [...friends, 9999];
 console.log(sonkha)


