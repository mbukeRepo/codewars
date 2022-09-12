const zeros = (n) => {
  return (Math.floor(n / 5) < 1) ? 0 : Math.floor(n / 5) + zeros(Math.floor(n / 5));
}

module.exports = zeros;
