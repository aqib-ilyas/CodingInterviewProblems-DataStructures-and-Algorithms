/** LEET-CODE #575
 *  Problem: Given the integer array candyType of length n, 
 *      return the maximum number of different types of candies she can eat 
 *      if she only eats n / 2 of them.
 * 
 * @param {number[]} candyType
 * @return {number}
 */


const distributeCandies = (candyType) => {
    const maxCandies = candyType.length/2;
    let candyTypes = new Set();
    for(const candy of candyType){
        candyTypes.add(candy)
    }
    return Math.min(maxCandies, candyTypes.size)
};

console.log(distributeCandies([1,1,2,2,3,3]));