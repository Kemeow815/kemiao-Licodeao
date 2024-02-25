---
title: Leetcode-26-删除有序数组中的重复项📌
author: Licodeao
publishDate: "2023-5-5"
img: https://typora-licodeao.oss-cn-guangzhou.aliyuncs.com/typoraImg/nestjs-graphql-mongodb.webp
img_alt: NestJS 集成 GraphQL 和 MongoDB
description: |
  如何在 NestJS 中集成 GraphQL 和 MongoDB
categories:
  - Algorithm
tags:
  - Algorithm
---

## 26. 删除有序数组中的重复项

给你一个 **升序排列** 的数组 `nums` ，请你**[ 原地](http://baike.baidu.com/item/原地算法)** 删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。元素的 **相对顺序** 应该保持 **一致** 。然后返回 `nums` 中唯一元素的个数。

考虑 `nums` 的唯一元素的数量为 `k` ，你需要做以下事情确保你的题解可以被通过：

- 更改数组 `nums` ，使 `nums` 的前 `k` 个元素包含唯一元素，并按照它们最初在 `nums` 中出现的顺序排列。`nums` 的其余元素与 `nums` 的大小不重要。
- 返回 `k` 。

**判题标准:**

系统会用下面的代码来测试你的题解:

```
int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

如果所有断言都通过，那么您的题解将被 **通过**。

**示例 1：**

```
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

**示例 2：**

```
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

**提示：**

- `1 <= nums.length <= 3 * 104`
- `-104 <= nums[i] <= 104`
- `nums` 已按 **升序** 排列

## 解题思路

- 使用快慢指针进行解题
- 定义一个慢指针 p1 指向第一个值，快指针 p2 指向第二个值
- 当 p2 小于数组长度时，进行遍历；即终止条件为 p2 大于数组长度
- 如果 p1 指向的元素不等于 p2 指向的元素，将慢指针 p1 向右移动一位，同时将 p1 指向的元素替换成 p2 指向的元素，从而删除了一个相同的元素
- 如果 p1 指向的元素等于 p2 指向的元素，就将快指针 p2 向右移动一位
- 直到遍历完，此时[0, p1]区间就是数组中所有未重复的元素，返回 p1+1；因为最开始 p1 是从 0 开始的，所以最终结果需要+1

```typescript
function removeDuplicates(nums: number[]): number {
  if (nums === null || nums.length < 1) return 0;

  // 定义慢指针，指向第一个元素
  let p1 = 0;

  // 定义快指针，指向第二个元素
  let p2 = 1;

  // 终止条件：p2 > nums.length
  while (p2 < nums.length) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
    p2++;
  }

  return p1 + 1;
}
```
