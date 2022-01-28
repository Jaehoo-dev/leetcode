/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    const result = new ListNode();
    let currentNode = result;
    let head1 = list1;
    let head2 = list2;
    
    while (head1 && head2) {
        const value1 = head1.val;
        const value2 = head2.val;
        
        if (value1 < value2) {
            currentNode.next = head1;
            head1 = head1.next;
        } else {
            currentNode.next = head2;
            head2 = head2.next;
        }
        
        currentNode = currentNode.next;
    }
    
    let head = head1 || head2;
    
    while (head) {
        currentNode.next = head;
        head = head.next;
        currentNode = currentNode.next;
    }
    
    return result.next;
}