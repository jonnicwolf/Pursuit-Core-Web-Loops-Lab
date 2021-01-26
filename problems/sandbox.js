function rangeSum(max, min) {
  let num = [];
  for (let i = min; i <= max; i++) {
    num.push(i)
  }
  
  let numSum = num.reduce((acc, cVal) => {
    return acc + cVal;
  })
  return numSum
}
console.log(rangeSum(10,1))



