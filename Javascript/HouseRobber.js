/** LEET-CODE #198
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    
    if(nums === null || nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    const amtRobbed = new Array(nums.length).fill(0);
    amtRobbed[0] = nums[0];
    amtRobbed[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < nums.length; i++){
        amtRobbed[i] = Math.max(nums[i] + amtRobbed[i-2], amtRobbed[i-1]);
    }
    return amtRobbed[nums.length-1];
};