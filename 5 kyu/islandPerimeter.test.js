const landPerimeter = require('./islandPerimeter');
describe('Testing', function () {
  it('Basic testing', () => {
    expect(
      landPerimeter([
        'OXOOOX',
        'OXOXOO',
        'XXOOOX',
        'OXXXOO',
        'OOXOOX',
        'OXOOOO',
        'OOXOOX',
        'OOXOOO',
        'OXOOOO',
        'OXOOXX',
      ])
    ).toEqual('Total land perimeter: 60');

    expect(
      landPerimeter([
        'OXOOO',
        'OOXXX',
        'OXXOO',
        'XOOOO',
        'XOOOO',
        'XXXOO',
        'XOXOO',
        'OOOXO',
        'OXOOX',
        'XOOOO',
        'OOOXO',
      ])
    ).toEqual('Total land perimeter: 52');

    expect(
      landPerimeter([
        'XXXXXOOO',
        'OOXOOOOO',
        'OOOOOOXO',
        'XXXOOOXO',
        'OXOXXOOX',
      ])
    ).toEqual('Total land perimeter: 40');

    expect(
      landPerimeter([
        'XOOOXOO',
        'OXOOOOO',
        'XOXOXOO',
        'OXOXXOO',
        'OOOOOXX',
        'OOOXOXX',
        'XXXXOXO',
      ])
    ).toEqual('Total land perimeter: 54');

    expect(
      landPerimeter([
        'OOOOXO',
        'XOXOOX',
        'XXOXOX',
        'XOXOOO',
        'OOOOOO',
        'OOOXOO',
        'OOXXOO',
      ])
    ).toEqual('Total land perimeter: 40');
  });
});
