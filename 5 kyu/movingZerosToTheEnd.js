// Time: O(n)
// space: O(n)

function moveZeros(arr) {
  const zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(...arr.splice(i, 1));
      i--;
    }
  }
  return arr.concat(zeros);
}

module.exports = moveZeros;
