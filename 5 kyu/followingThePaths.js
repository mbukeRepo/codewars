function getNum(arr) {
  const nMax = arr.reduce((product, num) => product *= num, 1);
  const primes = Array.from(new Set(arr));
  primes.sort((a, b) => a-b);
  const largePrime = nMax / primes[0];
  return [nMax, countDivisors(primes, nMax) - 1, primes[0], largePrime];
}

function countDivisors(primes, num) {
  let total = 1;
  primes.forEach(prime => {
     let count = 0;
     while(num % prime == 0) {
       num = num/prime;
       count++;
     }
     total *= (count + 1)
  })
  return total;
}

console.log(getNum([2,13,2,5,2,5,3,3]));
console.log(getNum([2, 3, 5, 5]))
console.log(getNum([2,3,3,3,7]));


