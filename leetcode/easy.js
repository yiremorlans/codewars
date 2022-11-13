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