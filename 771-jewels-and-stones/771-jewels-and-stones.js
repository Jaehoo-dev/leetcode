/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
    const jewelsMap = getJewelsMap(jewels);
    
    return [...stones].reduce((acc, stone) => jewelsMap[stone] ? ++acc : acc, 0);
};

const getJewelsMap = function (jewels) {
    const result = {};
    
    [...jewels].forEach(jewel => result[jewel] = true);
    
    return result;
}
