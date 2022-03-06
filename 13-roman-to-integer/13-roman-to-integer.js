/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    
    return [...s].reduce((acc, cur, index) => {
        const currentInt = table[cur];
        const nextInt = table[s[index + 1]];

        return currentInt < nextInt ? acc - currentInt : acc + currentInt;
    }, 0);
}