import { EL_IDS, playerOne, playerTwo, winningCells } from './constants.js'
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
    gameBoard.availableCells.includes(cellKey) ? updateState(cellKey, GAME_STATE) :
    console.log('no can do')
}

function updateState(cell, state) {
    updateBoard(cell, state)
    checkForWin(state)
    updatePlayerTurn(state)
    console.log(state)
    // updateState()
}

function checkForWin(state) {

    function checkCells(cell) {
        return state.playersTurn.cellsUsed.includes(cell)
    }

    winningCells.forEach( cellsArray => {
        cellsArray.every(checkCells) ? declareWinner(state) : console.log('no winner yet')
    })    
}

function updateBoard(cellKey, state) {
    const availCellPos = gameBoard.availableCells.indexOf(cellKey)
    gameBoard.cellsUsed.push(cellKey)
    state.playersTurn.cellsUsed.push(cellKey)
    gameBoard.availableCells.splice(availCellPos,1)
}

function updatePlayerTurn(state) {
    state.playersTurn === playerOne? state.playersTurn = playerTwo : state.playersTurn = playerOne
}

function declareWinner(state) {
    const player = state.playersTurn
    ++player.totalWins
    console.log(`${player.playerName} is the winner`)
}