// import { currentBoard } from "./newGameLogic"
import { getHardAiChoice } from './hardBot.js' 
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
            // console.log('win?', this.gameMode)
            return true
        }
        if (!this.cells.some((this.isDraw), this)) {
            this.gameMode = 'draw'
            // console.log('draw?', this.gameMode)
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
// Temporary until I decide how to create the second player
export const playerTwo = player(false, 'o', 'playerTwo', 'hard')

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

        // console.log('Is the current player a winner? ', isPWinner(board.currentPlayer))

        let  gameOver = board.isGameOver()
        console.log("game over?", gameOver)

        if (board.isGameOver()){ 
            console.log('hello?')
            return endGame(board) 
            } 
        else {
            console.log('Next turn')
            nextPlayersTurn (board)
            handlePlayersChoice(board)
            }
    } else console.log('please choose a different cell')
}

function handleAiChoice(board) {
    console.log(board.currentPlayer.difficulty)
    if (board.currentPlayer.difficulty === 'hard'){
        console.log("AI will now choose a cell")
        console.log(board)
        let AIMove = getHardAiChoice(board)
        console.log(AIMove)
        board.updateCellChoice(AIMove)
    }

    console.table(board.cells)

    board.printBoardState()

    if (board.isGameOver()){ 
        console.log('hello?')
        return endGame(board) 
        } 
    else {
        console.log(`${board.currentPlayer.playerName}'s turn has just ended`)
        nextPlayersTurn (board)
        handlePlayersChoice(board)
        }
}

export function nextPlayersTurn (board) {
    board.currentPlayer === playerOne ? 
        board.currentPlayer = playerTwo : 
        board.currentPlayer = playerOne

    // console.log(`it is now ${board.currentPlayer.playerName}'s turn'`)
}

function endGame(board){ 
    if (board.gameMode === 'draw'){
        console.log(`It's a draw!`)
    }
    if (board.gameMode === 'win'){
    console.log(`${board.currentPlayer.playerName} is the winner`)}
}
