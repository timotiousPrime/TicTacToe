// A completely Random player

export function getEasyAiChoice(board){
    let availCells = []
    for (let i = 0; i < board.cells.length; i++) {
        if (board.cells[i] === null) {
            availCells.push(i)
        }
    }
    const range = availCells.length
    console.log('available cells', availCells)
    return availCells[Math.floor(Math.random() * range )]
}
