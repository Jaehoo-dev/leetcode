/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let result = 0;
    
    prices.forEach((price, index) => {
        if (prices[index + 1] > price) {
            result += prices[index + 1] - price;
        }
    });
    
    return result;
}