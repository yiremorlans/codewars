// Create a function that returns an array with the running sum of each value in the array

var runningSum = function (nums) {
  let resultArr = [];
  let accum = 0;
  for (let i = 0; i < nums.length; i++) {
    resultArr.push(accum + nums[i]);
    accum += nums[i];
  }
  return resultArr;
};

// Find the pivotIndex in an array
var pivotIndex = function (nums) {
  if (nums.length === 0) return -1;
  if (nums.legnth === 1) return 0;

  let totalSum = nums.reduce((total, value) => total + value, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

// Are the strings isomorphic?
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (t[s.indexOf(s[i])] !== t[i] || s[t.indexOf(t[i])] != s[i]) return false;
  }
  return true;
};
// quadratic solution using hashmap to map letters together
function isomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var map = {};
  for (var i = 0; i < str1.length; i++) {
    var a = str1[i];
    var b = str2[i];
    if (typeof map[a] === "undefined") {
      map[a] = b;

      // check for error in first tuple ("ABB", "XYZ")
    } else if (map[a] !== b) {
      return false;
    }

    // check for error in second tuple ("ABC", "XYY")
    for (let key in map) {
      if (key !== a && b === map[key]) {
        return false;
      }
    }
  }
  return true;
}

// Create a function that returns true/false if s is subsequence(new str formed from original s without some chars in t while maintaining order of s)
const isSubsequence = (s, t) => {
  if (s.length === 0) return true;

  let sPointer = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[sPointer] === t[i]) sPointer++;
  }
  return sPointer === s.length;
};

// Create a function that returns the amount of jewels present in the collection of stones. Case sensitive
var numJewelsInStones = function (jewels, stones) {
  let totalJewels = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      totalJewels++;
    }
  }
  return totalJewels;
};

/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! */
function maxCharacter(string) {
  const charMap = (string) => {
    let obj = {};

    for (const letter of string) {
      obj[letter] ? obj[letter]++ : (obj[letter] = 1);
    }
    return obj;
  };

  if (string.length === 0) {
    return "";
  } else {
    string = string.toLowerCase().split(" ").join("");
    const hashmap = charMap(string);

    let maxValue = 0;
    let maxChar;

    for (let [key, value] of Object.entries(hashmap)) {
      if (value > maxValue) {
        maxValue = value;
        maxChar = key;
      }
    }
    return maxChar;
  }
}

console.log(maxCharacter("Happy Birthday to Maria ! "));

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/*Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const areThereDuplicates = (arr) => {
  let valueObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (valueObj.hasOwnProperty(arr[i])) {
      return true;
    } else {
      valueObj[arr[i]] = 1;
    }
  }

  return false;
};

console.log(areThereDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(areThereDuplicates([1, 2, 3, 4]));

//Given an array nums of size n, return the majority element.

/*The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

const majorityElement = function (nums) {
  // declare empty obj
  let hashmap = {};
  // iterate through the array
  for (const num of nums) {
    if (num in hashmap) {
      hashmap[num]++;
    } else {
      hashmap[num] = 1;
    }
  }
  // store the values in obj as property and ++ the value as iterate through
  // iterate through hashmap
  let maxVal = 0;
  let majority = 0;
  for (const [key, value] of Object.entries(hashmap)) {
    if (value > maxVal) {
      maxVal = value;
      majority = +key;
    }
  }
  // keep track of value size and property
  return majority;
};

/*Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.*/

