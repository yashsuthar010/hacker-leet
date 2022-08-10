function reverseNode(head, k) {
  if (!head || k < 2) return head;

  var count = 0;
  var now = head;
  var last = head;
  var tmp = null;

  while (now && count < k) {
    now = now.next;
    count++;
  }

  if (count === k) {
    now = reverseNode(now, k);
    while (count-- > 0) {
      tmp = last.next;
      last.next = now;
      now = last;
      last = tmp;
    }
    last = now;
  }

  return last;
}

console.log(reverseNode([1, 2, 3, 4, 5]), 2);
