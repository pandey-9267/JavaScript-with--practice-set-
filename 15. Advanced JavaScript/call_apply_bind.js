// call
const person1 = {
    name : "Abhishek"
}
const person2 = {
    name: " Rahul"
}
function greet() {
    console.log("Hello " + this.name)
}

greet.call(person1);

greet.call(person2);



function introduce(city) {
    console.log(this.name + ' lives in ' + city);
}
const person = {
    name: "Anush"
}

introduce.call(person, "Delhi")

// apply()
// introduce.apply(person, ["Delhi"]);
// Arguments are passed as an array.
// Think:
// call()
// → arguments individually

// apply()
// → arguments in an array


// apply() and call() both
function introduce(city, age){
    console.log(this.name + " lives in " + city + " and is " + age);
}
const persoon = {
    name: "Abhishek"
}

introduce.call(persoon, "Dlehi", 23);

introduce.apply(persoon, ["Goa", 25]);


// combine example 


// const user = {
//   name: "Abhishek"
// };

// function greet(city, age) {
//   console.log(this.name, city, age);
// }

// greet.call(user, "Delhi", 21);

// greet.apply(user, ["Delhi", 21]);

// const greetUser = greet.bind(user, "Delhi", 21);

// greetUser();



// blind 


// const person = {
//   name: "Abhishek"
// };

// function greet() {
//   console.log("Hello " + this.name);
// }

// const newFunction = greet.bind(person);

// newFunction();



// 🔥 The easiest comparison
// Method	Calls immediately?	Arguments
// call()	✅ Yes	Individually
// apply()	✅ Yes	Array
// bind()	❌ No	Creates a new function


// Remember this:
// CALL
// → Call now

// APPLY
// → Apply now

// BIND
// → Bind for later