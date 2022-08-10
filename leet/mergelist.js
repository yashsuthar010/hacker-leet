// traversing

// function mergeList(list1, list2) {
//   if (list1 == null && list2 == null) return [];
//   if (list1 == null && list2 != null) return list2;
//   list1.push(...list2);
//   list1.sort((a, b) => a - b);
//   return list1;
// }

// console.log(mergeList([1, 2, 3], [1, 3, 4]));

// function mergeList(list1, list2) {
//   let result = [];
//   for (let i = 0; i < list1.length; i++) {
//     for (let j = 0; j < list2.length; j++) {
//       if (list1[i] == list2[j]) {
//         result.push(list1[i],list2[j])
//       }else if(list1[i] != list2[j]){
//         li
//       }
//     }
//   }
// }

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(lists) {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    let merged = mergeArrays(a, b);
    lists.push(merged);
  }

  return lists[0];
}

const mergeArrays = (a, b) => {
  let dummy = new ListNode(0);
  let current = dummy;

  while (a && b) {
    if (a.val < b.val) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }
  current.next = a || b;
  return lists;
};
console.log(mergeTwoLists([1, 2, 3], [1, 3, 4]));
