// Datatypes refers to what kind/type of value a variable can hold
// Since JS is dynamically type programming languagethe type of value hold by a variable can change during runtime.
// In JS, there are two major classification of datatypes:

//1) Primitive data types: These data types hold a value directly within their variable and do not
// need to be referenced by another object.
//They are:

// Number:
// let num = 10;
// let num2 = 2.35;
// console.log(typeof num); (result in string)

//String:
//let address = "ktm";
//let destination = "usa";

//Boolean:
//isAbove18 = true;

//Undefined:
//If a variable is declared but not assigned at that time, it holds undefined datatype.
// let lastName;
// let nationality = undefined;

//Null:
//if a variable empty, it is known is null.
// let age = null;

//Symbol:
// let id = Symbol(1);
// let id2 = Symbol(1);
// console.log(typeof id);
// console.log(id === id2); false

//BigInt
// let largerNum = 10n;

//2) Non-primitive data types(Reference data types):These data types do not hold a value directly within their variable
// and need to be reference by another object
//They are:

//Array:
// let numbers = [1,5,3,6,63,2];
// console.log(typeof numbers);

//Object:
// let obj1 = {
//     name: 'kushal',
//     age: 22
// }
// console.log(typeof obj1);

// // IMP
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);


// let arr1 = [1, 2, 3];
// let arr2 = [...arr1]; //Spread Operator
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
// non-primitive data types cant be stored in callstack so heap memory is used



