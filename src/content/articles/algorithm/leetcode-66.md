---
title: Leetcode-66-加一📌
author: Licodeao
publishDate: "2023-4-3"
img: /assets/articles/leetcode.png
img_alt: Leetcode-66-加一📌
description: |
  Leetcode-66-加一📌
categories:
  - Algorithm
tags:
  - Algorithm
---

## 66. 加一

给定一个由 **整数** 组成的 **非空** 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

**示例 1：**

```
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

**示例 2：**

```
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

**示例 3：**

```
输入：digits = [0]
输出：[1]
```

**提示：**

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`

## 解题思路

> 这题出现在某个小厂的笔试中，没想到博主栽倒了 🤣👉🤡(博主真是个小丑啊)
>
> （不过好在另一道算法题做出来了）
>
> 博主算法是真菜哈哈 🤣

有一说一，初看这道题目，没太读懂题目要表达的意思。下来看了半天，才明白就是数字加一的问题，但加一需要考虑到数字 9，因为 9+1=10，需要考虑到进位的问题了。于是乎，可以抽象为将数字的每个位拆分到数组中的下标中，如果数组中的最后一个元素为 9，则变为 0，然后向前进一位。但这进位如何表示出来？答案是用循环。普通数字的个位为 9，且进行加一时，这个进位的过程是否可以理解为数组的倒序遍历？而且这道题的关键是不是数字 9？依据这个思路，该题就可以解了。

```typescript
function plusOne(digits: number[]): number[] {
  // 倒序遍历数组
  for (let i = digits.length - 1; i >= 0; i--) {
    // 判断当前元素是否为9，不为9，则直接加一即可
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      // 如果当前元素为9，则直接变为0
      /**
       * let arr = [1,2,9], 发现arr[2]=9，那么arr[2]=0
       * 因为倒序循环，且循环还未结束，仍然在进行，所以重新循环
       * 发现arr[1]=2，不为9，那么直接加一，即arr[1]=3，并且直接终止循环，也就是直接返回数组
       * 所以arr=[1,3,0]
       */
      digits[i] = 0;
    }
  }
  // 当执行到这里时，
  // 是不是表明了之前数组中的元素都为9，在经过循环处理后，数组变为了[0]或[0,0]或[0,0,0]...
  // 即进位的1插入到了数组的首位
  digits.unshift(1);
  return digits;
}
```

```typescript
// 法二：使用flag进行标记

function plusOne(digits: number[]): number[] {
  // 初始化为false，即表示不加一
  let isPlus = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (isPlus) {
      if (digits[i] + 1 == 10) {
        digits[i] = 0;
        isPlus = true;
      } else {
        digits[i] += 1;
        isPlus = false;
        return digits;
      }
    } else {
      if (digits[i] + 1 == 10) {
        digits[i] = 0;
        isPlus = true;
      } else {
        digits[i] += 1;
        isPlus = false;
        return digits;
      }
    }
  }
  if (isPlus) {
    digits.unshift(1);
    return digits;
  }
}
```
