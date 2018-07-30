describe('Selection Sort', function() {
  it('handles an empty array', function() {
    expect(selectionSort([])).toEqual([]);
  });
  it('returns the same array if the length of the array is 1', function() {
    expect(selectionSort([1])).toEqual([1]);
  });
  it('returns a sorted array', function() {
    expect(selectionSort([5, 7, 1])).toEqual([1, 5, 7]);
  });
  it('returns a sorted array', function() {
    expect(selectionSort([5, 7, 1, 10, 12, 9])).toEqual([1, 5, 7, 9, 10, 12]);
  });
  for (let i = 2; i < 103; i += 20) {
    it(`sorts an array of ${i} random items`, function() {
      let arr = generateArray(i, 0, 100);
      let sorted = arr.slice().sort((a, b) => a - b);
      expect(selectionSort(arr)).toEqual(sorted);
    });
  }
});

function generateArray(size, lower, upper) {
  let randomArr = [];
  while (size--) {
    let random = Math.floor(lower + Math.random() * upper);
    randomArr.push(random);
  }
  return randomArr;
}
