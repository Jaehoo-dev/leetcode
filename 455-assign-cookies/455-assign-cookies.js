/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
    const gSorted = g.sort((a, b) => a - b);
    const sSorted = s.sort((a, b) => a - b);
    let childIndex = 0;
    let cookieIndex = 0;
    let result = 0;
    
    while (childIndex < gSorted.length && cookieIndex < sSorted.length) {
        if (gSorted[childIndex] > sSorted[cookieIndex]) {
            cookieIndex++;
            
            continue;
        }
        
        result++;
        childIndex++;
        cookieIndex++;
    }
    
    return result;
}