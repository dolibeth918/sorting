describe('Merge Sort', function() {
  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  it('returns a sorted array', function() {
    expect(mergeSort([5, 7, 1])).toEqual([1, 5, 7]);
  });
});
