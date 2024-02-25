// Array: It is non primitive datatype. It is a special type of object in javascript that is used to store multiple similar valued data in a single variable.

// example
// array of fruits:
// let fruits = ['apple', 'banana', 'mango'];
// array of years
// let years = [2032, 2023, 2022, 2021];

// mixed Array
// let mixedArray = ['apple', 2020, true, undefined, null, Symbol(1), fruits, { a: 1, b: 2 }];

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
// let cities = [];
// cities[0] = 'Kathmandu'
// cities[1] = 'Pokhara'
// cities[2] = 'Bhaktapur'
// //3,4,5 are called array holes
// cities[6] = 'rafd'

// console.log(cities)

// Array is special in-built object in javascript. So it has many special methods as well

// It has one special property

// .length : it  returns length of an array

// console.log(cities.length);  7

// methods: methods are function defined in an object

// Array methods:

//1 .indexOf(): it returns index of the element passed as an argument.
// // if element doesn't exist it returns -1
// console.log(fruits.indexOf('appl'));

// //2 .includes(): it checks whether the element exits in an array or not
// // it returns boolean value
// console.log(fruits.includes('apple'));

// // array that mutates the original array
// //3 .push() : adds element to the end of an array
// let newLength = fruits.push('orange', 'grapes') //returns new length of an array
// console.log(newLength);

// //4 .pop(): removes last element from the array
// fruits.pop(); //returns last element
// console.log(fruits);

//5 .shift(): removes first element from the array
// let length = fruits.shift();
// console.log(fruits);
// console.log(length); //returns element which is removed

// // 6. unshift(): adds element to the start of an array
// let leng = fruits.unshift("asdfasdf");
// console.log(fruits);
// console.log(leng);  //returns new length of an array

// 7. splice: this method is used to add, remove or replace elements from any position of the Array.This method takes three arguments.
// 1st argument: starting index
// 2nd argument: elements  to be removed from starting index
// 3rd argument: elements to be added/replaced

// fruits.splice(1, 3);  returns empty array
// console.log(fruits);

// fruits.splice(2, 1, 'watermelon'); //2nd argument to 0 to add only
// console.log(fruits); //returns 3rd argument in the form of array

// 8. reverse: it reverse the array
// let rev = fruits.reverse();
// console.log(fruits);
// console.log(rev);

// 9. sort: it sorts the array in ascending order
// fruits.sort();
// console.log(fruits);

// let str = 'apple';
// console.log(str.charCodeAt(0));  //return Ascii code value

// fruits.sort().reverse();
// console.log(fruits);

// let nums = [2, 6, 3, 8, 344, 5464, 45, 23];
// nums.sort((a, b) => a - b); //to sort the numbers inside array in ascending using callback funtion
// nums.sort((a, b) => b - a);  //to sort the numbers inside array in descending order //callback function
// console.log(nums);

// console.log(fruits.sort((a, b) => b.localeCompare(a)));

// create a function which takes array as aruguments and print console in descending order

// const printArray = ((arr) => {
//   console.log(arr.sort((a, b) => b - a));
// })

// let nums = [1, 5, 8, 2, 91, 17, 31];

// printArray(nums);

// const printLastElement = ((arr) => {
//   return arr[arr.length - 1];
// })

// console.log(printLastElement(nums));
// console.log(printLastElement(fruits));

// methods that does not change the original array

// 1. slice(): this method is use to take an portion of an Array. it does not mutates the original array rather it creates a shallow copy of it
// 1st argument: starting index
// 2nd argument: end index (does not include the end index itself)


// // let newFruits = fruits.slice(1, 4);
// // console.log(newFruits);

// // 2. concat(): this method is used to join two arrays

// // let names = ['code', 'code2'];

// // console.log(a.concat(names));

// // // 3. spread operator: this operator is used to copy elements of one array to the another array
// // let arrayUsingSpread = [...a, 23, 45, 67[2, 3]]; //output [2,3]
// // console.log(arrayUsingSpread);


// // create a function that takes array of numbers and return the sum of that number

// let nums = [1, 2, 3, 4];
// let fruits = ['apple', 'banana', 'mango', 'grapes', 'orange'];


// const sumOfArray = (arr) => {

