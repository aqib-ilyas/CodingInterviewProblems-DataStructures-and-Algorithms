/** LEET-CODE #91 https://leetcode.com/problems/decode-ways/
    A message containing letters from A-Z can be encoded into numbers using 
    the following mapping:

        'A' -> "1"
        'B' -> "2"
        ...
        'Z' -> "26"

    To decode an encoded message, all the digits must be grouped and 
    then mapped back into letters using the reverse of the mapping above (there may be multiple ways). 
    For example, "11106" can be mapped into:

        "AAJF" with the grouping (1 1 10 6)
        "KJF" with the grouping (11 10 6)

    Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F'
    since "6" is different from "06".

    Given a string s containing only digits, return the number of ways to decode it.
  
    @param {string} s
    @return {number}
 */


const numDecodings = (s) => {
    return decode(s, s.length);
};

const decode = (data, k, memo={}) => {
    
    if(k === 0) return 1;
    
    const s = data.length - k;
    if(data.charAt(s) === '0') return 0;
    
    if(k in memo) return memo[k];
    
    result = decode(data, k-1, memo);
    if(k >= 2){
        if(data.charAt(s) === '1' || (data.charAt(s) === '2' && data.charAt(s+1) < '7'))
            result += decode(data, k-2, memo);
    }
    memo[k] = result;
    return result;
}

console.log(numDecodings("2101"))