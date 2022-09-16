function dirReduc(arr){
  const obj = {NORTH: "SOUTH", EAST: "WEST", SOUTH: "NORTH", WEST: "EAST"};
  const stack = [];
  for(let i = 0; i < arr.length; i++) {
    if(stack.length && (obj[stack[stack.length - 1][0]] === arr[i])) {
      arr.splice(stack[stack.length - 1][1], 2);
      i = i - 1;
      stack.pop();
    } else {
      stack.push([arr[i], i]);
    }
  }
  console.log(arr);
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
dirReduc(["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"]);


