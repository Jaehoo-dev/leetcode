/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    const result = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        result.push(createNextArray(result[result.length - 1]));
    }
    
    return result;
}

function createNextArray(prev) {
    const result = Array(prev.length + 1).fill(undefined);

    result.forEach((_, index) => {
        if (index === 0 || index === result.length - 1) {
            result[index] = 1;
            
            return;
        }
        
        result[index] = prev[index - 1] + prev[index];
    });
    
    return result;
}