/*
   LEET-CODE #217 https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value 
 * appears at least twice in the array, 
 * and return false if every element is distinct.

 *  Example: 
        Input: nums = [1,2,3,1]
        Output: true
 * 
 * @param {number[]} nums
 * @return {boolean}
 */

 const containsDuplicate = function (nums){
    const num_set = new Set();
    for(let i=0; i<nums.length; i++){
        if(num_set.has(nums[i])) return true;
        
        num_set.add(nums[i]);
    }
    return false;
};