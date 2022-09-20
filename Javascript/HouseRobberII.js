/** LEET-CODE #213
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums === null || nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let helper = (arr) => {
        const amtRobbed = new Array(arr.length).fill(0);
        amtRobbed[0] = arr[0];
        amtRobbed[1] = Math.max(arr[0], arr[1]);
        for(let i = 2; i < arr.length; i++){
            amtRobbed[i] = Math.max(arr[i] + amtRobbed[i-2], amtRobbed[i-1]);
        }
        return amtRobbed[arr.length-1];
    }
    
    return Math.max(helper(nums.slice(0, nums.length -1)), helper(nums.slice(1, nums.length)));
   
};