/** num is the number we are going to use to find
    n-th fibonacci. this time we are going to be 
    finding fibonacci of multiples of 3. sum holds
    the sum of all even numbers. prev is holding
    the value from fibonacci calculation 
**/
function solution(max) {
  let num = 3;
  let sum = 0;
  let prev = fibo(num);
  while (prev < max) {
    sum += prev;
    num += 3;
    prev = fibo(num);
  }
}
/* memoized version of fibonacci */
function fibo(num, memo={}) {
  if(num < 2) return num;
  if(memo[num]) return memo[num];
  memo[num] = fibo(num - 1, memo) + fibo(n - 2, memo);
  return memo[num];
}
