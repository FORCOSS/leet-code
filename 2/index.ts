/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let someNode: ListNode = new ListNode(0);
    let currentNode: ListNode = someNode;
    let carry: number = 0;

    while(l1 || l2 || carry !== 0) {
        let num1: number = l1 ? l1.val : 0;
        let num2: number = l2 ? l2.val : 0;

        let total: number = num1 + num2 + carry;
        carry = Math.floor(total / 10);
        currentNode.next = new ListNode(total % 10);
        currentNode = currentNode.next;

        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }

    return someNode.next;
};