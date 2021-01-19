/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sumArray = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j< nums.length; j++)
        if(nums[i] + nums[j] == target){
            sumArray=[i, j]
            return sumArray
        }
    }
};