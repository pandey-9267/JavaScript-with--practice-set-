// We cannot directly do:
// counter.count
// because count is not a property of counter.
// It is private inside the closure.
// This is one reason closures are useful.

function createCounter () {
    let count = 0;

    return function () {
        count ++;
        console.log(count);
    };
}

const counter =  createCounter();
counter();
counter();
counter();

/*
Closure diagram:

createCounter()
      |
      +-- count = 0  (private variable)
      |
      +-- returns a function
              |
              v
          counter()
              |
              +-- count++
              |
              +-- console.log(count)

counter() ---> count = 1 ---> prints 1
counter() ---> count = 2 ---> prints 2
counter() ---> count = 3 ---> prints 3

The returned function remembers count even after createCounter() finishes.
*/

