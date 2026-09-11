function order (food) {
    return function (topping) {
        return function (location) {
            console.log(`Order: ${food} ${topping} ${location}`);
        };
    };
}
order("Pizza,")("Chesse,")("Dlehi")


// currying with clouser

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // 10