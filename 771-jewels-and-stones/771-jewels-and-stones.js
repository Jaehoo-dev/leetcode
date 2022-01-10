/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
    const jewelsMap = getJewelsMap(jewels);
    let result = 0;
    
    for (const stone of stones) {
        if (jewelsMap[stone]) {
            result++;
        }
    }
    
    return result;
};

const getJewelsMap = function (jewels) {
    const result = {};
    
    for (const jewel of jewels) {
        result[jewel] = true;
    }
    
    return result;
}
