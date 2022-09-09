// Time: O(n)
// space: O(n)

function moveZeros(arr) {
  const zeros = [];
  for(let i =0; i < arr.length; i++){
    if (arr[i] === 0){
      zeros.push(...arr.splice(i,1))
      i--;
    }
  }
  return arr.concat(zeros)
}
// test cases
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
