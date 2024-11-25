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

import { formatListNode, ListNode, printLinkedList } from "./utils/ListNode.js";

var deleteDuplicates = function (head) {
    let p1 = head;
    let p2 = head?.next;
    while (p1?.next != null) {
        console.log(
            "loop start:",
            "p1",
            formatListNode(p1),
            "p2",
            formatListNode(p2)
        );
        if (p2.val === p1.val) {
            // delete one of the dupes
            console.log("found duplicate");
            p1.next = p2?.next ?? null;
            p2 = p2?.next ?? null;
            console.log(
                "loop end",
                "p1",
                formatListNode(p1),
                "p2",
                formatListNode(p2)
            );
        } else {
            console.log("found difference");
            p1 = p2;
            p2 = p2.next;
            console.log(
                "loop end",
                "p1",
                formatListNode(p1),
                "p2",
                formatListNode(p2)
            );
        }
    }
    return head;
};

/* Test Case 1 */
const n5 = new ListNode(3, null);
const n4 = new ListNode(3, n5);
const n3 = new ListNode(2, n4);
const n2 = new ListNode(1, n3);
const n1 = new ListNode(1, n2);

/* Test Case 2 */
// const n1 = new ListNode(null, null);

/* Test Case 3 */
// const n3 = new ListNode(1, null);
// const n2 = new ListNode(1, n3);
// const n1 = new ListNode(1, n2);

printLinkedList(deleteDuplicates(n1));

let current = n1;
console.log("final result");
while (current !== null) {
    console.log(current?.val ?? null, "->");
    current = current.next;
}
