/** LEET CODE #139 https://leetcode.com/problems/word-break/
 * Given a string s and a dictionary of strings wordDict, 
 * return true if s can be segmented into a space-separated 
 * sequence of one or more dictionary words.
 * 
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 * 
 * 
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

 var wordBreak = function(s, wordDict) {
    return helper(s, wordDict);
};

var helper = (s, wordDict, memo={}) => {
    
    if(s in memo) return memo[s];
    if(s === "") return true;
    
    for(let word of wordDict){
        if(word === s.substr(0, word.length)){
            if(helper(s.substr(word.length, s.length), wordDict, memo)){
                memo[s] = true;
                return true;
            }
        }
        
    }
    
    memo[s] = false;
    return false;
}