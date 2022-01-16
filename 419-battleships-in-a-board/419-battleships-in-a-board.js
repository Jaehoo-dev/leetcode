/**
 * @param {character[][]} board
 * @return {number}
 */
function countBattleships(board) {
    let result = 0;
    
    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            const isEmpty = board[i][j] === '.';
            const isNotEndOfShip = board[i][j + 1] === 'X' || board[i + 1]?.[j] === 'X';
            
            if (isEmpty || isNotEndOfShip) return;
            
            result++;
        });
    });
    
    return result;
}