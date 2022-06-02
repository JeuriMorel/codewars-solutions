// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

function doneOrNot(board) {
    function isValid(array) {
        return array
            .sort((a, b) => a > b)
            .every((item, index) => item == index + 1)
    }

    let columns = board.map((row, index) => board.map(column => column[index]))
    const regions = []

    for (let i = 0; i < board.length; i += 3) {
        regions.push([
            ...board[i].slice(i, i + 3),
            ...board[i + 1].slice(i, i + 3),
            ...board[i + 2].slice(i, i + 3),
        ])
    }

    return columns.every(isValid) &&
        regions.every(isValid) &&
        board.every(isValid)
        ? "Finished!"
        : "Try again!"
}
