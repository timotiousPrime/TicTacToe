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
        const cellIndex = Number(cell)
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
                const cellID = `cell${index}`
                const boardCell = document.getElementById(cellID)
                boardCell.classList.add(cell) 
            }
        })
    },

    isWinner(winCombo){
            return (this.cells[Number(winCombo[0])] === this.currentPlayer.token && 
                    this.cells[Number(winCombo[1])] === this.currentPlayer.token && 
                    this.cells[Number(winCombo[2])] === this.currentPlayer.token) 
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
    return { isHuman, token, isWinner, totalWins, playerName, difficulty }
}

export const playerOne = player(true, 'x', 'Player One', 'hard')
export const playerTwo = player(false, 'o', 'Player Two', 'hard')

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
        if (cellClicked >= 0 && cellClicked <= 8){
            handleHumanChoice(board, cellClicked)
        }
    })
})
            
function handlePlayersChoice(board) {
    displayPlayersTurn(board)

    board.currentPlayer.isHuman ? 
    console.log(`it's a humans turn`) : 
    setTimeout(handleAiChoice, 500, board) 
}

function handleHumanChoice(board, cellClicked) {
    displayPlayersTurn(board)

    if (board.cells[cellClicked] === null) {

        board.updateCellChoice(cellClicked)
        
        board.printBoardState()

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
    console.log('GAME OVER')

    displayGameOver(board)
    if (board.gameMode === 'draw'){
        console.log(`It's a draw!`)
    }
    if (board.gameMode === 'win'){
        updateWinCount(board)
        console.log(`${board.currentPlayer.playerName} is the winner`)}

    handleRestartBtn (board)
}
    
function updateWinCount(board){
    // Update win count for the player that just won
    board.currentPlayer.totalWins++
    // Display win count in DOM
    board.currentPlayer === playerOne ? 
    CONSTS.EL_IDS.playerOneScore.innerHTML = board.currentPlayer.totalWins :
    CONSTS.EL_IDS.playerTwoScore.innerHTML = board.currentPlayer.totalWins
}

function displayGameOver(board){
    board.gameMode === 'win' ? 
    CONSTS.EL_IDS.gameOverText.innerHTML = `${board.currentPlayer.playerName} wins` :
    CONSTS.EL_IDS.gameOverText.innerHTML = `It's a draw`
    
    CONSTS.EL_IDS.gameOver.classList.remove('visually-hidden')
    CONSTS.EL_IDS.gameOver.classList.add('visible')
}

function handleRestartBtn (board) {

    CONSTS.EL_IDS.restartBtn.addEventListener( 'click', () => {
        // Remove game over overlay
        CONSTS.EL_IDS.gameOver.classList.add('visually-hidden')
        CONSTS.EL_IDS.gameOver.classList.remove('visible')

        // Reset current players win status
        board.currentPlayer.isWinner = false
        // Set current player to player One
        board.currentPlayer = playerOne
        // Reset cells
        board.cells = [
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
        // Clear cell styles
        CONSTS.EL_IDS.cells.forEach( (cell) => {
            cell.classList.remove('x','o')
        })
        
        displayPlayersTurn(board)
        
        board.printBoardState()
        
        board.gameMode = CONSTS.GAME_MODE.RUNNING
        
        console.log(board)
    })

    // CONSTS.EL_IDS.cells.forEach( (cell) => {
    //     cell.removeEventListener('click', (e) => {
    //         let cellClicked = Number(e.target.dataset.key)
    //         console.log(`${board.currentPlayer.playerName} chose cell` + String(cellClicked))
    //         if (cellClicked >= 0 && cellClicked <= 8){
    //             handleHumanChoice(board, cellClicked)
    //         }
    //     })
    // })

}

function displayPlayersTurn(board){
    // Set CSS props for appropriate player
    if (board.currentPlayer === playerOne){
        CONSTS.EL_IDS.body.classList.add('playerOneTurn')
        CONSTS.EL_IDS.body.classList.remove('playerTwoTurn')
    } else {
        CONSTS.EL_IDS.body.classList.add('playerTwoTurn')
        CONSTS.EL_IDS.body.classList.remove('playerOneTurn')
    }
}
