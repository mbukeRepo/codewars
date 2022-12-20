const maximumSum = (pyramid, sum = 0, maxSum = 0, level = 0) => {
  if(level > pyramid.length - 1) {
    if (sum > maxSum) return sum;
  }
  let max = 0;
  console.log(sum)
  for (let i = 0; i < pyramid[level].length; i++) {
   max = maximumSum(pyramid, sum + pyramid[level][i], maxSum, level + 1 )
  }
  return max;
}

function longestSlideDown (pyramid) {
//    const sum = new Array(pyramid[pyramid.length - 1].length).fill(0);
   console.log(maximumSum(pyramid))
}

longestSlideDown(
 [[3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]]
);
