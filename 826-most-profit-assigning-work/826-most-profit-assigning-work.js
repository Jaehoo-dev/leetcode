/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
function maxProfitAssignment(difficulties, profits, workers) {
    const workersSorted = workers.sort((a, b) => a - b);
    const jobsSortedByDifficulty = difficulties.map((difficulty, index) => ({
        difficulty,
        profit: profits[index],
    })).sort((a, b) => a.difficulty - b.difficulty);
    let currentJobIndex = 0;
    let currentMaxProfit = 0;
    
    return workersSorted.reduce((accumulator, currentWorkerAbility) => {
        while (
            currentJobIndex < jobsSortedByDifficulty.length 
            && currentWorkerAbility >= jobsSortedByDifficulty[currentJobIndex].difficulty
        ) {
            if (jobsSortedByDifficulty[currentJobIndex].profit >= currentMaxProfit) {
                currentMaxProfit = jobsSortedByDifficulty[currentJobIndex].profit;
            }
            
            currentJobIndex++;
        }
        
        return accumulator + currentMaxProfit;
    }, 0);
}