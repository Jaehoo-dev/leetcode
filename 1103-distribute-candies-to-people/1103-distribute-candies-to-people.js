/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
function distributeCandies(candiesCount, peopleCount) {
    const result = Array(peopleCount).fill(0);
    let candiesLeftCount = candiesCount;
    let currentDistCount = 1;
    let turn = 0;
    
    while (candiesLeftCount >= currentDistCount) {
        result[turn % peopleCount] += currentDistCount;
        
        candiesLeftCount -= currentDistCount;
        currentDistCount++;
        turn++;
    }
    
    if (candiesLeftCount > 0) {
        result[turn % peopleCount] += candiesLeftCount;
    }
        
    return result;
}