/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    const countS = {};
    
    for (const char of s) {
        if (!countS.hasOwnProperty(char)) {
            countS[char] = 0;
        }
        
        countS[char]++;
    }
    
    for (const char of t) {
        if (!countS[char]) {
            return false;
        }
        
        if (countS[char] > 1) {
            countS[char]--;
        } else {
            delete countS[char];
        }
    }
    
    if (Object.keys(countS).length > 0) {
        return false;
    }
    
    return true;
}