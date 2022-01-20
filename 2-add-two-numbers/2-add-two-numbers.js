/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const result = new ListNode();
    let currentResultNode = result;
    let currentNode1 = l1;
    let currentNode2 = l2;
    let shouldAddOne = false;
    
    while (currentNode1 || currentNode2) {
        const value1 = currentNode1 ? currentNode1.val : 0;
        const value2 = currentNode2 ? currentNode2.val : 0;
        let newValue = value1 + value2 + (shouldAddOne ? 1 : 0);
        
        if (newValue > 9) {
            newValue = newValue - 10;
            shouldAddOne = true;
        } else {
            shouldAddOne = false;
        }
        
        currentResultNode.next = new ListNode(newValue);
        
        currentResultNode = currentResultNode.next;        
        currentNode1 = currentNode1 ? currentNode1.next : currentNode1;
        currentNode2 = currentNode2 ? currentNode2.next : currentNode2;
    }
    
    if (shouldAddOne) {
        currentResultNode.next = new ListNode(1);
    }
    
    return result.next;
}