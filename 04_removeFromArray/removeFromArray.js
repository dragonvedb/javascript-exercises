const removeFromArray = function(arr, ...deleteThese) {
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x <= deleteThese.length; x++) {
            if (arr[i] === deleteThese[x]) {
                arr.splice(i, 1);
                i--;
                break;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
