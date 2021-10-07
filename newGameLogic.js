import * as CONSTS from './constants.js'

let currentBoard

export function createBoard() {
    currentBoard = CONSTS.CreateNewBoard()
    console.log(currentBoard)
}

CONSTS.EL_IDS.cells.forEach( cell => {
    cell.addEventListener('click', cellClick)
})

function cellClick(e){
        let cellClicked = Number(e.target.dataset.key)
        let cellAvaibleIndex = currentBoard.availableCells.indexOf(cellClicked)
        console.log(currentBoard.availableCells)
        if (currentBoard.availableCells[cellAvaibleIndex] === cellClicked){
            updatePlayersMove(currentBoard, cellClicked)
        }
    }

function updatePlayersMove(state, cellPlayed){
    state.updateBoardCells(cellPlayed)
    state.updatePlayersUsedCells(cellPlayed)
    state.checkResult()
    state.endGame()
    state.updatePlayersTurnAtBoard()
    console.log('next move')
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