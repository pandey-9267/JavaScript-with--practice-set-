// Imagine you're in a restaurant.
// There are two waiting lines.
// Microtask line 🟢
// These are priority customers.
// Macrotask line 🟡
// These are normal customers.
// The restaurant says:
// "First I'll finish all the priority customers, then I'll take the normal customers."

// JavaScript works similarly after the current synchronous code finishes.

console.log("A");
setTimeout( () => {
    console.log("B");
}, 0);
Promise.resolve().then( () => {
        console.log("C");
    });
    console.log("D")


//     Synchronous code
// ----------------
// console.log("A")        -> A
// setTimeout(...)         -> Macrotask queue
// Promise.resolve().then  -> Microtask queue
// console.log("D")        -> D


// After synchronous code finishes
// --------------------------------

// Microtask queue
// ---------------
// Promise.then()
//     |
//     +--> C


// Macrotask queue
// ---------------
// setTimeout()
//     |
//     +--> B


// Final output
// ------------
// A
// D
// C
// B