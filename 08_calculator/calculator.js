const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	if (arr.length === 0) return 0
  if (arr.length === 1) return arr[0]
  return arr.reduce((acc, current) => acc + current)
};

const multiply = function(arr) {
  return arr.reduce((acc, current) => acc * current)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  if (num === 0) return 1
	let total = 1
  for (let i = 1; i <= num; i++) {
    if (i <= num) {
      total *= i
    }
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
