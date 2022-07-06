/** LEET-CODE #977
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    const result = new Array(nums.length).fill(0);
    let index = result.length-1;
    let left = 0, right = index;
    while(index >= 0){
        let leftVal = Math.pow(nums[left], 2);
        let rightVal = Math.pow(nums[right], 2);
        if(leftVal > rightVal){
            result[index] = leftVal;
            left++;
        }else{
            result[index] = rightVal;
            right--;
        }
        index--;
    }
    return result;
};