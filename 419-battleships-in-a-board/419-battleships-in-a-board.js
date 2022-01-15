/**
 * @param {character[][]} board
 * @return {number}
 */
function countBattleships(board) {
    const rowsCount = board.length;
    const columnsCount = board[0].length;
    const visited = Array.from(Array(rowsCount), () => Array(columnsCount).fill(false));
    let result = 0;
    
    for (let i = 0; i < rowsCount; i++) {
        for (let j = 0; j < columnsCount; j++) {
            searchGraph(board, i, j, visited);
        }
    }
 
    function searchGraph(board, rowIndex, columnIndex, visited) {
        if (rowIndex >= rowsCount || columnIndex >= columnsCount) return;
        if (board[rowIndex][columnIndex] === '.' || visited[rowIndex][columnIndex]) return;
        
        visited[rowIndex][columnIndex] = true;
        
        searchGraph(board, rowIndex, columnIndex + 1, visited);
        searchGraph(board, rowIndex + 1, columnIndex, visited);
        
        if (
            board[rowIndex][columnIndex - 1] !== 'X'
            && (!board[rowIndex - 1] || board[rowIndex - 1][columnIndex] !== 'X')
        ) {
            result++;
        }
    }
    
    return result;
}