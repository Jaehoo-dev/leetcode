/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    if (s.length < 2) {
        return s.length;
    }
    
    const appeared = new Set();
    let result = 1;
    let leftIndex = 0;
    let rightIndex = 1;
    
    appeared.add(s[leftIndex]);
    
    while (rightIndex < s.length) {
        if (!appeared.has(s[rightIndex])) {
            appeared.add(s[rightIndex]);
            
            result = Math.max(result, rightIndex - leftIndex + 1);
            
            rightIndex++;
            
            continue;
        }
        
        while (s[leftIndex] !== s[rightIndex]) {
            appeared.delete(s[leftIndex]);
            
            leftIndex++;
        }
        
        appeared.delete(s[leftIndex]);
        
        leftIndex++;
    }
    
    return result;
}