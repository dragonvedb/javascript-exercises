const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
};

const multiply = function(arr) {
  let prod = 1;

  for (const num of arr) {
    prod *= num;
  }

  return prod;
};

const power = function(x, n) {
	const init = x;
  
  for (let i = n; i > 1; i--) {
    x *= init;
  }

  return x;
};

const factorial = function(n) {
  if (n === 1 || n === 0) return 1;

  n *= factorial(n - 1);
  return n;
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
