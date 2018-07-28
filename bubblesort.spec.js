describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('returns the same array if the length of the array is 1', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('returns a sorted array', function(){
    expect( bubbleSort([5, 7, 1]) ).toEqual( [1, 5, 7] );
  });
  it('returns a sorted array', function(){
    expect( bubbleSort([5, 7, 1, 10, 12, 9]) ).toEqual( [1, 5, 7, 9, 10, 12] );
  });
  for (let i = 2; i < 103; i += 20){
    it(`sorts an array of ${i} random items`, function(){
      let arr = generateArray(i, 0, 100);
      let sorted = arr.slice().sort((a, b) => a - b);
      expect( bubbleSort(arr) ).toEqual(sorted);
    });
  }

  it('calls swap expected number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  })

});

function generateArray(size, lower, upper){
  let randomArr = [];
  while (size--){
    let random = Math.floor(lower+Math.random() * upper);
    randomArr.push(random);
  }
  return randomArr;
}

