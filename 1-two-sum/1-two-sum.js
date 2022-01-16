/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const indicesByNum = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        if (complement in indicesByNum) {
            return [i, indicesByNum[complement]];
        }
        
        indicesByNum[num] = i;
    }
}