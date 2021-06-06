// if statement
// let cgpa = 8;
// if (cgpa>=9){
//     console.log("Outstanding");
// }
// else if(cgpa>=8 && cgpa<9){
// console.log("Great work");
// }
// else if(cgpa>=7 && cgpa<8){
//     console.log("Very good");
// }
// else if(cgpa>=6 && cgpa<7){
//     console.log("Good");
// }
// else if(cgpa>=5 && cgpa<6){
//     console.log("Need improvement");
// }
// else if(cgpa<5){
// console.log("Need more care");
// }
// else{
//     console.log("Invalid cgpa");
// }
//decision making examples

//nested if condition
// if password is greater than 6, has number, has special character and has no space then login

let password = parseInt(prompt("Enter password"));
if(password.length>=6){
    if(password.indexOf(' ')===-1)
    {
        console.log("You can login");
    }
    else{
        console.log("Space not allowed")
    }
}
else{
    console.log("Must be min 6 length and no space");
}

//truth-y and false-y value
// if(password){
//     console.log("one");
// }
// else{
//     console.log("two");
// }