//Contains Duplicate. Create a function that returns true if element appears atlest twice.
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};
//Valid anagram. Given two str, create a function that returns true if both str contain the same letters exact amount of times.
var isAnagram = function(s, t) {
    let newSortS = s.split('').sort()
    let newSortT = t.split('').sort()
    return newSortS.join('') === newSortT.join('')
};
//receiving two str containing only lowercase letters
//returning a bool if both str contain the same letters.
//split s and t, then sort into new vars
//join the var back to str and compare

//Two Sums. Given an array and a target int, return the indices of the two values in the array that equal the target.
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}; //Optimized solution creating a hash map below 
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) { //only iterates through array once as it checks for remainder to solution.
            return [map[target - nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
};

