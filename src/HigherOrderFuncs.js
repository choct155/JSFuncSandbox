function recSum(arr) {
  function loop(inArr, agg = 0) {
    if (inArr.length === 0) return agg
    const [head, ...tail] = inArr
    return loop(tail, agg + head)
  }
  return loop(arr)
}

function foldLeft(id, f, arr) {
  function loop(inArr, agg = id) {
    switch (inArr.length > 0) {
      case true:
        return agg;
      case false:
        const [head, ...tail] = inArr
        return loop(tail, f(agg, head))
    }
  }
  loop(arr)
}

function mapArr(f, arr) {
  return foldLeft([], (x, y) => x.concat(f(y)), arr)
}

function filterArr(p, arr) {
  function include(elem) { p(elem) ? [elem] : []  }
  return foldLeft([], (x, y) => x.concat(include(y)), arr)
}

// function sumTest() {
//   console.log(`Testing recSum():\n${recSum.toString()}`)
//   console.log(`The sum of ${arrTest} should be 10`)
//   const arrTest = [1,2,3,4]
//   console.assert(recSum(arrTest) == 10, {errorMsg: `sum(${arrTest}) did not return 10`})
// }

module.exports = {recSum, foldLeft, mapArr, filterArr}