//split magazine string into an array
// declare empty obj
// iterate and create a hashmap with values representing the # of occurrances for each word
// grab input and split into array
// loop through array and check if value exists in hashmap, -- value in hashmap
// else return false

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const ransomNote = function (string, magazine) {
  const magazineArr = magazine
      .replaceAll(".", "")
      .replaceAll(",", "")
      .toLowerCase()
      .split(" "),
    stringArr = string.split(" ");

  let hashmap = {};

  for (const word of magazineArr) {
    hashmap[word] ? hashmap[word]++ : (hashmap[word] = 1);
  }

  for (const word of stringArr) {
    if (hashmap.hasOwnProperty(word) && hashmap[word] > 0) {
      hashmap[word]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

/*Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once. */

const twoSum = (arr, sum) => {
  const arrHash = {};
  let pairs = [];

  for (const num of arr) {
    if (sum - num in arrHash) {
      pairs.push([sum - num, num]);
    } else {
      arrHash[num] = 1;
    }
  }
  return pairs;
};

console.log(twoSum([1, 2, 2, 3, 4], 4), [
  [2, 2],
  [3, 1],
]);

//Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

//For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].*/

const productOfEach = (array) => {
  let productArr = [];

  for (let i = 0; i < array.length; i++) {
    let productVal = array
      .filter((value) => value != array[i])
      .reduce((total, value) => total * value, 1);
    productArr.push(productVal);
  }

  return productArr;
};

// Product of nums with constraints defined by leetcode. Must be O(n) and not use division
function productOfEach(nums) {
  let product = [];
  let leftSide = 1;
  let rightSide = 1;

  for (let i = 0; i < nums.length; i++) {
    product[i] = leftSide;
    leftSide = leftSide * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    product[i] = rightSide * product[i];
    rightSide = rightSide * nums[i];
  }
  return product;
}

console.log(productOfEach([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);

console.log(productOfEach([3, 2, 1]), [2, 3, 6]);

// Allow one function call: Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let called = false;
  return function (...args) {
    if (called) {
      return;
    } else {
      called = true;
      return fn(...args);
    }
  };
};

/**
 * Build an array from permutation
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  // receiving an array of integers
  // returning a new permutation array of integers where nums[i](value) is the index of nums
  // iterate through nums and assign new index based on nums[i]
  // [0, 2,1,5,3,4] -> nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]
  // [0, 1, 2, 4, 5, 3]
  let permutationArray = [];
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    permutationArray.push(nums[value]);
  }
  return permutationArray;
};
/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */
var numIdenticalPairs = function (nums) {
  let pairsAccum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        pairsAccum++;
      }
    }
  }
  return pairsAccum;
};

/**
 * Given an integer x, return true if x is a palindrome, and false otherwise. Could you solve it without converting the integer to a string?
 */
var isPalindrome = function (x) {
  let reverse = 0;
  let copy = x;

  //The loop break when the copy of original number becomes zero
  //Also negative number cannot be a palindrome
  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = Math.floor(copy / 10);
  }

  return reverse == x;
};

/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};
/**
 * Remove Duplicates from Sorted Array.
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relativeorder of the elements should be kept the same. Then return the number of unique elements in nums.
 */
var removeDuplicates = function (nums) {
  let temp = nums[0];
  let position = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > temp) {
      temp = nums[i];
      nums[position] = temp;
      position++;
    }
  }
  return position;
};
/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let zero = nums.splice(i, 1);
      nums.push(zero);
      i--;
    }
  }
};
/**
 * You are given a 0-indexed array nums of size n consisting of non-negative integers.
 * You need to apply n - 1 operations to this array where, in the ith operation (0-indexed), you will apply the following on the ith element of nums:
 * If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
 * After performing all the operations, shift all the 0's to the end of the array.
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let next = nums[i + 1];

    if (curr === next) {
      nums[i] = curr * 2;
      nums[i + 1] = 0;
    }
  }

  let noZeros = nums.filter((value) => value !== 0);
  let onlyZeros = nums.filter((value) => value === 0);

  return [...noZeros, ...onlyZeros];
};
/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
var singleNumber = function (nums) {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (cache.hasOwnProperty(value)) {
      cache[value]++;
    } else {
      cache[value] = 1;
    }
  }

  for (const [key, value] of Object.entries(cache)) {
    if (value === 1) {
      return key;
    }
  }
};
/* O(n^2) easy to read solution */
var singleNumber = function (nums) {
  return nums.filter((num) => nums.indexOf(num) === nums.lastIndexOf(num));
};
