/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    let result = 0;
    
    traverse(root, 1);
    
    return result;
    
    function traverse(root, depth) {
        if (!root) {
            result = Math.max(result, depth - 1);

            return;
        }

        traverse(root.left, depth + 1);
        traverse(root.right, depth + 1);
    }
}