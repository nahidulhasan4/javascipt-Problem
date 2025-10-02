// here i will practice about async js and await js

// async function MyFunction() {
//     return "Hello World";
// }

// MyFunction().then(function(value) {
//     console.log(value); // Hello World
// });

// async function MyFunction() {
//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("Hello World");
//         }, 2000);
//     });
//     let result = await promise; // wait until the promise resolves
//     console.log(result); // Hello World
// }

// MyFunction();

// async function MyFunction() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     console.log(data);
// }

// MyFunction();

// async function MyFunction() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// MyFunction();   