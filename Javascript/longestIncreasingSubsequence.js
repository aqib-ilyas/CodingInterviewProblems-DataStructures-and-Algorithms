/** LEET-CODE #300
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
    
    lis = new Array(nums.length).fill(1);
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++)
            if(nums[i] > nums[j]) lis[i] = Math.max(lis[i], 1+ lis[j]);
    }
    return Math.max(...lis);
    
};