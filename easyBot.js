// A completely Random player

export function getRandomRemainingCellIndex(board) {
    let availCells = []
    board.cells.forEach( (cell) => {
        if (cell === null) {
            cell.
        }
    });
    const range = board.cells.length
    return Math.floor(Math.random() * range )
}

export function getEasyAiChoice(board){
    const randomCellIndex = getRandomRemainingCellIndex(board)
    const cellValue = board.availableCells[randomCellIndex]
    const cell = document.getElementById(`cell${cellValue}`)

    return cellValue
}

