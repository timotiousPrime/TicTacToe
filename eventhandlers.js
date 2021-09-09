import { EL_IDS } from './constants.js'
import { gameBoard } from './gameBoard.js'
import { GAME_STATE } from './state.js'
 
export function getCellClicked(){
    let BOARD_CELLS = document.querySelectorAll('.boardCell')

    BOARD_CELLS.forEach( cell => { 
        cell.addEventListener('click', handleClickedCell)
    })
}

function handleClickedCell(e) {
    const cellKey = Number(e.target.dataset.key)
    gameBoard.availableCells.includes(cellKey) ? updateBoard(cellKey, GAME_STATE.playersTurn) :
    console.log('no can do')
}

function updateBoard(cellKey, player) {
    const availCellPos = gameBoard.availableCells.indexOf(cellKey)
    gameBoard.cellsUsed.push(cellKey)
    player.cellsUsed.push(cellKey)
    gameBoard.availableCells.splice(availCellPos,1)
}

export function getPlayerOne () {
    const playerOneSelect = document.getElementById('playerOneSelect')
    console.log(playerOneSelect.value)
}