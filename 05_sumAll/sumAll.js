const sumAll = function(num1, num2) {
    let factorial = 0;
    
    for (let i = num1; i <= num2; i++) {
        factorial += i;
    };

    return factorial;
};

// Do not edit below this line
module.exports = sumAll;
