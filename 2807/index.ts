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

function gcdCalculate(a: number, b: number) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let currentNode: ListNode | null = head;
    while (currentNode && currentNode.next) {
        const nextNode = currentNode.next;
        const gcd = gcdCalculate(currentNode.val, nextNode.val);
        const newNode = new ListNode(gcd, nextNode);

        currentNode.next = newNode;
        currentNode = nextNode;
    }

    return head;
};