import { EL_IDS } from './constants.js'
import { gameBoard } from './gameBoard.js'

export function getCellClicked(){
    let BOARD_CELLS = document.querySelectorAll('.boardCell')

    // BOARD_CELLS = Array.from(BOARD_CELLS)

    BOARD_CELLS.forEach( cell => { 
        cell.addEventListener('click', handleClickedCell)
        // console.log('testing')
    })

}

function handleClickedCell(e) {
    const cellKey = Number(e.target.dataset.key)
    gameBoard.availableCells.includes(cellKey) ? updateBoard(cellKey) : console.log('no can do')
}

function updateBoard(cellKey) {
    const availCellPos = gameBoard.availableCells.indexOf(cellKey)
    gameBoard.cellsUsed.push(cellKey)
    gameBoard.availableCells.splice(availCellPos,1)
}
