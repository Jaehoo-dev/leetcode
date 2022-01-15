/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target, start = 0, end = nums.length - 1) {
    if (start > end) return start;
    
    const centerIndex = Math.floor((start + end) / 2);
    
    if (nums[centerIndex] === target) return centerIndex;
    
    if (nums[centerIndex] < target) return searchInsert(nums, target, centerIndex + 1, end);
    
    return searchInsert(nums, target, start, centerIndex - 1);
}