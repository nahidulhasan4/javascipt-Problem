// here you can print random number 1-6  as like play a ludu game

const getRandomNumber = (min, max) => {
  // here pass two value min max for we need  value betwwen min max number
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
 
};
getRandomNumber(1,6);
let ranDomNumber= Math.floor(Math.random() *(15 - 5))+5;
console.log(ranDomNumber);
console.log(getRandomNumber(1,6));