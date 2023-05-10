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
