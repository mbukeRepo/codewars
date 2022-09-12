function sumIntervals(intervals) {
  let passed = [new Set()];
  let size = 0;
  intervals.forEach(interval => {
    for(let i = interval[0]; i < interval[1]; i++ ){
      if (passed[passed.length-1].size === 16777000) passed.push(new Set());
      passed[passed.length-1].add(i);
    }
  });
  passed.forEach(pass => size += pass.size);
  return size;
}

const test1 = [[1, 5]];
const test2 = [[1,4],
   [7, 10],
   [3, 5]];
const test3 = [ [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]];
const test4 = [ [0, 20],
   [-100000000, 10],
   [30, 40]];
console.log(sumIntervals(test2))
