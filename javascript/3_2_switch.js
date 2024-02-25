// SWITCH CASE
// The switch statement is used to perform different actions based on the value of a variable.

// Syntax:
// switch(value){
//     case value1:
//         statement to be executed if value1
//         break
//     case value2:
//         statement to be executed if value2
//         break
//     case valueN:
//         statement to be executed if valueN
//         break
//     default:
//         statement to be executed if no match found for any cases above
        
// }

// let currentLight = "GREEN";
// switch(currentLight){
//     case "RED":
//         console.log("STOP");
//         break;
//     case "GREEN":
//         console.log("GO");
//         break;
//     case "YELLOW":
//         console.log("WAIT");
//         break;
//     default:
//         console.log("Invalid color");
// }

// wap using switch to find GPA
// 90-100 A+
// 80-89 A
// 70-79 B+
// 60-69 B
// 50-59 C+
// F

let totalMarks = 500;
let obtainMarks = 320;
let percentage = (obtainMarks / totalMarks) * 100;
console.log(percentage);

// arguments in switch case should exactly match the case result to perform the output 

function checkGrade(percentage){
    switch(true){
        case percentage >= 90:
            console.log("A+");
            break;
        case percentage >=80:
            console.log("A");
            break;
        case percentage >=70:
            console.log("B+");
            break;
        case percentage >=60:
            console.log("B");
            break;
        case percentage >=50:
            console.log("C+");
            break;
        default:
            console.log("F");
    }
}

checkGrade(percentage);






