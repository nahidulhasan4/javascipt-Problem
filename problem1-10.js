// here you can print random number 1-6  as like play a ludu game
//1. Write a function that can print any random number between any two given numbers (including them).
const getRandomNumber = (min, max) => {
  // here pass two value min max for we need  value betwwen min max number

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumber(10,15);
// let ranDomNumber= Math.floor(Math.random() *(15 - 5))+5;
// console.log(getRandomNumber(10, 16));
// console.log(getRandomNumber(1,6));

// 2. How can you order roll numbers of students in your class sequentially?

const students = [
  "Nahid Hasan",
  "Nabil Hasan",
  "Nijum Hasan",
  "Nihad Hasan",
  "Hasan",
  "Rayhan Hasan",
  "bilal Hasan",
  "Cabir hossain",
  "Junahid Hasan",
  "Rifat Hasan",
  "Ayman Hasan",
];
//  we can easily do this usinf arry sort method
// here we use sort method for maintain quea
const studentsSrialbyAl = students.sort();
// console.log(students);
// console.log(studentsSrialbyAl);

// 3. How can you order names of students in your class sequentially?
const studentsRoll = [1,2,3,5,6,56,6,7,7,8,78,87,56,76];

const studentsRollSeq = studentsRoll.sort((a,b)=>{
    return a-b

});
// console.log(studentsRoll);

// console.log(studentsRollSeq);


// 4. Write a function that can tell us whether an year is a leap year or not.
 


// const isLepYear = (year)=>{
//   if( (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
//     console.log( `${year} is leap year `);
    
//   }else{
//     console.log(`${year} is not  leap year `);
     
//   }

// }
// isLepYear(2028);

// let Year = function generateYears(start = 2000, end = 3000) {
//   let years = [];
//   for (let year = start; year <= end; year++) {
//       years.push(year);
//   }
//   return years;
// }

// // Example usage
// let years = Year();




// let LeapYear = [];
// let notLeapYear =[];

// years.map((item)=>{

// if( (item % 400 === 0) || ((item % 4 === 0) && (item % 100 !== 0))){
 
    
//   }else{
//   console.log(`${item} is not leapyear`)
     
//   }
// })
// console.log(LeapYear);


// // console.log(notLeapYear);

// let Year = function generateYears(start = 2010, end = 2080) {
//   let years = [];
//   for (let year = start; year <= end; year++) {
//       years.push(year);
//   }
//   return years;
// }

// Example usage
// let years = Year();



// let LeapYear = []; 
// let notLeapYear = []; // Initialize LeapYear array
// years.map((item) => {
//   if ((item % 400 === 0) || ((item % 4 === 0) && (item % 100 !== 0))) {
//     LeapYear.push(item); // Push the leap year to LeapYear array
//   } else {
//     notLeapYear.push(item); 
//   }
// });

// console.log("Leap Years:", LeapYear);
// WorkZoneDominicanChange
// console.log("No Leap Years:", notLeapYear);
// WorkZoneDominicanChange
// console.log("No Leap Years:", notLeapYear);

// here javascript problem soving 3 


// 5. How would you determine the number of vowels in a sentence?

const vowels = ['a', 'e' , 'i','o','u','A','E','I','O','U'];

 function findVowels(sentence){
 let count = 0;
 const letters = Array.from(sentence);
 letters.forEach(function(value){
 
  if( vowels.includes(value)){
    count++;
  }

 });

 return count;
}

// console.log(findVowels("I Love Allah and I also Love My Profect (S)"));
// 6. How would you extract the duplicate numbers in an array?
// akhany amra fliter method diy duplicate value khojy ber korbo

// let numbers = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7];
let duplicates = numbers.filter((value, index, array)=>{
  return array.indexOf(value) !== index;
})
// console.log(duplicates)
// 7. How would you extract the unique numbers in an array

let numberss = [1,2,34,2,2,3,4,2,1,34,4,5,3,5,36,34,]

let findUnic = numberss.filter((value,index,array)=>{
  return array.indexOf(value) === index;

})

console.log(findUnic);
// method  two for fining uniq number 
let numbers = [1,2,34,2,2,3,4,2,1,34,4,5,3,5,36,34]; // removed extra 's'
// method three for find uniq number
let uniqueNumbers = [...new Set(numbers)];
let uniqueNumberstwo = Array.from(new Set(numbers));
let uniqueNumbersthree = numbers.reduce((acc, curr) => {
  return acc.includes(curr) ? acc : [...acc, curr];
}, []);