// There are three types of legacy loops in all programming languages.
// They are: 
// 1) for loop
// 2) while loop 
// 3) do while loop 

// 1) for loop
// it is the type of loop that is used when the number of iterations in known in advance. 

// // syntax:
// for (initialization; condition; increment/decrement) {
//     code block to be executed repeatedly till the condition is true 
// }
// Example:
// wap to print hello world 10 times 
// for(let i=20; i>=1; i--){
//     console.log(`${i}`);
// }

// wap to print first even numbers upto 20.

// for(let i=1; i<=20; i+=2){
//     // i%2==0?console.log(i):"";
//     // i%2==0&&console.log(i);
//     // console.log(i);
// }

// wap to print
// 1 is odd because it is not divisible by 2
// 2 is even because it is divisible by 2
// 20 is even because it is divisible by 2

// for(let i=1; i<=20; i++){
//     // let result = i%2==0?`${i} is even because it is divisible by 2`:`${i} is odd because it is not divisible by 2`;
//     // console.log(result);
//     let isEven = i%2==0;
//     console.log(`${i} is ${isEven?'even':'odd'} because it ${isEven?'is':'is not'} divisible by 2`)
// }

// create function that takes a number and gives its multiplication table upto 10

// const multiplication=(num,upTo)=>{
//     for(let i=1; i<=upTo; i++){
//         console.log(`${num} x ${i} = ${i*num}`);
//     }
// }
// multiplication(11,100000000000);

// 2) while loop
// it is the type of loop that us used when the number of iterations are unknown beforehand.
//also used for the known interations
// Syntax:
// while(conditon){
//     //code to be executed while the condition is true
// }

// let i=1;
// while(i<20){
//     console.log(`${i} hello world`);
//     i++;
// }

// let i = 1;
// while(i<=20){
//     let isEven = i%2==0;
//     console.log(`${i} is ${isEven?'even':'odd'} because it is${isEven?'':'is not'} divisible by 2`)
//     i++;
// }

// Infinite while loop 


// 3) dowhile loop





