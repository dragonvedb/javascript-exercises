const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = arr => arr.reduce(function(accumulator, num) {
  return accumulator + num;
}, 0)

const multiply = arr => arr.reduce(function(accumulator, num) {
  return accumulator * num;
}, 1)

const power = (x, n) => {
	const init = x;
  
  for (let i = n; i > 1; i--) {
    x *= init;
  }

  return x;
};

const factorial = n => {
  if (n === 1 || n === 0) return 1;

  return n *= factorial(n - 1);
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
