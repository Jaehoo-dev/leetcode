/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    } 
    
    if (nums.length === 0) return null;
    
    const centerIndex = Math.floor(nums.length / 2);
    const left = nums.slice(0, centerIndex);
    const right = nums.slice(centerIndex + 1);
    
    return new TreeNode(nums[centerIndex], sortedArrayToBST(left), sortedArrayToBST(right));
}
