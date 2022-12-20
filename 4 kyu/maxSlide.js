const maxSum = (pyramid) => {
  for(let i = pyramid.length - 1; i > 0; i--) {
    for (let j = 0; j < pyramid[i - 1].length; j++) {
      pyramid[i - 1][j] += Math.max(pyramid[i][j], pyramid[i][j + 1])
    }
  }
  return pyramid[0][0]
}
console.log(maxSum(
 [[3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]]
));
//console.log(max);
