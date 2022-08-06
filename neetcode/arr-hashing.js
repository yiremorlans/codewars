//Contains Duplicate. Create a function that returns true if element appears atlest twice.
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};
//Valid anagram. Given two str, create a function that returns true if both str contain the same letters exact amount of times.
var isAnagram = function(s, t) {
    let newSortS = s.split('').sort()
    let newSortT = t.split('').sort()
    console.log(newSortS, newSortT)
    return newSortS.join('') === newSortT.join('')
};
//receiving two str containing only lowercase letters
//returning a bool if both str contain the same letters.
//split s and t, then sort into new vars
//join the var back to str and compare