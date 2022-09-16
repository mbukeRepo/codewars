function nthSmallest(arr, n, left, right) {
  if (n > arr.length) 
    return null;
  if (left < right){
    const partitionIdx = partition(arr, left, right);
    if(partitionIdx  === (n)){
      return arr[partitionIdx];
    } else if(n < partitionIdx) {
      return nthSmallest(arr, n, left, partitionIdx - 1);
    } else {
      return nthSmallest(arr, n, partitionIdx + 1, right);
    }
  }
}

const partition = function (nums, left, right) {
  let i = left;

  for (let j = left; j <= right; j++) {
    if (nums[j] <= nums[right]) {
      swap(nums, i, j);
      i++;
    }
  }
  return i;
};
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [5, 3, 2, 6, 4, 1];
//const arr1 = [14, 12, 46, 0, 334]
//console.log(arr.sort((a, b) => a - b))
console.log(nthSmallest(arr, 3, 0, arr.length))
//console.log(nthSmallest(arr1, 1, 0, arr.length));
//console.log(arr);
