import { getHardAiChoice } from './hardBot.js' 
import * as CONSTS from './constants.js'

function CreateNewBoard(){
    let NewBoard = Object.create(BoardMethods)
    NewBoard.cells = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]
    NewBoard.currentPlayer = playerOne
    NewBoard.gameMode = 'running'
    return NewBoard
}

const BoardMethods = {

    // if cell is available, the board updates with players move
    updateCellChoice(cell) {
        const cellIndex = Number(cell - 1)
        if (this.cells[cellIndex] === null ) {
            this.cells[cellIndex] = String(this.currentPlayer.token)
        }
    },

    getAvailableCells() {
        this.cells.filter( (cell) => {
            return cell === null
        })
    },

    undoMove(cellIndex){
        this.cells[cellIndex] = null
        this.gameMode = 'running'
    },

    printBoardState(){
        this.cells.map( (cell, index) => {
            if ( cell !== null ) {
                const cellID = `cell${index+1}`
                const boardCell = document.getElementById(cellID)
                boardCell.classList.add(cell) 
            }
        })
    },

    isWinner(winCombo){
            return (this.cells[Number(winCombo[0]) -1 ] === this.currentPlayer.token && 
                    this.cells[Number(winCombo[1]) -1 ] === this.currentPlayer.token && 
                    this.cells[Number(winCombo[2]) -1 ] === this.currentPlayer.token) 
    },

    // this return if the game is NOT a draw,
    // get the NOT answer when you call this func
    isDraw(cell) {
        return ( cell === null) 
    },
    
    isGameOver () {
        if (CONSTS.WINNING_CELLS.some((this.isWinner), this)) {
            this.gameMode = 'win'
            return true
        }
        if (!this.cells.some((this.isDraw), this)) {
            this.gameMode = 'draw'
            return true
        }
        return false
    },
    
}

const player = (isHuman, token, playerName, difficulty) => {
    let totalWins = 0
    let isWinner = false
    // let difficulty = null
    return { isHuman, token, isWinner, totalWins, playerName, difficulty }
}

export const playerOne = player(true, 'x', 'playerOne', 'hard')
export const playerTwo = player(true, 'o', 'playerTwo', 'hard')

let board

function createGameBoard(){
    board = CreateNewBoard()    
    return board
}

export function runGame(){
    console.log('game has started')
    // make new Board to play with
    createGameBoard()
    
    board.printBoardState()
    // see whose turn it is and handle their play
    handlePlayersChoice(board)

}

CONSTS.EL_IDS.cells.forEach( (cell) => {
    cell.addEventListener('click', (e) => {
        let cellClicked = Number(e.target.dataset.key)
        console.log(`${board.currentPlayer.playerName} chose cell` + String(cellClicked))
        if (cellClicked >= 1 && cellClicked <= 9){
            handleHumanChoice(board, cellClicked)
        }
    })
})
            
function handlePlayersChoice(board) {
    displayPlayersTurn(board)

    board.currentPlayer.isHuman ? 
    console.log(`it's a humans turn`) : 
    handleAiChoice(board) 
}

function handleHumanChoice(board, cellClicked) {
    displayPlayersTurn(board)

    if (board.cells[cellClicked -1] === null) {

        board.updateCellChoice(cellClicked)
        
        board.printBoardState()

        let  gameOver = board.isGameOver()
        console.log("game over?", gameOver)

        updateState(board)

    } else console.log('please choose a different cell')
}

function handleAiChoice(board) {
    displayPlayersTurn(board)

    if (board.currentPlayer.difficulty === 'hard'){
        let AIMove = getHardAiChoice(board)
        board.updateCellChoice(AIMove)
    }

    board.printBoardState()

    updateState(board)
}

function updateState(board){
    if (board.isGameOver()){ 
        console.log('GAME OVER')
        if (board.gameMode === 'win'){
            board.currentPlayer.totalWins++
        }
        return endGame(board) 
        } 
    else {
        console.log(`Next turn`)
        nextPlayersTurn (board)
        handlePlayersChoice(board)
        }
}

export function nextPlayersTurn (board) {
    board.currentPlayer === playerOne ? 
        board.currentPlayer = playerTwo : 
        board.currentPlayer = playerOne
}

function endGame(board){ 
    if (board.gameMode === 'draw'){
        console.log(`It's a draw!`)
    }
    if (board.gameMode === 'win'){
    console.log(`${board.currentPlayer.playerName} is the winner`)}
}

function displayPlayersTurn(board){
    const playerOneSection = document.getElementById(`playerOneSection`)
    const playerTwoSection = document.getElementById(`playerTwoSection`)
    if (board.currentPlayer === playerOne){
        playerOneSection.classList.add('playing')
        playerTwoSection.classList.remove('playing')
    } else {
        playerTwoSection.classList.add('playing')
        playerOneSection.classList.remove('playing')
    }
}
