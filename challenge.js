// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: 
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK

let massOfMark = 78;
let heightOfMark = 1.69;
let massOfJohn = 92;
let heightOfJohn = 1.95;

const markHigherBMI = (massOfMark, heightOfMark, massOfJohn, heightOfJohn)=>{
   let  markBMI = massOfMark / (heightOfMark * heightOfMark);
let johnBMI = massOfJohn / (heightOfJohn * heightOfJohn);
   let markHighersBMI = markBMI > johnBMI;
   console.log(markHighersBMI);
}
markHigherBMI(massOfMark,heightOfMark, massOfJohn, heightOfJohn);



// function markHigherBMI(markBMI,johnBMI){
//    let markHigherBMI = markBMI > johnBMI;
//    console.log(markHigherBMI);
// }








// *************************************************************************************************

// #Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
//3.Finally, Use Ternary operator to display the output
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement
// GOOD LUCK

// function higherBMI(markBMI,johnBMI){
// return markBMI > johnBMI ? console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})`) : console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})`);

// }
let  markBMI = massOfMark / (heightOfMark * heightOfMark);
let johnBMI = massOfJohn / (heightOfJohn * heightOfJohn);
const higherBMI = (markBMI,johnBMI)=>{
   return markBMI > johnBMI ? console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})`) : console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})`);
}

higherBMI(markBMI,johnBMI);

// toFixed() is used to reduce the decimal numbers 

// *************************************************************************************************

// Coding Challenge #3
// There are two gymnastics teams, team1 and team2. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
//  Data 1: team1 score 96, 108 and 89. team2 score 88, 91 and 110
//  Data Bonus 1: team1 score 97, 112 and 101. team2 score 109, 95 and 123
//  Data Bonus 2: team1 score 97, 112 and 101. team2 score 109, 95 and 106
// GOOD LUCK

 

//  console.log(`Average of team1 is ${team1.toFixed(2)}`);
//  console.log(`Average of team2 is ${team2.toFixed(2)}`);



const result = (team1Name,team2Name,team1Score1, team1Score2,team1Score3, team2Score1, team2Score2, team2Score3) =>{
   let team1  = (team1Score1 + team1Score2 + team1Score3) / 3;
 let team2  = (team2Score1 + team2Score2 + team2Score3) / 3;

   if(team1 > team2 && team1 >= 100){
      console.log(`${team1Name} wins`);
   }else if(team2 > team1 && team2 >= 100){
      console.log(`${team2Name} wins`);
   }else if(team1 === team2 && team1 >= 100 && team2 >=100){
      console.log("Draw");
   }else{
      console.log("No team wins the trophy");
   }
}

result('realMadrid', 'Barcelona', 100,200,103,82,32,90);

// function result(team1,team2){
//    if(team1 > team2 && team1 >= 100){
//       console.log("team1 win");
//    }else if(team2 > team1 && team2 >= 100){
//       console.log("team2 win");
//    }else if(team1 === team2 && team1 >= 100 && team2 >=100){
//       console.log("Draw");
//    }else{
//       console.log("No team wins the trophy");
//    }
// }


 

//  *************************************************************************************************

