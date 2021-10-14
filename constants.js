// import { getPlayerOne } from "./eventhandlers.js"

export const WINNING_CELLS = [
    [ 1, 5, 9 ] ,
    [ 3, 5, 7 ],
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 3, 6, 9 ],
]

export const EL_IDS = {
    playerOneScore: document.getElementById('playerOneScore'),
    playerTwoScore: document.getElementById('playerTwoScore'),
    restartBtn: document.getElementById('restartBtn'),
    overlay: document.getElementById('gameOver'),
    playerOneSection: document.getElementById('id="playerOneSection'),
    playerTwoSection: document.getElementById('id="playerTwoSection'),
    gameOverText: document.getElementById('gameOverText'),
    cells: document.querySelectorAll('.boardCell'),
}

export const GAME_MODE = {
    RUNNING: 'running',
    PLAYER_ONE_WIN: 'player-one-win',
    PLAYER_TWO_WIN: 'player-two-win',
    GAME_DRAW: 'game-draw',
}

const player = (isHuman, token, playerName, difficulty) => {
    let totalWins = 0
    let cellsUsed = []
    let isWinner = false
    // let difficulty = null
    return { isHuman, token, isWinner, totalWins, cellsUsed, playerName, difficulty }
}

export const playerOne = player(true, 'x', 'playerOne', 'easy')
// Temporary until I decide how to create the second player
export const playerTwo = player(false, 'o', 'playerTwo', 'easy')

export function CreateNewBoard() {
    let NewBoard = Object.create(BoardMethods)
    NewBoard.availableCells = [1,2,3,4,5,6,7,8,9]
    NewBoard.cellsUsed = []
    NewBoard.players = [playerOne, playerTwo]
    NewBoard.playersTurnAtBoard = playerOne
    NewBoard.gameMode = GAME_MODE.RUNNING
        
    return NewBoard
}

const BoardMethods = {

    updatePlayersTurnAtBoard(isGameOver) {
        if (isGameOver !== true){
        return (this.playersTurnAtBoard.playerName === 'playerOne' ?
        this.playersTurnAtBoard = playerTwo :
        this.playersTurnAtBoard = playerOne)}
    },

    updateBoardCells (cellUsed) {
        const cellAvaibleIndex = this.availableCells.indexOf(cellUsed)
        if (this.availableCells[cellAvaibleIndex] === cellUsed) {
            const cellID = `cell${cellUsed}`
            const boardCell = document.getElementById(cellID)
            boardCell.classList.add(this.playersTurnAtBoard.token)
            return (
                this.availableCells.splice(cellAvaibleIndex,1),
                this.cellsUsed.push(cellUsed),
                console.log('cells available after click',this.availableCells)
            )
        }
    },

    updatePlayersUsedCells(cellUsed) {
        return (this.playersTurnAtBoard.cellsUsed.push(cellUsed))
    },

    updateGameMode(result){
        return (this.gameMode = result)
    },

    hasWinningCombo (winningCombo, playerCells) {
        const winningCells = []
        winningCombo.forEach( cell => {
            if (playerCells.indexOf(cell) >= 0){
                winningCells.push(cell)
            }
        })
        if (winningCells.toString() === winningCombo.toString()){
            return true
        }
    },
    
    checkResult(){
        console.log(this.playersTurnAtBoard.playerName, this.playersTurnAtBoard.cellsUsed)
        
        // check for win
        WINNING_CELLS.forEach( cellsArray => {
            if (this.hasWinningCombo(cellsArray, this.playersTurnAtBoard.cellsUsed)) {
                
                // console.log(this)
                if (this.playersTurnAtBoard === playerOne) {
                    this.updateWinResult(playerOne)
                    return this.endGame()
                }
                else {
                    this.updateWinResult(playerTwo)
                    return this.endGame()
                }
            }
        })
        // Check for draw
        if (this.availableCells.length < 1 && this.playersTurnAtBoard.isWinner == false) {
            this.gameMode = GAME_MODE.GAME_DRAW
            console.log('game is a draw')
            this.endGame()
        }


    },

    updateWinResult(player) {
        this.updateWinCount(this.playersTurnAtBoard)
        if (player === playerOne) {
            console.log('player one is the winner')
            return (
            this.gameMode = GAME_MODE.PLAYER_ONE_WIN,
            this.playersTurnAtBoard.isWinner = true)
        } else {
            console.log('player two is the winner')

            return(
            this.gameMode = GAME_MODE.PLAYER_TWO_WIN,
            this.playersTurnAtBoard.isWinner = true)
        }
    },

    updateWinCount(player){
        ++player.totalWins
        player === playerOne ?
        playerOneScore.innerText = player.totalWins :
        playerTwoScore.innerText = player.totalWins 

    },

    endGame(){
        let isGameOver = false 
        const player = this.playersTurnAtBoard
        if (player.isWinner || this.gameMode !== GAME_MODE.RUNNING){
            this.hideBoard ()
            this.displayGameOverText(player)
            isGameOver = true
            return isGameOver
        }
    },

    hideBoard() {
        EL_IDS.overlay.classList.remove('invisible')
        EL_IDS.overlay.classList.add('visible')
    },

    displayGameOverText(player) {
        if(player.isWinner) {
            gameOverText.innerText = `${player.playerName} is the winner`
        } else if (this.gameMode === GAME_MODE.GAME_DRAW) {
            gameOverText.innerText = `It's a draw`
        }
    },
}
