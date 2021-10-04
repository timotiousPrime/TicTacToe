import * as CONSTS from './constants.js'

export function startGame () {
    const cells = document.querySelectorAll('.boardCell')
    cells.forEach( cell => {
        cell.addEventListener('click', cellClick)
    })
    
    const BoardState = CONSTS.CreateNewBoard()

    
    function cellClick(e){
        let cellClicked = Number(e.target.dataset.key)
        let cellAvaibleIndex = BoardState.availableCells.indexOf(cellClicked)
        console.log(BoardState.availableCells)
        if (BoardState.availableCells[cellAvaibleIndex] === cellClicked){
            updatePlayersMove(BoardState, cellClicked)
        }
        // console.log(cellClicked)
        // console.log(boardState)
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

function makeBoard(){
    return BoardState
}

export function handleRestartBtn(){
    CONSTS.EL_IDS.restartBtn.addEventListener('click', restartGame)
}

function restartGame(){
    resetBoard()
    removeEventListeners()
    updatePlayers()
    showBoard()
    startGame()
}

function resetBoard() {
    const cells = document.querySelectorAll('.boardCell')
    cells.forEach(cell => {
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
        let cellAvaibleIndex = boardState.availableCells.indexOf(cellClicked)
        console.log(boardState.availableCells)
        if (boardState.availableCells[cellAvaibleIndex] === cellClicked){
            updatePlayersMove(boardState, cellClicked)
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