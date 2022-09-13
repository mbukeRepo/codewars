const isArray = (array) => Array.isArray(array);
Array.prototype.sameStructureAs = function (other) {
    let falseFlag = true;
    for(let i = 0; i < other.length; i++) {
      if((isArray(this[i]) && !isArray(other[i])) || (!isArray(this[i]) && isArray(other[i]))) falseFlag = false;
      isArray(this[i]) && isArray(other[i]) && (this[i].length != other[i].length) && (falseFlag = false);
      isArray(this[i]) && isArray(other[i]) && (this[i].every((value, idx) => {
        if((isArray(value) && !isArray(other[i][idx])) || (!isArray(value) && isArray(other[i][idx]))) {
          falseFlag = false;
          return;
        };
      }));
    }
    return (this.length === other.length) && falseFlag;
};
module.exports = Array.prototype;
