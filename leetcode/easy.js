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