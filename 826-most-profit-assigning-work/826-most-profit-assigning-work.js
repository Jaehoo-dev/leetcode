/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
function maxProfitAssignment(difficulties, profits, workers) {
    const maxProfitsByWorkers = workers.map(ability => {
        return profits.reduce((accumulator, currentProfit, index) => {
            return difficulties[index] > ability ? accumulator : Math.max(accumulator, currentProfit);
        }, 0);
    });
    
    return maxProfitsByWorkers.reduce((accumulator, currentProfit) => {
        return accumulator + currentProfit;
    }, 0);
}