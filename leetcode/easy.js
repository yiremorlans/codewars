// Create a function that returns an array with the running sum of each value in the array

var runningSum = function(nums) {
    let resultArr = [] 
    let accum = 0 
    for (let i=0; i<nums.length; i++){    
        resultArr.push(accum + nums[i]) 
        accum += nums[i]
    }
    return resultArr
    
};

// Find the pivotIndex in an array
var pivotIndex = function(nums) {
    if (nums.length === 0) return -1;
    if (nums.legnth === 1) return 0;

    let totalSum = nums.reduce((total, value) => total + value, 0)
    let leftSum = 0
    
    for (let i=0; i< nums.length; i++){
        
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
};

// Are the strings isomorphic?
var isIsomorphic = function(s, t) {
    if (s.length!=t.length) return false;
    for (let i=0;i<s.length;i++){
        if (t[s.indexOf(s[i])]!==t[i] || s[t.indexOf(t[i])]!=s[i]) return false;
    }
    return true;
};
// quadratic solution using hashmap to map letters together
function isomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var map = {};
    for(var i = 0; i < str1.length; i++) {
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
    if (s.length === 0) return true

    let sPointer = 0

    for (let i = 0; i < t.length; i++) {
        if (s[sPointer] === t[i]) sPointer++
    }
    return sPointer === s.length
}

// Create a function that returns the amount of jewels present in the collection of stones. Case sensitive
var numJewelsInStones = function(jewels, stones) {
    let totalJewels = 0
    for (let i=0; i< stones.length; i++){
        if (jewels.includes(stones[i])) {
            totalJewels++
        }
    }
    return totalJewels
};

/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! */
function maxCharacter(string){

    const charMap = (string) => {
        let obj = {}

        for (const letter of string) {
            obj[letter] ? obj[letter]++ : obj[letter] = 1
        }
        return obj
    }

    if (string.length === 0) {
        return ''
    } else {

        string = string.toLowerCase().split(' ').join('')
        const hashmap = charMap(string)

        let maxValue = 0
        let maxChar;

        for (let [key, value] of Object.entries(hashmap)){
            if (value > maxValue){
                maxValue = value
                maxChar = key
            }
        }
        return maxChar
    }
}

console.log(maxCharacter('Happy Birthday to Maria ! '))

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

    let valueObj = {}

    for (let i=0; i< arr.length; i++){
        if (valueObj.hasOwnProperty(arr[i])) {
            return true
        } else {
            valueObj[arr[i]] = 1
        }
    }

    return false
}

console.log(areThereDuplicates([1,1,1,3,3,4,3,2,4,2]))
console.log(areThereDuplicates([1,2,3,4]))