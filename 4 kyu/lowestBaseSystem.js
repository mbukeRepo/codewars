function getMinBaseui (number) {
    let base = number % 2 === 0 ? number - 1 : parseInt(number % 2);
    const convert = (num) => {
      if(num === 1) return;
      const digit = num % base;
      if (digit !== 1) {
        base --;
        convert(number)
      } else {
        convert(parseInt(num / base))
      }
    }
    convert(number);
    return base;
}
function getMinBase(n) {
  // Start with base 2
  let base = 2;

  // Keep incrementing the base until the number of digits in the base b
  // representation of n is equal to the value of n expressed in base b
  while (Math.floor(newtonRaphson(n, base)) + 1 !== parseInt(n.toString(base), base)) {
    base++;
  }

  return base;
}

// Newton-Raphson method for calculating the logarithm of a number
function newtonRaphson(x, b) {
  // Initial guess
  let y = 1;

  // Iterate until the difference between y and b^y is less than 0.001
  while (Math.abs(Math.pow(b, y) - x) > 0.001) {
    // Update y using the formula y = y - f(y) / f'(y)
    y = y - (Math.pow(b, y) - x) / (Math.pow(b, y) * Math.log(b));
  }

  return y;
}
console.log(getMinBase(1001001));
console.log(getMinBase(125002500050001))
