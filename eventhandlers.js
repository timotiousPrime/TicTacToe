import { EL_IDS, playerOne, playerTwo, winningCells } from './constants.js'
import { gameBoard } from './gameBoard.js'
import { GAME_STATE } from './constants.js'
 
export function handleGameCells(){
    const BOARD_CELLS = document.querySelectorAll('.boardCell')

    BOARD_CELLS.forEach( cell => { 
        cell.addEventListener('click', handleClickedCell)
    })
}

function handleClickedCell(e) {
    const cellKey = Number(e.target.dataset.key)
    if (gameBoard.availableCells.includes(cellKey)) {
        updateState(cellKey, GAME_STATE)
    }
}

function updateState(cell, state) {
    updateBoard(cell, state)
    checkForWin(state)
    updatePlayerTurn(state)
    console.log(state)
}

// Checks the cells from the winning cells array are in the players used array
// returns true if true
function checkCells(cell) {
    return GAME_STATE.playersTurn.cellsUsed.includes(cell)
}

function checkForWin(state) {
    winningCells.forEach( cellsArray => {
        if (cellsArray.every(checkCells)) {
            declareWinner(state)}
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

// Think about making this function return a winner
function declareWinner(state) {
    const player = state.playersTurn
    ++player.totalWins
    console.log(`${player.playerName} is the winner`)
}