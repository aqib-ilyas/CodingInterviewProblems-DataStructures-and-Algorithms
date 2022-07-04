/** LEET-CODE #121
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let left = 0;
    let profit = 0
    for(let right = left+1; right < prices.length ; right++){
        profit = Math.max(profit, prices[right] - prices[left]);
        if(prices[left] > prices[right]) left = right;
    }
    return profit;
};

console.log(maxProfit([2,1,4]));
console.log(maxProfit([7,1,5,3,6,4]));