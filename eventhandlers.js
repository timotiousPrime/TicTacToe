const getClickedCell = () => {
    const gameBoard = document.getElementById('board')
    gameBoard.addEventListener('mouseover', logCell)
}

export function logCell (gameBoard) {
    const gameCells = document.querySelectorAll('.boardCell')
    gameCells.forEach(  cell => {
        cell.addEventListener('click', (e) => {
            const cell = Number(e.target.id[4])
            const cellsUsed = gameBoard.cellsUsed
            const cellsAvailable = gameBoard.cellsAvailable
            const cellIndex = cellsAvailable.indexOf(cell)
            // Checks if cell has been used and if not, adds cell to cellsUsed
            !cellsUsed.includes(cell) ? cellsUsed.push(cell) : cellsUsed
            cellsUsed.sort()
            // checks if cell is available and if it does, removes cell from cellsAvailable
            cellIndex >= 0 ? cellsAvailable.splice(cellIndex, 1) : cellsAvailable

            console.log(cellsUsed)
            console.log(cellsAvailable)
        })
    })
}

