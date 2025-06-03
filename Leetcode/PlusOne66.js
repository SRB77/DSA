//* Question 66. Plus One

/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

//> Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

//> Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

//> Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

//! Constraints:
1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

*/


//* Solution 1 JAVASCRIPT:
/*
 * @param {number[]} digits
 * @return {number[]}

var plusOne = function(digits) {
    let digit = digits.join("");
    digit = BigInt(digit)+1n
    digit = digit.toString().split('').map(Number)
    return digit
};

*/

//* Exact SOLUTION IN PYTHON :
/* class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        digit = ''.join(str(num) for num in digits)
        digit = int(digit)+1
        result = [int(ch) for ch in str(digits)]
        return result 

*/


//* Areas of Improvement:
//?  i should use less numnber of Built In function and also stay bit in Question and if gettign any kind of Error then i should debug my self rather going to AI immideately . 

//? i am lacking behind in python concepts and syntax as well . So have to take a look and practice some basic python Question . 