/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    if (n < 2) return n;
    
    const memo = {
        0: 0,
        1: 1,
    };
    
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    
    return memo[n];
}