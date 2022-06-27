/*
   LEET CODE #49 https://leetcode.com/problems/group-anagrams/
 * Given an array of strings strs, group the anagrams together. 
 * You can return the answer in any order.

 * NOTE: An Anagram is a word or phrase formed by rearranging the letters of a 
   different word or phrase, typically using all the original letters exactly once.

 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {
    let hashMap = {};
    const count = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101];
    for(let str of strs){
        let key = str.split('').reduce((total, char) => total*count[char.charCodeAt()-97], 1);
        (!(key in hashMap)) ? hashMap[key] = [str] : hashMap[key].push(str);
    }
    return Object.values(hashMap);
};