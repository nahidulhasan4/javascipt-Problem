// here i will practice all type of js function

// 1. function declaration
function MyFunction(a, b) {
    return a + b;
}
// a b are parameters
// 10 20 are arguments
// console.log(MyFunction(10, 20)); // 30

// 2. function expression
let MyFunction2 = function(a, b) {
    return a + b;
}
// console.log(MyFunction2(10, 20)); // 30

// 3. arrow function
let MyFunction3 = (a, b) => a + b;
// amra arrow function er khetre jodi sudhu ekta expression thake tahole curly braces and return statement use korte hoy na
// console.log(MyFunction3(10, 20)); // 30

// 4. IIFE (Immediately Invoked Function Expression)
// (function(a, b) {
//     console.log(a + b);
// })(10, 20); // 30

// 5. callback function
// function MyFunction4(a, b, callback) {
//     return callback(a, b);
// }
