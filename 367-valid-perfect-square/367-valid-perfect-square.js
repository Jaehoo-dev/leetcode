/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
    if (num === 1) return true;
    
    let left = 1;
    let right = num;
    
    while (left <= right) {
        const center = Math.floor((left + right) / 2);
        const centerSquared = center * center;
        
        if (centerSquared === num) {
            return true;
        } else if (centerSquared < num) {
            left = center + 1;
        } else {
            right = center - 1;
        }
    }
    
    return false;
}