---
title: Leetcode-382-链表随机节点📌
author: Licodeao
publishDate: 2023-5-25
img: /assets/articles/leetcode.png
img_alt: Leetcode-382-链表随机节点📌
description: |
  Leetcode-382-链表随机节点📌
categories:
  - Algorithm
tags:
  - Algorithm
---

## 382. 链表随机节点

给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 **被选中的概率一样** 。

实现 `Solution` 类：

- `Solution(ListNode head)` 使用整数数组初始化对象。
- `int getRandom()` 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。

**示例：**

![img](https://assets.leetcode.com/uploads/2021/03/16/getrand-linked-list.jpg)

```
输入
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
输出
[null, 1, 3, 2, 2, 3]

解释
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // 返回 1
solution.getRandom(); // 返回 3
solution.getRandom(); // 返回 2
solution.getRandom(); // 返回 2
solution.getRandom(); // 返回 3
// getRandom() 方法应随机返回 1、2、3中的一个，每个元素被返回的概率相等。
```

**提示：**

- 链表中的节点数在范围 `[1, 104]` 内
- `-104 <= Node.val <= 104`
- 至多调用 `getRandom` 方法 `104` 次

## 解题思路

法一：统计出链表的长度 n，随机数为 k（通过 random 库函数的方式），随后遍历链表，返回链表中第 k 个节点即可

- 由于要遍历两次，所以该方法的时间复杂度为 O(n)，空间复杂度为 O(1)

法二：蓄水抽样法，遍历到第 k 个节点时，以 1/k 的概率选它，如果选中就返回

- 实际操作是通过变量保存每次选中的节点
- 当只有 1 个节点时，其被选中的概率就是 1/1=1，返回
- 有 2 个节点时（1=>2），2 被选中的概率为 1/2，那么 1 被选中的概率也为 1/2
- 有 3 个节点时（1=>2=>3），3 被选中的概率为 1/3，(1=>2)这个概率为 2/3，那么 1 或 2 被选中的概率为 2/3 × 1/2 = 1/3
- 有 4 个节点时（1=>2=>3=>4），4 被选中的概率为 1/4，(1=>2=>3=>4)这个概率为 3/4，那么 1 或 2 或 3 被选中的概率为 3/4 × 1/3 = 1/4
- 那么，以此类推，有 k 个节点时，k 被选中的概率为 1/k，选中就返回
- 对于该方法来说，只用遍历一次即可

```typescript
// 法一

class Solution {
  // 存放链表
  private head = null;

  constructor(head: ListNode | null) {
    this.head = head;
  }

  getRandom(): number {
    // 统计节点个数
    let n = 1;
    let cur = this.head;
    while (cur.next !== null) {
      n++;
      cur = cur.next;
    }

    cur = this.head;

    let k = Math.floor(Math.random() * n + 1);
    // 遍历到第k个节点
    for (let i = 1; i < k; i++) {
      cur = cur.next;
    }

    return cur.val;
  }
}
```

```typescript
// 法二

class Solution {
  // 存放链表
  private head = null;

  constructor(head: ListNode | null) {
    this.head = head;
  }

  getRandom(): number {
    let i = 0;
    let cur = this.head;
    // 存放当前更新的结果
    let res = cur.val;
    // 注意这里不能写cur.next !== null，因为这道题的测试用例会返回null
    while (cur) {
      i++;
      // 以1/i的概率选中，更新res
      if (Math.floor(Math.random() * i + 1) === i) {
        res = cur.val;
      }
      cur = cur.next;
    }

    return res;
  }
}
```
