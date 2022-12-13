function solution(list) {
  const ranges = [];
  let range = [];
  list.sort((a, b) => a - b);

  // this helper function that will be brute forcing through the array. 
  const helper = (index = 0) => {
    // this is the base case to terminate the recursion.
    if (index > list.length - 1) {
      if(range.length > 2) ranges.push(`${range[0]}-${range[range.length - 1]}`);
      return;
    };
    // this checks for sequence of 1 difference.
    if(list[index + 1] - list[index] === 1) {
      range.push(list[index]);
      helper(index + 1);
    } else {
      range.push(list[index]);
      if(range.length > 2) ranges.push(`${range[0]}-${range[range.length - 1]}`);
      else ranges.push(range.join(','))
      range = [];
      helper(index + 1);
    }
  }

  helper();
  return ranges.join(",");
}


console.log(solution([
  -6, -3, -2, -1,  0,  1,  3,
   4,  5,  7,  8,  9, 10, 11,
  14, 15, 17, 18, 19, 20
]))
console.log(solution([
  -69, -67, -64, -62,
  -59, -56, -55, -53,
  -50, -48, -47
]))
