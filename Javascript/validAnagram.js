/** LEET CODE #242 https://leetcode.com/problems/valid-palindrome/
 * 
 *  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *  An Anagram is a word or phrase formed by rearranging the letters of a different word 
 *  or phrase, typically using all the original letters exactly once.
 * 
 *  Input: s = "anagram", t = "nagaram"
 *  Output: true
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sMap = {};
    let tMap = {};
    for(let i = 0; i < t.length; i++){
        (t[i] in tMap) ? tMap[t[i]] = tMap[t[i]]+1 : tMap[t[i]] = 1;
        (s[i] in sMap) ? sMap[s[i]] = sMap[s[i]]+1 : sMap[s[i]] = 1; 
    }
    for(let key in sMap){
        if(!(key in tMap) || tMap[key] !== sMap[key]) return false;
    }
    return true;
};