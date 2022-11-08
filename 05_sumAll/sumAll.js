const sumAll = function(num1, num2) {
    let factorial = 0;

    let minor;
    let major;
   
    if (num1 < 0 || !(Number.isInteger(num1)) || num2 < 0 || !(Number.isInteger(num2))) return 'ERROR';
    
    if (num1 < num2) {
        minor = num1;
        major = num2;
    } else {
        minor = num2;
        major = num1;
    };
    
    for (let i = minor; i <= major; i++) {
        factorial += i;
    };

    return factorial;
};

// Do not edit below this line
module.exports = sumAll;
