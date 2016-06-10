describe('Bubble Sort', function() {

  beforeEach(function() {
  });

  it('handles an empty array', function() {
    expect( bubbleSort([])).toEqual([]);
  });
  it('handles a non empty array', function() {
    expect( bubbleSort([18,4,28,129,1,0])).toEqual([0,1,4,18,28,129]);
  });
  it('handles a non empty array', function() {
    expect( bubbleSort([500,1000])).toEqual([500,1000]);
  });
  it('handles a non empty array', function() {
    expect( bubbleSort([10,5])).toEqual([5,10]);
  });
  it('handles a non empty array', function() {
    expect( bubbleSort([1888,4,328,129,1,0])).toEqual([0,1,4,129,328,1888]);
  });
  // it('counts comparison calls', function() {
  //   var comparisonSpy = bubbleSort;
  //   spyOn(comparisonSpy)
  //   comparisonSpy([1,3,2]);
  //   expect(comparison).toHaveBeenCalled(2);
  // });
});
