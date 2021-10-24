// import { currentBoard } from "./newGameLogic"

// import { startGame, updatePlayersMove } from "./newGameLogic"

import * as CONSTS from './constants.js'


const WINNING_CELLS = [
    [ 1, 5, 9 ],
    [ 3, 5, 7 ],
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 3, 6, 9 ],
]

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

    undoMove(cellIndex){
        this.cells[cellIndex] = null
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
        console.log(cell)
        return ( cell === null) 
    },
    
    isGameOver () {
        console.log('this for isGameOver')
        if (CONSTS.WINNING_CELLS.some((this.isWinner), this)){
            this.gameMode = 'win'
            console.log(this.gameMode)
            return true
        }
        if (!this.cells.some((this.isDraw), this)) {
            this.gameMode = 'draw'
            console.log(this.gameMode)
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


const playerOne = player(true, 'x', 'playerOne')
// Temporary until I decide how to create the second player
const playerTwo = player(false, 'o', 'playerTwo', 'easy')

let board

function createGameBoard(){
    board = CreateNewBoard()    
    return board
}


export function runGame(){
    console.log('game has started')
    // make new Board to play with
    createGameBoard()
    
    console.log(board.currentPlayer.playerName, board.currentPlayer, board.gameMode)
    console.log('board cells: ')
    console.table( board.cells )

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
    board.currentPlayer.isHuman ? 
        console.log(`it's a humans turn`) : 
        handleAiChoice(board) 
}

function handleHumanChoice(board, cellClicked) {

    if (board.cells[cellClicked -1] === null) {

        board.updateCellChoice(cellClicked)
        console.log('board cells after clicking') 
        console.table(board.cells)
        
        board.printBoardState()

        let  gameOver = board.isGameOver()
        console.log(gameOver)

        if (board.isGameOver()){ 
            console.log('hello?')
            return endGame(board) 
            } 
        else {
            console.log('Hi!')
            nextPlayersTurn (board)
            handlePlayersChoice(board)
            }
    } else console.log('please choose a different cell')
}

function handleAiChoice(board) {
    if (board.currentPlayer.difficulty === 'easy'){
        
    }
}

function nextPlayersTurn (board) {
    board.currentPlayer === playerOne ? 
        board.currentPlayer = playerTwo : 
        board.currentPlayer = playerOne

    console.log(`it is now ${board.currentPlayer.playerName}'s turn'`)
}

function endGame(board){ 
    if (board.gameMode === 'draw'){
        console.log(`It's a draw!`)
    }
    if (board.gameMode === 'win'){
    console.log(`${board.currentPlayer.playerName} is the winner`)}
}
