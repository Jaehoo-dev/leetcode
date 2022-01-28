/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (!head) return head; 
    
    let tail = head;
    let currentNode = head.next;
    
    while (tail) {
        if (tail.val === currentNode?.val) {
            currentNode = currentNode.next;
            
            continue;
        }
        
        tail.next = currentNode;
        tail = tail.next;
    }
    
    return head;
}