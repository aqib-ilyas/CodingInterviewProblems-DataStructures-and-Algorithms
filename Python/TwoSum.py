'''
    LEET-CODE #01 https://leetcode.com/problems/two-sum/
    Problem: Given an array of integers numbers and an integer target, 
             return indices of the two numbers such that they add up to target.
             You may assume that each input would have exactly one solution, 
             and you may not use the same element twice.
             You can return the answer in any order.

    @param numbers[]: list of integers
    @param target: integer
    @return list[]: indices list
'''


def TwoSum(numbers, target):
    mapValues = {}
    for i in range(len(numbers)):
        currentVal = mapValues.get(numbers[i], None)
        if(currentVal is not None):
            return [currentVal, i]
        else:
            numberToFind = target - numbers[i]
            mapValues[numberToFind] = i
    return None


if __name__ == "__main__":
    print(TwoSum([1, 3, 5, 2, 9, 7], 11))
