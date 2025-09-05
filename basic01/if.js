// here i will practice if statement 
let a = 20;
let b = 10;
// if (a == 20 && b==20){
//     console.log("this is true");
// }else if(a>b){

//     console.log("this   a is bigger then b");
// }else{
//     console.log("this is false");
// }
// let StudentArry= {
//     name: "nahid hasan",
//     Result: 50,
    
    
// }
// console.log(StudentArry.name);

// let Result = 70;
// if (Result >= 80 && Result <=100){
//     console.log("A+");
// }else if(Result >= 70 && Result <80){
//     console.log("A");
// }else if(Result >= 60 && Result <70){
//     console.log("A-");
// }else if(Result >= 50 && Result <60){
//     console.log("B");
// }else if(Result >= 40 && Result <50){
//     console.log("C");
// }else if(Result >= 33 && Result <40){
//     console.log("D");
// }else if(Result >= 0 && Result <33){
//     console.log("Fail");
// }else{
//     console.log("Invalid Result");
// }
let grade = 60;

switch (grade){
    case(grade >= 80 && grade <=100):
        console.log("A+");
        break;
    case(grade >= 70 && grade <80):
        console.log("A");
        break;
    case(grade >= 60 && grade <70):
        console.log("A-");
        break;
    case(grade >= 50 && grade <60):
        console.log("B");
        break;
    case(grade >= 40 && grade <50):
        console.log("C");
        break;
    case(grade >= 33 && grade <40):
        console.log("D");
        break;
    case(grade >= 0 && grade <33):
        console.log("Fail");
        break;
    default:
        console.log("Invalid Result");

}