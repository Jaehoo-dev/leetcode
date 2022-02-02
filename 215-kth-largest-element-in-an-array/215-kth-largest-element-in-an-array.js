/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    const sorted = nums.sort((a, b) => b - a);
    
    return sorted[k - 1];
}