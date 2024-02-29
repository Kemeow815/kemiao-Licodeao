---
title: Leetcode-209-长度最小的子数组📌
author: Licodeao
publishDate: "2023-5-6"
img: /assets/articles/leetcode.png
img_alt: Leetcode-209-长度最小的子数组📌
description: |
  Leetcode-209-长度最小的子数组📌
categories:
  - Algorithm
tags:
  - Algorithm
---

## 209. 长度最小的子数组

给定一个含有 `n` 个正整数的数组和一个正整数 `target` **。**

找出该数组中满足其和 `≥ target` 的长度最小的 **连续子数组** `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度**。**如果不存在符合条件的子数组，返回 `0` 。

**示例 1：**

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

**示例 2：**

```
输入：target = 4, nums = [1,4,4]
输出：1
```

**示例 3：**

```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

**提示：**

- `1 <= target <= 109`
- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 105`

## 解题思路

同样的，这道题也是一个滑动窗口。

这道题关键点：

- 如何模拟窗口的滑动

```typescript
function minSubArrayLen(target: number, nums: number[]): number {
  // 定义左右指针
  let l = 0,
    r = 0;

  // 窗口的和
  let sum = 0;

  // 窗口的最小长度
  let len = Number.MAX_SAFE_INTEGER;

  // 终止条件：r > nums.length
  while (r < nums.length) {
    sum += nums[r];

    // 符合条件，更新窗口的最小长度
    while (sum >= target) {
      len = Math.min(len, r - l + 1);
      // 窗口右移
      sum -= nums[l];
      // 左指针向右移动
      l++;
    }

    r++;
  }

  // 有可能是不存在一个子数组满足条件的，因此最后需要判断一下
  return len === Number.MAX_SAFE_INTEGER ? 0 : len;
}
```
