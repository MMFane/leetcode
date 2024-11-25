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

import { ListNode, printListNode } from "./utils/ListNode.js";

var mergeTwoLists = function (l1, l2) {
    console.log("l1", l1.val, l1.next);
    console.log("l1", l2.val, l2.next);
    if (!l1.next) {
        console.log("reached the end of l1");
        return l1;
    }
    if (!l2.next) {
        console.log("reached the end of l2");
        return l2;
    }
    if (l1.next <= l2.next) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
};

// Test Case 1

const l1_3 = new ListNode(4, null);
const l1_2 = new ListNode(2, l1_3);
const l1_head = new ListNode(1, l1_2);

const l2_3 = new ListNode(4, null);
const l2_2 = new ListNode(3, l2_3);
const l2_head = new ListNode(1, l2_2);

printListNode(mergeTwoLists(l1_head, l2_head));
