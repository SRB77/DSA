//* Question 136: Single Number
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
 
//> Example 1:
Input: nums = [2,2,1]
Output: 1

//> Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

//> Example 3:
Input: nums = [1]
Output: 1

//> Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/

//? This is my approach to solve this problem: but there are also better option and more optimized way to solve the problem here is the link to that Question .
//! https://leetcode.com/problems/single-number/solutions/1771771/think-it-through-time-o-n-space-o-1-python-go-explained


//* JAVASCRIPT SOLUTION:
/* 
    /**
    * @param {number[]} nums
    * @return {number}
    
var singleNumber = function(nums) {
    let rept = {}
    nums.forEach((elems)=>{
        if(rept[elems]){
            rept[elems]+=1
        }else{
            rept[elems] = 1
        }
    })
    
    for(let elem in  rept){
        if(rept[elem] === 1){
            return Number(elem)
        }
    }
};
*/

//* PYTHON SOLUTION:

/*
    class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        dicti = {}
        for i in nums:
            if i in dicti :
                dicti[i] += 1
            else:
                dicti[i]=1
        for keys in dicti:
            if dicti[keys]==1:
                return keys
 */