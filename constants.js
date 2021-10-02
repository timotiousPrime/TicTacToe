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
    gameOverText: document.getElementById('gameOverText')
}

export const GAME_MODE = {
    RUNNING: 'running',
    PLAYER_ONE_WIN: 'player-one-win',
    PLAYER_TWO_WIN: 'player-two-win',
    GAME_DRAW: 'game-draw',
}

const player = (isHuman, token, playerName) => {
    let totalWins = 0
    let cellsUsed = []
    let isWinner = false
    return { isHuman, token, isWinner, totalWins, cellsUsed, playerName }
}

export const playerOne = player(true, 'x', 'playerOne')
// Temporary until I decide how to create the second player
export const playerTwo = player(true, 'o', 'playerTwo')

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

    updatePlayersTurnAtBoard() {
        return (this.playersTurnAtBoard.playerName === 'playerOne' ?
        this.playersTurnAtBoard = playerTwo :
        this.playersTurnAtBoard = playerOne)
    },

    updateBoardCells (cellUsed) {
        const cellAvaibleIndex = this.availableCells.indexOf(cellUsed)
        if (this.availableCells[cellAvaibleIndex] === cellUsed) {
            const cellID = `cell${cellUsed}`
            const boardCell = document.getElementById(cellID)
            boardCell.classList.add(this.playersTurnAtBoard.token)
            return (
                this.availableCells.splice(cellAvaibleIndex,1),
                this.cellsUsed.push(cellUsed)
            )
        }
    },

    updatePlayersUsedCells(cellUsed) {
        return (this.playersTurnAtBoard.cellsUsed.push(cellUsed))
    },

    updateGameMode(result){
        return (this.gameMode = result)
    },
    
    checkResult(){
        console.log(this)
        // check for win
        WINNING_CELLS.forEach( cellsArray => {
            if (this.playersTurnAtBoard.cellsUsed.toString() === cellsArray.toString()) {
                
                console.log(this)
                if (this.playersTurnAtBoard === playerOne) {
                    this.updateWinResult(playerOne)
                    this.endGame()
                }
                else {
                    this.updateWinResult(playerTwo)
                    this.endGame()
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
        if (player === playerOne) {
            console.log('player one is the winner')
            return (
            this.gameMode = GAME_MODE.PLAYER_ONE_WIN,
            this.playersTurnAtBoard.isWinner = true),
            ++this.playersTurnAtBoard.totalWins
        } else {
            console.log('player two is the winner')

            return(
            this.gameMode = GAME_MODE.PLAYER_TWO_WIN,
            this.playersTurnAtBoard.isWinner = true)
        }
    },

    endGame(){
        const player = this.playersTurnAtBoard
        if (player.isWinner){
            this.hideBoard ()
            this.displayGameOverText(player)
        } 
    },

    hideBoard() {
        EL_IDS.overlay.classList.remove('invisible')
        EL_IDS.overlay.classList.add('visible')
    },

    displayGameOverText(player) {
        if(player.isWinner) {
            gameOverText.innerText = `${player.playerName} is the winner`
        } else if (state.gameMode === GAME_MODE.GAME_DRAW) {
            gameOverText.innerText = `It's a draw`
        }
    }
}
