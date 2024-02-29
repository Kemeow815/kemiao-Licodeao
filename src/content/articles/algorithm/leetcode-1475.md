---
title: Leetcode-1475-商品折扣后的最终价格📌
author: Licodeao
publishDate: "2023-7-19"
img: /assets/articles/leetcode.png
img_alt: Leetcode-1475-商品折扣后的最终价格📌
description: |
  Leetcode-1475-商品折扣后的最终价格📌
categories:
  - Algorithm
tags:
  - Algorithm
---

## 1475. 商品折扣后的最终价格

给你一个数组 `prices` ，其中 `prices[i]` 是商店里第 `i` 件商品的价格。

商店里正在进行促销活动，如果你要买第 `i` 件商品，那么你可以得到与 `prices[j]` 相等的折扣，其中 `j` 是满足 `j > i` 且 `prices[j] <= prices[i]` 的 **最小下标** ，如果没有满足条件的 `j` ，你将没有任何折扣。

请你返回一个数组，数组中第 `i` 个元素是折扣后你购买商品 `i` 最终需要支付的价格。

**示例 1：**

```
输入：prices = [8,4,6,2,3]
输出：[4,2,4,2,3]
解释：
商品 0 的价格为 price[0]=8 ，你将得到 prices[1]=4 的折扣，所以最终价格为 8 - 4 = 4 。
商品 1 的价格为 price[1]=4 ，你将得到 prices[3]=2 的折扣，所以最终价格为 4 - 2 = 2 。
商品 2 的价格为 price[2]=6 ，你将得到 prices[3]=2 的折扣，所以最终价格为 6 - 2 = 4 。
商品 3 和 4 都没有折扣。
```

**示例 2：**

```
输入：prices = [1,2,3,4,5]
输出：[1,2,3,4,5]
解释：在这个例子中，所有商品都没有折扣。
```

**示例 3：**

```
输入：prices = [10,1,1,6]
输出：[9,0,1,6]
```

## 解题思路

这道题可以用到单调递增的单调栈，所以得从右往左遍历。

```typescript
function finalPrices(prices: number[]): number[] {
  // 单调栈
  let stack: number[] = [];

  // 目标值
  let res: number[] = new Array(prices.length);

  // 从右往左遍历
  for (let i = prices.length - 1; i >= 0; i--) {
    // 栈顶元素大于当前价格，即表明栈顶元素不是当前元素右边的第一个最小值
    while (stack.length !== 0 && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }

    // stack为空表示没有折扣
    res[i] =
      stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];

    stack.push(prices[i]);
  }

  return res;
}
```
