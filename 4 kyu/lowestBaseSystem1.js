const lowestBase = n => {
  let k, m = parseInt(Math.log2(n));
  while(m > 2) {
    k = parseInt(Math.pow(n, 1/ m));
    if(((Math.pow(k, m + 1) - 1) / (k - 1)) === n) return k;
    m--;
  }
  return n - 1;
}

console.log(lowestBase(125002500050001))
console.log(lowestBase(1001001001001))
console.log(lowestBase(1000000000000))
