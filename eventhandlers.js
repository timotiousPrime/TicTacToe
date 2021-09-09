import { EL_IDS, playerOne, playerTwo } from './constants.js'
import { gameBoard } from './gameBoard.js'
import { GAME_STATE } from './constants.js'
 
export function handleGameCells(){
    let BOARD_CELLS = document.querySelectorAll('.boardCell')

    BOARD_CELLS.forEach( cell => { 
        cell.addEventListener('click', handleClickedCell)
    })
}

function handleClickedCell(e) {
    const cellKey = Number(e.target.dataset.key)
    gameBoard.availableCells.includes(cellKey) ? updateBoard(cellKey, GAME_STATE) :
    console.log('no can do')
}

function updateBoard(cellKey, state) {
    const availCellPos = gameBoard.availableCells.indexOf(cellKey)
    gameBoard.cellsUsed.push(cellKey)
    state.playersTurn.cellsUsed.push(cellKey)
    gameBoard.availableCells.splice(availCellPos,1)
    updatePlayerTurn(state)
}

function updatePlayerTurn(state) {
    
    state.playersTurn.token === 'x' ? state.playersTurn = playerTwo : state.playersTurn = playerOne
}
