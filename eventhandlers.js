import { EL_IDS, playerOne, playerTwo, WINNING_CELLS } from './constants.js'
import { gameBoard } from './gameBoard.js'
import { GAME_STATE } from './constants.js'
 
export function handleGameCells(){
    const BOARD_CELLS = document.querySelectorAll('.boardCell')

    BOARD_CELLS.forEach( cell => { 
        cell.addEventListener('click', handleClickedCell, )
    })
}

function handleClickedCell(e) {
    const cell = e.target
    const cellKey = Number(cell.dataset.key)
    if (gameBoard.availableCells.includes(cellKey)) {
        updateState(cell, GAME_STATE)
    }
}

function updateState(cell, state) {
    updateBoard(cell, state)
    checkForWin(state)
    updatePlayerTurn(state)
    console.log(state)
}

function updateBoard(cell, state) {
    const cellKey = Number(cell.dataset.key)
    const cellID =  cell.id
    const availCellPos = gameBoard.availableCells.indexOf(cellKey)
    gameBoard.cellsUsed.push(cellKey)
    state.playersTurn.cellsUsed.push(cellKey)
    gameBoard.availableCells.splice(availCellPos,1)
    displayToken(cellID, GAME_STATE)
}

function displayToken(cellID, state) {
    const cell = document.getElementById(cellID)
    console.log(state.playersTurn.token)
    console.log(state)
    cell.classList.add(state.playersTurn.token)
}

function checkForWin(state) {
    WINNING_CELLS.forEach( cellsArray => {
        if (cellsArray.every(checkCells)) {
            declareWinner(state)}
    })    
}

// Checks the cells from the winning cells array are in the players used array
// returns true if true
function checkCells(cell) {
    return GAME_STATE.playersTurn.cellsUsed.includes(cell)
}    

// Think about making this function return a winner
function declareWinner(state) {
    countPlayersWin(state)
    console.log(`${state.playersTurn.playerName} is the winner`)
}

function countPlayersWin(state) {
    const player = state.playersTurn
    ++player.totalWins
}

function updatePlayerTurn(state) {
    state.playersTurn === playerOne ? 
        state.playersTurn = playerTwo : 
        state.playersTurn = playerOne
}


