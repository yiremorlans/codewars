/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line * with  places after the decimal.
 **/
function plusMinus(arr) {
  // an array of numbers which are whole, but positive, negative and zero
  // console log the ratios of their appearance in the array set to fixed 6 digits after decimal
  // array size of 6 then [-4,3,-9,0,4,1] positive: 3/6 negative: 2/6 zero: 1/6
  // iterate through the array and add to vars as counters for positive, negative, zero
  // divide that number by the length of the arr
  // console log the value with toFixed(6)

  let positiveNums = 0;
  let negativeNums = 0;
  let zeroNums = 0;
  const arrLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value > 0) {
      positiveNums++;
    } else if (value < 0) {
      negativeNums++;
    } else {
      zeroNums++;
    }
  }
  console.log((positiveNums / arrLength).toFixed(6));
  console.log((negativeNums / arrLength).toFixed(6));
  console.log((zeroNums / arrLength).toFixed(6));
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // receiving an array of numbers
  // returning the second largest in the array
  // [2,3,6,6,5] -- > sort [2,3,5,6,6]
  // find the max value
  // remove all instances of the max value
  // sort the array and the largest value left would be the second largest
  const largestValue = Math.max(...nums);
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (largestValue !== nums[i]) {
      newArr.push(nums[i]);
    }
  }
  return Math.max(...newArr);
}

/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */
function miniMaxSum(arr) {
  // receiving an array of integers--might not be sorted
  // returning a string type of two values the min sum of 4 elements and the max sum of 4 elements
  // sort the arr from min to max
  // iterate through each index
  // two vars to store my counter for min and max
  // if the i is 0 add number to min counter
  // if the i is length - 1 add number to max counter
  // else add each value to both min and max counter
  let arrCopy = arr.slice();
  arrCopy = arrCopy.sort((a, b) => a - b);
  let minSum = 0; //10,
  let maxSum = 0; //14,
  // [1,2,3,4,5]

  for (let i = 0; i < arrCopy.length; i++) {
    if (i === 0) {
      minSum += arrCopy[i];
    } else if (i === arrCopy.length - 1) {
      maxSum += arrCopy[i];
    } else {
      minSum += arrCopy[i];
      maxSum += arrCopy[i];
    }
  }
  console.log(`${minSum} ${maxSum}`);
}
