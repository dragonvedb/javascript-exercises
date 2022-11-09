const ftoc = function(f) {
  
  let c = (f - 32) * (5 / 9);
  
  if (!(Number.isInteger(c))) {
    c = Number(c.toFixed(1));
  }
  
  return c;
};

const ctof = function(c) {
  let f = c * (9 / 5) + 32;
  
  if (!(Number.isInteger(f))) {
    f = Number(f.toFixed(1));
  }
  
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
