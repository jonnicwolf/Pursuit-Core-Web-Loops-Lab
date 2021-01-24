/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */

function oneTillDoneWhileLoop(number) {
  let done = [];
  let x = 0;
  while (x < number) {
    x++;
    done.push(x)
  }
  return done
}
console.log(oneTillDoneWhileLoop(20))

/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */

function oneTillDoneForLoop(num) {
  done = [];
  for (let i = 0; i < num; i++) {
    done.push(i + 1);
  }
  return done
}
console.log(oneTillDoneForLoop(20))
/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroWhileLoop(num) {
  let done = [num];
  while (num > 1) {
    num--;
    done.push(num);
  }
  return done;
}
console.log(doneToZeroWhileLoop(20))
/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(number) {
  let done = []
  for (let i = number; i <= number && i > 0; i--){
    done.push(i)
  }
  return done
}
console.log(doneToZeroForLoop(20))

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddWhileLoop(max) {
  numTest = []
  let x = 0
  while (x <= max) {
    if (x < max && x % 2 === 0) {
      numTest.push(`${x} is even`)
      x++
    } else if (x < max && x % 2 !== 0) {
      numTest.push(`${x} is odd`)
      x++
    } else if (x === max && x % 2 === 0) {
      numTest.push(`${x} is even`)
      x++
    } else if (x === max && x % 2 !== 0) {
      numTest.push(`${x} is odd`)
      x++
    } else {
      console.log('whoa something went really wrong')
    }
  }
  return numTest
}
console.log(evenAndOddWhileLoop(20))

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */

function evenAndOddForLoop(max) {
  let arr = [];
  for (let x = 0; x <= max; x++) {
    if (x < max && x % 2 === 0 ) {
      arr.push(`${x} is even`)
    } else if (x % 2 !== 0) {
      arr.push(`${x} is odd`)
    } else if (x === max && x % 2 === 0) {
      arr.push(`${x} is even`)
    } else if (x === max && x % 2 !== 0) {
      arr.push(`${x} is odd`)
    }
  }
  return arr
}
console.log(evenAndOddForLoop(20))

/**
 * 
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a while loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9WhileLoop(x) {
  let arr = [];
  let counter = 0
  let product = 0
  while (counter <= x) {
      product = counter * 9
      counter++
    arr.push(product)
  }return arr
}
console.log(tillXTimes9WhileLoop(5))

/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a for loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9ForLoop(x) {
  let arr = [];
  for (let counter = 0; counter <= x; counter++) {
    let product = counter * 9
    arr.push(product)
  }
  return arr;
}
console.log(tillXTimes9ForLoop(8))

/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveWhileLoop(max) {
  let arr = []
  let count = 0 
  while (count <= max)
  if (count % 5 === 0) {
    arr.push(count)
    console.log(count)
    count++
    console.log(count)
  } else {
    count++
    console.log(count)
  }
  return arr
}
console.log(endsWithFiveWhileLoop(100))


/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */

function endsWithFiveForLoop(max) {
  let array = [];
  for (let count = 0; count <= max; count++){
    if (count % 5 === 0) {
      array.push(count);
      console.log(count)
    }
  }
  return array
}
// function endsWithFiveForLoop(max) {
//   let array = [];
//   for (let count = 5; count <= max; count+=10){
//     if (count % 5 === 0) {
//       array.push(count);
//       console.log(count)
//     }
//   }
//   return array
// }
// Try refactoring the code above to increment your i by 10 and starting at 5.



/**
 Without running/executing your code, how many times will the loop below run?
  Explain why.
 */
/*
let i = 5;

while (i > 3) {
    i += 1
}
*/

/**
 * // Write your explanation here!
 *
 */
 
 //It runs infinitely because the condition asks if i is greater than 3. Since i is assigned the value of 5, the condition is true. We then execute the codeblock which increases i (which is 5) by factor of 1 (5 is now 6), which again makes the condition of the loop true so it runs the code block again and forever since all numbers past 3 will run the codeblock.

 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
function fizzBuzzPart1(max) {
  for (let x = 0; x <= max; x++) {
    if (x % 1 === 0) {
      array.push(x).map(buzz())
    }
  }
  return array
}
console.log(fizzBuzzPart1(100))


 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
function fizzBuzzPart2() {}

/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
function rangeSum(max, min) {
  num = [];
  for (min = min; min <= max; min++){
    num.push(min)
  }
  return num
}
console.log(rangeSum(10,1))
/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
function rangeOdd() {}

/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther() {}

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a while loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsWhileLoop() {}

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a for loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsForLoop() {}
/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount() {}
/**
 * Takes in an array and a target.
 * Determines the first index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method indexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} first index found.
 */
function firstIndexFound() {}
/**
 * Takes in an array and a target.
 * Determines the last index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method lastIndexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} last index found.
 */
function lastIndexFound() {}

/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex() {}


/**
 * Takes in an array.
 * Returns a new array where each element is the cumulative sum so far.
 * Exp: Input [5, 2, 9] Output: [5, 7, 16] . 5 is the first element so added to 0.
 *  7 because 5 + 2 is 7
 * 16 because 7 + 9 is 16
 * @param {number[]} elements
 * @returns {number[]}
 */
function cumulativeSum() {}



module.exports = {
  oneTillDoneWhileLoop,
  oneTillDoneForLoop,
  doneToZeroWhileLoop,
  doneToZeroForLoop,
  evenAndOddWhileLoop,
  evenAndOddForLoop,
  tillXTimes9WhileLoop,
  tillXTimes9ForLoop,
  endsWithFiveWhileLoop,
  endsWithFiveForLoop,
  fizzBuzzPart1,
  fizzBuzzPart2,
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
