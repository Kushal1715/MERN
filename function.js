// Function:
// A function is basically a block o code that can execute a specific task. The value or action
// performed by a function can be achieved when we call or invoke a function. A function consist of a
// function name(to write function names we have to follow the rules of writing identifiers)
//  A function contains a paranthesis where parameteres can be contained

// There are three types to declare functions in JS:
// i) Function Declaration
// 2) Function Expression
// 3) Arrow Function(ES6+)

// 1) Function Declaration
// // They are hoisted 
// let namee = "Zzzzzzzzz";

// greeting(namee); //This is valid because function declaration are hoisted

// function greeting(name) {
//     console.log(`hello ${name}`);
// }

//Return keyword
// function calcAge(bYear){
//    let tYear = 2023;
//     let age = tYear - bYear;
//     return age;
// }
// console.log(calcAge(2001));

// function without the return key gives undefined 
// code below return key inside the function are not executed


// There are two major types of functions:
// 1) Unparameterized function
// 1) parameterized function

// function canVote(age){
//     let result =  age >= 18 ? "You can vote" : "You cannot vote";
//     console.log(result);
//     // return result;
// }
// let result = canVote(21);
// console.log(result);

// Create a function that return if you are/were or will be 16 years old. 

// function checkSixteen(age){
//     // if(age === 16){
//     //     return "You are 16 years old";
//     // }else if(age < 16){
//     //     return `You will be 16 years old after ${16 - age} years`;
//     // }else{
//     //     return `You were 16 years old before ${age - 16} years`;
//     // }

//     return age <= 16?age < 16?`You will be 16 years old after ${16 - age} years`:`You are 16 years old`: `You were 16 years old before ${age - 16} years`;
// }

// console.log(checkSixteen(15));
// console.log(checkSixteen(16));
// console.log(checkSixteen(19));

// coding challenge 2,3
// office open or close 


// 3) Arrow Function (ES6+)

// syntax:
// variableType identifier = () =>{

// }

// KISS keep it simple and short

// crate an arrow function that return sum of two number 

// const sum = (num1,num2) =>num1 + num2;

// console.log(sum(1,4));

//no need to use return keyword while performing sinle operation or number
//no need to use curly bracket for performing single expressions
//if no return keyword gives undefined


// const eligibleToVote = (age) =>{
//     return age>=18?"Eligible To Vote":"Not Eligible To Vote";
// }
// console.log(eligibleToVote(17));



