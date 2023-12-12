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
//there are 7 falsy values in JS, they are 0,-0, 0n, false, undefined, null, NaN, "".
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
//     username = prompt("Enter your username");
// }
// document.write(`Welcome ${username}`);


//program to check whether Nepal Mega BCA is opened or cloded.
//Conditions:
//College Time:  10 to 17 (While defining variable for it keep time in 24 hours format for simplicity)
//College closed on weekend
//College is closed on holidays

let clzTime = 10;
let weekend = false;
let holiday = false;


if(weekend || holiday){
    console.log(`College is close`);

}else if(clzTime >= 10 && clzTime <= 17){
    console.log(`College is open`);
}
else{
    console.log(`College is close`);
}
