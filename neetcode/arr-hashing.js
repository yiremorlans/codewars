//Contains Duplicate. Create a function that returns true if element appears atlest twice.
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};
