function fib(max, arr=[0,1] ) {
  for(let i = 2; i <= max; i++){
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr;
}
function perimeter(n) {
    const fibs = fib(n + 1);
    return  fibs.reduce((total, num) => total += num, 0) * 4;
}

console.log(perimeter(7))
