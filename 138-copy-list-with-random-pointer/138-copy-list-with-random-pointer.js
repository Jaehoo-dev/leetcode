/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
    if (!head) return null;
    
    const map = new Map();
    let currentNode = head;
    
    while (currentNode) {
        map.set(currentNode, new Node(currentNode.val, null, null));
        
        currentNode = currentNode.next;
    }
    
    currentNode = head;
    
    while (currentNode) {
        map.get(currentNode).next = map.get(currentNode.next) || null;
        map.get(currentNode).random = map.get(currentNode.random) || null;
        
        currentNode = currentNode.next;
    }
    
    return map.get(head);
}