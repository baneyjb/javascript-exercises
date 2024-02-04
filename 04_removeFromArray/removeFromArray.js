const removeFromArray = function(arr, ...numbers) {
    let finalArray = []
    for (let i = 0; i < arr.length; i++) {
        if (!numbers.includes(arr[i])) {
            finalArray.push(arr[i])
        }
    }

    return finalArray
};

removeFromArray([1, 2, 3], 2)

// Do not edit below this line
module.exports = removeFromArray;
