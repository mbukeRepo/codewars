function orderWeight(strng) {
  let arr = strng.split(' ');
  const obj = {};
  let res = [];
  arr.forEach((num) => {
    let val = num.split('').reduce((total, el) => (total += el * 1), 0);
    if (obj[val]) {
      obj[val].push(num);
    } else {
      obj[val] = [num];
    }
  });
  for (key in obj) {
    obj[key].sort();
  }
  Object.keys(obj).forEach((key) => (res = res.concat(obj[key])));
  return res.join(' ');
}
module.exports = orderWeight;
