function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const formatListNode = function (listNode) {
    return listNode?.val + " -> " + listNode?.next?.val;
};

const printLinkedList = function (listNode) {
    let current = listNode;
    while (current !== null) {
        console.log(formatListNode(current));
        current = current.next;
    }
};

export { ListNode, formatListNode, printLinkedList };
