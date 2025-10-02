// here i will practice about async js and await js

// async function MyFunction() {
//     return "Hello World";
// }

// MyFunction().then(function(value) {
//     console.log(value); // Hello World
// });

// async fuction holo ekta function jeta always promise return kore 
// and await holo ekta keyword jeta promise er result wait kore
// jokhon porjonto promise resolve hoye na tokhon porjonto code er porer line gulo execute hoy na
    // mane await er porer line gulo execute hoy na jokhon porjonto promise resolve hoye na
    
// async function MyFunction() {
//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("Hello World");
//         }, 2000);
//     });
//     let result = await promise; // wait until the promise resolves
//     console.log(result); // Hello World
// }
// settimeout diye 2 second por promise resolve hobe and tarpor await er porer line gulo execute hobe
// cache korar jonno await use kora hoy

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