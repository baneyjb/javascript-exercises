const fibonacci = function(num) {
    // Step 1. Make sure argument is a number
    let number = Number(num)
    // Step 2. Make sure number is positive
    if (number < 0) return "OOPS"
    // Step 3. Make sure number can be 0
    if (number === 0) return 0
    // Step 5. Use recursion to create fibonacci sequence
    return number <= 2 ? 1 : fibonacci(number - 1) + fibonacci(number - 2)


};

console.log(fibonacci(5))

// Do not edit below this line
module.exports = fibonacci;
