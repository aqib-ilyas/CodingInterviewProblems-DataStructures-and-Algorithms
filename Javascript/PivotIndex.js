/** LEET-CODE #724
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i-1];
    }
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++){
        if(leftSum === nums[nums.length-1]-nums[i]) return i;
        leftSum = nums[i];
    }
    return -1;
};