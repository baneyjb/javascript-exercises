const sumAll = function(a, b) {

    if (typeof a !== 'number' || a < 0 || typeof b !== "number" || b < 0) return "ERROR"

    let total = 0
    if (b > a) {
        for (let i = a; i <= b; i++) {
            total += i
        }
    } else {
        for (let i = b; i <= a; i++) {
            total += i
        }
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
