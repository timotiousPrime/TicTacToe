import * as CONSTS from './constants.js'
import { getEasyAiChoice } from './easyBot.js'

export let currentBoard

export function createBoard() {
    currentBoard = CONSTS.CreateNewBoard()
    // console.log(currentBoard)
}

CONSTS.EL_IDS.cells.forEach( cell => {
    cell.addEventListener('click', cellClick)
})

export function startGame(){
    createBoard()
    currentBoard.playersTurnAtBoard.isHuman?
    console.log('players move'):
    updatePlayersMove(updatePlayersMove(currentBoard, getAiChoice(currentBoard)))
}

function cellClick(e){
        let cellClicked = Number(e.target.dataset.key)
        let cellAvaibleIndex = currentBoard.availableCells.indexOf(cellClicked)
        console.log('available cells: ',currentBoard.availableCells)
        if (currentBoard.availableCells[cellAvaibleIndex] === cellClicked){
            updatePlayersMove(currentBoard, cellClicked)
        }
    }

function updatePlayersMove(state, cellPlayed){
    console.log('state:', state)
    state.updateBoardCells(cellPlayed)
    state.updatePlayersUsedCells(cellPlayed)
    state.checkResult()
    state.updatePlayersTurnAtBoard(state.endGame())
    console.log('next move')
    checkForAiTurn(state)
}

function checkForAiTurn(state){
    console.log('Ai difficlty: ', state.playersTurnAtBoard.difficulty)
    if (state.gameMode === CONSTS.GAME_MODE.RUNNING) {
        if (!state.playersTurnAtBoard.isHuman && state.playersTurnAtBoard.difficulty === 'easy') {
            updatePlayersMove(state, getEasyAiChoice(state))}
        else if (!state.playersTurnAtBoard.isHuman && state.playersTurnAtBoard.difficulty === 'hard') {
            console.log('you will never win')
        }
    }
}

export function handleRestartBtn(){
    CONSTS.EL_IDS.restartBtn.addEventListener('click', restartGame)
}

function restartGame(){
    resetBoard()
    removeEventListeners()
    updatePlayers()
    showBoard()
    createBoard()
}

function resetBoard() {
    CONSTS.EL_IDS.cells.forEach(cell => {
        cell.classList.remove('x')
        cell.classList.remove('o')
    })
}

function removeEventListeners(){
    const cells = document.querySelectorAll('.boardCell')
    cells.forEach( cell => {
        cell.removeEventListener('click', cellClick)
    })

    function cellClick(e){
        let cellClicked = Number(e.target.dataset.key)
        let cellAvaibleIndex = currentBoard.availableCells.indexOf(cellClicked)
        console.log(currentBoard.availableCells)
        if (currentBoard.availableCells[cellAvaibleIndex] === cellClicked){
            updatePlayersMove(currentBoard, cellClicked)
        }
    }    
}


function updatePlayers() {
    CONSTS.playerOne.cellsUsed = []
    CONSTS.playerTwo.cellsUsed = []
    CONSTS.playerOne.isWinner = false
    CONSTS.playerTwo.isWinner = false
}

function showBoard() {
    CONSTS.EL_IDS.overlay.classList.remove('visible')
    CONSTS.EL_IDS.overlay.classList.add('invisible')
}