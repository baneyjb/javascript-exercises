const palindromes = function (word) {
    let lowerCaseWord = word.toLowerCase()
    let punctuation = /[\.,?!]/g;
    let noPunc = lowerCaseWord.replace(punctuation, "")
    let arr = noPunc.split('')
    let solution = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== " ") {
            solution.push(arr[i])
        }
    }

    return solution.join("") === solution.reverse().join("") ? true : false
};

// console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
