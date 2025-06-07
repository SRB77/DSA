//* Reverse words in a string:
/*
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
//?Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

//> Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

//> Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

//> Example 3:
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.*/


//* JAVASCRIPT SOLUTION:-
/*

var reverseWords = function(s) {
    let s1 = s.trim().split(" ");
    let s2 = s1.filter(elem => elem.length>0); //> this line is super important part of the solution . removing extra spaces.
    let start = 0 ;
    let end = s2.length - 1;
    while(start<end){
        let temp = s2[start]
        s2[start] = s2[end]
        s2[end]=temp
        start ++
        end --
    }
    // console.log(s2.join(" "));
    return s2.join(" ");  
};

*/