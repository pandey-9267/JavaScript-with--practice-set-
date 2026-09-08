// Write a Promise chain that starts with:

// 10

// Then:

// × 2
// ↓
// + 10
// ↓
// ÷ 2

// Finally print the result.

// Expected output:

// 15 


        promise.resolve(10)
        .then((num) => {
            return num * 2;
        }) .then ((num) => {
            return num + 10;
        }) 
        .then ((num)=> {
            return num/2;
        }) .then((result) => {
            console.log(result);
        });
 