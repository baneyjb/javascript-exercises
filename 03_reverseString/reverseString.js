const reverseString = function(str) {
    if (str.length <= 0) return ""
    const reversed = str.split('').reverse().join('')
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
