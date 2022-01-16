/**
 * @param {character[][]} board
 * @return {number}
 */
function countBattleships(board) {
    let result = 0;
    
    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            const isEmpty = board[i][j] === '.';
            const isEndOfShip = board[i][j + 1] !== 'X' && board[i + 1]?.[j] !== 'X';
            
            if (isEmpty || !isEndOfShip) return;
            
            result++;
        });
    });
    
    return result;
}