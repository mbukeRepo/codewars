function rangeHelper(list,startIndex, index = startIndex){
  console.log(startIndex, index);
  if (Math.abs(list[index + 1] - list[index]) !== 1) {
    if (index > 1 && list[index] - list[startIndex] >= 2) return [index + 1, true, list[startIndex], list[index]];
    return [index + 2, false, list[index - 1], list[index]];
  }
  index++;
  return rangeHelper(list, startIndex, index);
}
function solution(list){
   list.sort((a, b) => a - b)
   console.log(list);
   const ranges = [];
   for(let i = 0; i < list.length;) {
     let [index, ...range] = rangeHelper(list, i);
     console.log(range);
     if (range[0] ) ranges.push(range.splice(1, 2).join("-"))
     else {
       if (range[1]) ranges.push(`${range[1]}`)
       if (range[2]) ranges.push(`${range[2]}`)
//        index++;
     }
     i = index;
   }
   return ranges.join(",")
}


console.log(solution([
  -86, -85, -82, -79, -76, -74,
  -72, -69, -66, -63, -62, -59,
  -57, -56, -55, -52, -51, -49,
  -46, -43, -41, -38, -36, -34,
  -31, -28
]));
