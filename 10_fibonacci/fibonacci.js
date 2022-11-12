const fibonacci = function(num) {
    let lastNum = 0;
    let currentNum = 1;

    if (num <= 0) {
        return "OOPS"
    }
    
    for (let i = 1; i < num; i++) {
        currentNum += lastNum;
        lastNum = currentNum - lastNum;
    }

    return currentNum

};

// Do not edit below this line
module.exports = fibonacci;
