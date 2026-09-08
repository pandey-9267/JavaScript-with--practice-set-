// Create this Promise chain:

// "Abhishek"
//       ↓
// "Hello Abhishek"
//       ↓
// "HELLO ABHISHEK"

// So the first .then() should create:

// Hello Abhishek

// and the second .then() should convert it to uppercase.

Promise.resolve("Abhishek")
.then((name) => {
    return "Hello " + name;
})
.then((name) => {
    return name.toUpperCase();
})
.then((showName) => {
    console.log(showName);
});