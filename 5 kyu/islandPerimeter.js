const dfs = (i, j, grid, visits) => {
  if (
    i >= grid.length ||
    j >= grid[0].length ||
    i < 0 ||
    j < 0 ||
    grid[i][j] == 'O'
  ) {
    return 1;
  }
  if (visits.includes(`${i}-${j}`)) {
    return 0;
  }
  visits.push(i + '-' + j);

  let perim = dfs(i, j + 1, grid, visits);
  perim += dfs(i + 1, j, grid, visits);
  perim += dfs(i, j - 1, grid, visits);
  perim += dfs(i - 1, j, grid, visits);
  return perim;
};

const landPerimeter = (arr) => {
  const visits = [];
  let perim = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 'X') {
        perim += dfs(i, j, arr, visits);
        continue;
      }
    }
  }
  return 'Total land perimeter: ' + perim;
};
module.exports = landPerimeter;
