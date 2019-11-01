import SortedArray from './SortedArray';

describe('SortedArray', () => {
  it('should initialize with values', () => {
    const arr = new SortedArray([1, 2]);

    expect(arr.get()).toEqual([1, 2]);
  });

  it('should get length', () => {
    const arr = new SortedArray();

    arr.push(1, 2, 3);
    expect(arr.length()).toEqual(3);
  });

  it('should return native array', () => {
    const arr = new SortedArray();

    arr.push(1, 2, 3);
    expect(arr.get()).toEqual([1, 2, 3]);
    expect(arr.get().join()).toEqual('1,2,3');
  });

  it('should return value by index', () => {
    const arr = new SortedArray();

    arr.push(1, 2, 3);
    expect(arr.getByIdx(1)).toEqual(2);
  });

  it('should push one value and values', () => {
    const arr = new SortedArray();

    arr.push(1);
    expect(arr.get()).toEqual([1]);
    arr.push(2, 3, 4, 5);
    expect(arr.get()).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort array', () => {
    const arr = new SortedArray([23, 45, 2, 100, 3, 59, 34]);

    expect(arr.get()).toEqual([2, 3, 23, 34, 45, 59, 100]);
  });

  it('should find first value', () => {
    const arr = new SortedArray([23, 45, 2, 100, 3, 59, 34]);

    expect(arr.find(2)).toEqual(0);
  });

  it('should find last value', () => {
    const arr = new SortedArray([23, 45, 2, 100, 3, 59, 34]);

    expect(arr.find(100)).toEqual(6);
  });

  it('should find value in left part of array', () => {
    const arr = new SortedArray([23, 45, 2, 100, 3, 59, 34]);

    expect(arr.find(3)).toEqual(1);
  });

  it('should find value in right part of array', () => {
    const arr = new SortedArray([23, 45, 2, 100, 3, 59, 34]);

    expect(arr.find(34)).toEqual(3);
  });

  it('should find value that in middle of array', () => {
    const arr = new SortedArray([23, 45, 2, 100, 3, 59, 34]);

    expect(arr.find(3)).toEqual(1);
  });

  it('should return -1 on non found value', () => {
    const arr = new SortedArray([23, 45, 2, 100, 3, 59, 34]);

    expect(arr.find(1000)).toEqual(-1);
  });
});
