/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let prevAdd = 0;
  let first = l1, second = l2;
  const result = new ListNode();
  let curResNode = result;
  do {
    const cur = (first && first.val) + (second && second.val) + prevAdd;
    if (cur >= 10) {
      prevAdd = 1;
    } else {
      prevAdd = 0;
    }
    first = first && first.next;
    second = second && second.next;
    curResNode.val = cur >= 10 ? cur - 10 : cur;
    if (first || second || prevAdd) {
      curResNode = curResNode.next = new ListNode();
    }
  } while (first || second || prevAdd);
  return result;
}
