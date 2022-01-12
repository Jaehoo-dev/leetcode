/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
const flipgame = function (fronts, backs) {
    const sameNumbersSet = new Set();
    
    fronts.forEach((number, index) => {
        if (number === backs[index]) sameNumbersSet.add(number);
    });
    
    const result = fronts.reduce((accumulator, number, index) => {
        if (sameNumbersSet.has(number) && sameNumbersSet.has(backs[index])) {
            return accumulator;
        }
        
        let goodNumber = Math.min(number, backs[index]);
        
        if (sameNumbersSet.has(number)) {
            goodNumber = backs[index];
        }
        
        if (sameNumbersSet.has(backs[index])) {
            goodNumber = number;
        }
        
        return Math.min(accumulator, goodNumber);
    }, Infinity);
    
    return result === Infinity ? 0 : result;
};
