const isPrime = () => {

}

const factorial = (number) => {
  const prime = Array.apply(null, {length: number + 1}).map(() => true);
  let res = 1;
  for(let i = 2; i <= number; i++){
    console.log(prime)
    if(prime[i-1]){
      let j = i + i;
      while(j <= number){
        prime[j - 1] = false;
        j += i;
      }

      let sum = 0;
      let t = i;
      while(t <= number){
	sum += number / t;
        t *= i;
      }
      res *= i * parseInt(sum);
    }
  }
  return res;
}
console.log(factorial(5));
