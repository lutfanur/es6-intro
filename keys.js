const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

// console.log(glass);

const keys = Object.keys(glass);
// ['name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);
// ['glass', golden', 12, true]
// console.log(values);
const entries = Object.entries(glass);
console.log(entries);

// array of array or two dimentional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

// delete glass.isCleaned;
 
// console.log(glass);

// freeze--
// Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass)