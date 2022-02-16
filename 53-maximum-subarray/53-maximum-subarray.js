/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let localMax = nums[0];
    let globalMax = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        localMax = Math.max(localMax + nums[i], nums[i]);
        globalMax = Math.max(localMax, globalMax);
    }
    
    return globalMax;
}