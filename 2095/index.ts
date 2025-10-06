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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;

    let length: number = 0;
    let dummyNode: ListNode | null = head;

    while (dummyNode !== null) {
        length++;
        dummyNode = dummyNode.next;
    }

    dummyNode = head;

    let index = Math.floor(length / 2);

    if (index === 0) {
        head = head.next;
        return head;
    }

    for (let i = 0; i < index - 1; i++) {
        dummyNode = dummyNode.next;
    }

    dummyNode.next = dummyNode.next.next;
    return head;
};