//   let sum = 0;
//   if (typeof (arr[0]) === 'number') {
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   } else {
//     return "Array does not contain numbers";
//   }
// }

// // console.log(sumOfArray(nums));
// console.log(sumOfArray(fruits))


// Important methods
// 1. Map: This method is used to change the value of each element present in the Array. This method doesnt mutates the original Array. This method returns a new Array.
// This method has a call back function with three arguments and that callback function has three parameters

// 1st: element
// 2nd: index of current element
// 3rd: array itself (new array)

// syntax: Array.map((e,i,arr) => { }) //higher order function: function inside function


// let newNums = [];
// for (let i = 0; i < nums.length; i++) {
//   newNums = [...newNums, nums[i] * 2];
// }

// console.log(newNums);

// let newNums = nums.map(num => num * 2);
// console.log(newNums);

//  [0,2,6,12,20,30]

// let nums = [1, 2, 3, 4, 5, 6];

// let newNums = nums.map((e, i) => e * i)
// console.log(newNums);

// A company offered 15% increment in salary for its employees.
// let oldSalary = [17000, 25000, 35000, 50000, 23000, 455000, 99990, 29290];

// let newSalary = oldSalary.map((e) => (15 / 100) * e + e)

// console.log(newSalary);

// let students = ['Sandip', 'Tara', 'Aayush', 'Kushal', 'Yujan', 'Rahul', 'Shiva'];

// let newStudents = students.sort().map((e, i) => `Roll No.: ${i + 1} ${e}`);
// console.log(newStudents);

// ktm temperature (deg Celcius) this week has been

// let ktmTempInCe = [17, 10, 3, 5, 23, 10, 12];

// // conver into fahrenheit

// let tempInFah = ktmTempInCe.map(temp => (temp * 1.8) + 32);
// console.log(tempInFah);

// 2. Filter:
// this is an array method that is used to filter individual elements from an array. This method returns a new array.

// Syntax:
// // array.filter((element,index,arr)=>{
//   return condition;
// })

// In the callback function of this method a condition is initialized and based on the condition the elements are added(filtered) in the new array returned by this method.

// if the condition is true element is added and if the condition is false the elelment wont be added.

// let numbers = [10, 4, 38, 4893, 6, 27, 2, 1, 4];

// // let greaterThanFive = numbers.filter((num) => {
// //   return num > 5;
// // })
// // console.log(greaterThanFive);

// let oddNumbers = numbers.filter((num) => {
//   return num % 2 != 0
// })
// let evenIndex = numbers.filter((_, index) => {
//   return index % 2 === 0;
// })
// console.log(oddNumbers)
// console.log(evenIndex);

// a survey was done in a community where the monthly salary of the household was recorded. The data collected from the survey is as follows:

// let salaries = [17000, 25000, 35000, 50000, 23000, 455000, 99990, 29290, 4500, 7800, 75800, 14500];

// the government has defined the minimum salary as 17500, find out how many people from the survey are getting below average salary.



// console.log(`Out of ${salaries.length} people ${avgSalary.length} are getting below average salary`
// );

// salary x is y% less than minimum salary

// let avgSalary = salaries.filter((salary) => {
//   return salary < 17500;
// })

// let minimumPercentage = salaries.filter((salary) => salary < 17500).map((sal) => `${sal} is ${100 - (sal / 17500) * 100}% less than minimum salary`);

// console.log(minimumPercentage);

// 3. reduce method:
// Reduce is the method that can return any type of value. (either primitive or non-primitive). It will reduce all elements in an array into a single value.

// Unlike map and filter this method has two argument:
// 1. callback function
// 2. intitial value of accumulator

// the callback function in this method has four parameters
// 1. accumulator: output of reduced method is stored in accumulator
// 2. current element
// 3. index
// 4. ARRAY

// example
// let numbers = [3, 45, 23, 5, 2, 1];

// let overallSum = numbers.reduce((out, num) => out + num)
// console.log(overallSum);

// // task
// let salaries = [1, 2, 3, 4];
// let avgSalary = salaries.reduce((acc, num) =>
//   acc + num
// ) / salaries.length;

// console.log(avgSalary);

// let salaries = [17000, 25000, 35000, 50000, 23000, 455000, 99990, 29290, 4500, 7800, 75800, 14500];


// let minimumPercentage = salaries.reduce((acc, salary) => {
//   salary < 17500 && acc.push(`${salary} is ${100 - (salary / 17500 * 100).toFixed(3)}% less than minimum salary`);
//   return acc;
// }, [])
// console.log(minimumPercentage);

//convert word into array
// let word = 'apple'
// let arrletter = [...word];
// console.log(arrletter);

// create a function that takes two parameter,word and letter respectively. the function should return the count letter present in the word

// example output = letterCount(`apple`,'p') output : `There are 2 ps in the word apple `

// let letterCount = (word, letter) => {
//   let newWord = word.toLowerCase();
//   let wordArr = [...newWord];
//   let num = wordArr.reduce((acc, w) => {
//     if (w === letter.toLowerCase()) {
//       acc += 1;
//     }
//     return acc;
//   }, 0)
//   return `There ${num <= 1 ? 'is' : 'are'} ${num}${letter}${num <= 1 ? '' : `'s`} in the word ${word}`
// }

// console.log(letterCount('Pineapple', 'i'));


// 3 ways to convert into an array :::::::

//  1.  by using spread operator
// let wordArr = [...word];

// 2. by using split method
// syntax
// String.split(separator)
// example:
// let arrStr = Str.split('');
// console.log(arrStr);

// 3.
// let Str = "hello world";

// let newStr = Array.from(Str);
// console.log(newStr);


// let letterCount = (word, letter) => {
//   let newWord = word.toLowerCase();
//   let wordArr = [...newWord];
//   let num = wordArr.reduce((acc, w) => {
//     if (w === letter.toLowerCase()) {
//       acc += 1;
//     }
//     return acc;
//   }, 0)
//   return `There ${num <= 1 ? 'is' : 'are'} ${num}${letter}${num <= 1 ? '' : `'s`} in the word ${word}`
// }
// console.log(letterCount('Pineapple', 'i'));

// Array Destructuring:
// It is a way to sequentially assign values from arrays to variables.

// // example:
// let [a, b, c] = [1, 2, 3];

// // Rest parameters:
// let [x, y, z, ...others] = [9, 8, 7, 6, 5, 4, 3, 2, 1];











































