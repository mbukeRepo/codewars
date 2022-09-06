const helper = (a, b) => {
  let prod = a, i=a;
  while(i++ < b) {
    prod *= i;
  }
  return prod;
}

const combinatoric = (n, r) => {
  if(n == r || r == 0)
   return 1;
  r = (r < (n - r)) ? n - r : r;
  return helper(r + 1, n) / helper(1, n - r)
}

function estSubsets(arr) {
    var n = 0;
    const uniqueArr = Array.from(new Set(arr));
    var i = 1;
    while (i <= uniqueArr.length){
      n += combinatoric(uniqueArr.length, i);
      i++;
    }
    return n;
}

module.exports = estSubsets;
