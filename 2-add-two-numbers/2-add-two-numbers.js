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
    let shouldAdd = false;
    
    while (currentNode1 && currentNode2) {
        let newValue = currentNode1.val + currentNode2.val + (shouldAdd ? 1 : 0);
        
        if (newValue > 9) {
            newValue = newValue - 10;
            shouldAdd = true;
        } else {
            shouldAdd = false;
        }
        
        currentResultNode.next = new ListNode(newValue);
        
        currentResultNode = currentResultNode.next;        
        currentNode1 = currentNode1.next;
        currentNode2 = currentNode2.next;
    }
    
    while (currentNode1) {
        let newValue = currentNode1.val + (shouldAdd ? 1 : 0);

        if (newValue > 9) {
            newValue = newValue - 10;
            shouldAdd = true;
        } else {
            shouldAdd = false;
        }
        
        currentResultNode.next = new ListNode(newValue);
        
        currentResultNode = currentResultNode.next; 
        currentNode1 = currentNode1.next;
    }
    
    while (currentNode2) {
        let newValue = currentNode2.val + (shouldAdd ? 1 : 0);
        
        if (newValue > 9) {
            newValue = newValue - 10;
            shouldAdd = true;
        } else {
            shouldAdd = false;
        }
        
        currentResultNode.next = new ListNode(newValue);
        
        currentResultNode = currentResultNode.next; 
        currentNode2 = currentNode2.next;
    }
    
    if (shouldAdd) {
        currentResultNode.next = new ListNode(1);
    }
    
    return result.next;
}