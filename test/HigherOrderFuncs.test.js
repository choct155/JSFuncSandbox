const {recSum, foldLeft, mapArr, filterArr} = require('../src/HigherOrderFuncs.js');

const testArr = [1,2,3,4];

test(`recSum(${testArr}) equals 10`,
  () => {
    expect(recSum(testArr)).toBe(10);
  }
);

test(`We should be able to call a foldLeft that returns the same 10 given
      f = (x, y) => x + y`,
  () => {
    expect(foldLeft(0, (x, y) => x + y, testArr)).toBe(10);
  }
);

test(`mapArr((x) => 2 * x, ${testArr}) equals [2,4,6,8]`,
  () => {
    expect(mapArr((x) => 2 * x, testArr)).toBe([2,4,6,8]);
  }
);

test(`The evens from testArr ([2,4]) can be extracted with
      filterArr((x) => x % 2 === 0, ${testArr})`,
  () => {
    expect(filterArr((x) => x % 2 == 0, testArr)).toBe([2,4]);
  }
);
