/** LEET-CODE #283
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let l = 0, r = 1;
    while(l < r && r < nums.length ){
        if(nums[l] === 0){
            
            while(nums[r] === 0 && r < nums.length-1) r++;
            
            temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            
        }
        l++;
        r++;    
    }
};