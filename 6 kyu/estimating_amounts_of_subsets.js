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
    console.log(n) // n = amount of subsets that don not have repeated elements
}

estSubsets( ['a', 'z', 'z', 'z', 'b', 'j', 'f', 'k', 'b', 'd', 
    'j', 'j', 'n', 'm', 'm']);
