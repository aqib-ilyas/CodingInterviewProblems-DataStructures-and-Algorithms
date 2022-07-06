/** LEET-CODE #169
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let element = nums[0];
    let count = 1;
    for(let i = 1; i<nums.length; i++){
        if(nums[i] === element) count++;
        else{
            if(count > 0) count--;
            else{
                element = nums[i];
                count++;
            }
        }
    }
    return element;
};