//* Largest Odd Number In a String 1903:

/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
A substring is a contiguous sequence of characters within a string.

//> Example 1:
Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

//> Example 2:
Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".

//> Example 3:
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.
 

//> Constraints:
1 <= num.length <= 105
num only consists of digits and does not contain any leading zeros.

*/

//* Solution : 
/*
var largestOddNumber = function(num) {
    for(let i = num.length-1;i>=0;i--){
        if(Number(num[i] %2 )!== 0 ){
            return num.slice(0,i+1);
        }
    }
    return ""
}; */

//! NOTE :

/*
Very beautiful concept when we want a largest odd / even substring or sub integer , it means we should look upto the longest prefix ends with odd / even digit . 
Example 1 :- 234875834574020,
So as this is a even number and we want to findout the largest odd substring , then it would be 23487583457, because this is the longest odd prefix . after that everything is even , so . 
*/