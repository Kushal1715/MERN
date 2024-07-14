//Operators:
//They are pre-defined signs and symbol that are designed to perform designated operations on operands.
//1. Arithmetic Operators
//Addition Operator
// Subtraction Operator
// Multiplication Operator
// Division Operator
// Modulo Operator(%)
// Exponential Operator (**)
// Console.log(num1 ** num2);
// Concat Operator(+)

//Type Coercion Vs Type Conversion
// Type Coercion: focefully changing the type of data against the developers will to prevent error
// Type Conversion: changing the type of data according to the developers will
// Priority of Conversion:
//1)String
//2)Number
//3)Boolean

//2.Comparison (Relational) Operator
// 3. Assignment Operator
// 4. Logical Operator
// 5. Special Operator

// And operator checks for the falsy values if not prints the last expression Eg:
// if("Ram"&&100&&2<10&&"kushal");  //output: kushal

// OR operator checks for the first truthy value  for Eg:
// if("Ram"||100||2<10||"kush")  //output Ram

//TRUTHY vs FALSY:
//there are 7 falsy values in JS, they are 0,-0, false, undefined, null, NaN, "".
//Except these values all the values in JS are Truthy values.

// if(0){
//     console.log('The value is truthy');
// }else{
//     console.log('The value is Falsy'); //output
// }

//Guard Clause using NOT Operator

// let firstName = "code";
// let lastName = "error";
// let username;
// if(!username){
//     username = prompt("Enter your useru
// document.write(`Welcome ${username}`);


//program to check whether Nepal Mega BCA is opened or cloded.
//Conditions:
//College Time:  10 to 17 (While defining variable for it keep time in 24 hours format for simplicity)
//College closed on weekend
//College is closed on holidays

// let clzTime = 10;
// let weekend = true;
// let holiday = false;


// if(clzTime < 10 || clzTime > 17 || holiday || weekend){
//     console.log(`College is close`);
// }
// else{
//     console.log(`College is open`);
// }

// 5. Special Operator
// a. Ternary Operator: It is a short hand operator used instead of if-else statement
// Syntax:
// condition?condition if true: condition if false
// Eg:
// let age = 2;
// // age>= 18 ? console.log("You can vote") : console.log("You cannot vote")
// let message = age>= 18 ? "You can vote" : "You cannot vote";
// console.log(message);

// Nested Ternary Operator
// Syntax: condition?condition?"true statement":"false statement":"statement if initial condition is false"
// Eg:
// let age = 18;
// let isFemale = true;
// let message2 = age >= 18 ? isFemale ? "Free drink" : "no free drink" : "no clubbing";
// console.log(message2);


// b. Nullish Coelscing Operator:
// If LHS value or expression is null or undefined , the RHS will be executed.
// let username;
// username??console.log("Please enter your username.");

//c. Unary Operator:
// Those operators which can carry out operations on single operands are called unary operators.
// i) Increment Operator(++):
// ii) Decrement Operator(--);

// iii) Unary +
// let x = "5";
// console.log(+x); //5

// iv) Unary - or Negation Operator
// let x = 5;
// console.log(-x);  -5

// v) typeof Operator
// console.log(NaN); //number
//NaN is also a number


//POSTFIX and PREFIX
let x = 5;
let y = ++x;
console.log(x); //6
console.log(y); //6
console.log(x++);
console.log(++x);
console.log(++y)
console.log(y++)
console.log(x);
console.log(y);

