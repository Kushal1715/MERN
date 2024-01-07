// Array: It is non primitive datatype. It is a special type of object in javascript that is used to store multiple similar valued data in a single variable. 

// example
// array of fruits:
let fruits = ['apple', 'banana', 'mango'];
// array of years
let years = [2032, 2023, 2022, 2021];

// mixed Array
let mixedArray = ['apple', 2020, true, undefined, null, Symbol(1), fruits, { a: 1, b: 2 }];

// the data present inside an array are called "elements", and each element has its own "index".
// The index of array always starts from 0. It means first element is represented by 0 index and second element is represent by 1 index and so on

// In javascript array can be created using
// Array Literals
// It is the mosot common / used way to create an array .
// variableType identifier = [el1, el2 ...];

// Array Constructor 
// since array is an special object in javascript, it can be created using its constructor 
// Example:
// let brands = new Array('Sike', 'Addibas', 'Samsung', 'Apple');
// console.log(typeof (fruits));

// console.log(mixedArray[2]);
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);
// console.log(mixedArray[5]);
// console.log(mixedArray[6]);
// console.log(mixedArray[7].a);
// console.log(mixedArray[7].b);

// adding elements in an array using index
let cities = [];
cities[0] = 'Kathmandu'
cities[1] = 'Pokhara'
cities[2] = 'Bhaktapur'
//3,4,5 are called array holes
cities[6] = 'rafd'

// console.log(cities)

// Array is special in-built object in javascript. So it has many special methods as well

// It has one special property

// .length : it  returns length of an array

// console.log(cities.length);  7

// methods: methods are function defined in an object

// Array methods:




