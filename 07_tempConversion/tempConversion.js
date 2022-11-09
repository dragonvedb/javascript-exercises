const ftoc = function(f) {
  
  let c = (f - 32) * (5 / 9);
  
  if (!(Number.isInteger(c))) {
    c = c.toFixed(1);
  }
  
  return c;
};

const ctof = function(c) {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
