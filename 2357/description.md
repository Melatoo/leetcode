# [2357. Make Array Zero by Subtracting Equal Amounts](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/?envType=problem-list-v2&envId=7p5x763&)

You are given a non-negative integer array <code>nums</code>. In one operation, you must:

- Choose a positive integer <code>x</code> such that <code>x</code> is less than or equal to the **smallest non-zero**  element in <code>nums</code>.
- Subtract <code>x</code> from every **positive**  element in <code>nums</code>.

Return the **minimum**  number of operations to make every element in <code>nums</code> equal to <code>0</code>.

**Example 1:** 

```
Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
```

**Example 2:** 

```
Input: nums = [0]
Output: 0
Explanation: Each element in nums is already 0 so no operations are needed.
```

**Constraints:** 

- <code>1 <= nums.length <= 100</code>
- <code>0 <= nums[i] <= 100</code>