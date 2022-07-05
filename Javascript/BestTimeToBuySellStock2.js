/** LEET-CODE #122
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let buy = 0;
    let sell = buy+1;
    let profit = 0
    while(buy < sell && sell < prices.length){
        if(prices[buy] < prices[sell]){
            profit += prices[sell]-prices[buy];
        }
        buy++;
        sell++;
    }
    return profit;
};