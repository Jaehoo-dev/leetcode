/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
    return processString(s) === processString(t);
}

function processString(string) {
    const stack = [];
    
    for (const char of string) {
        if (char === '#') {
            stack.pop();
            
            continue;
        }
        
        stack.push(char);
    }
    
    return stack.join('');
}