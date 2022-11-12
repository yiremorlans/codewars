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