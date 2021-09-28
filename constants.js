// import { getPlayerOne } from "./eventhandlers.js"
import { gameBoard } from "./gameBoard.js"

export const WINNING_CELLS = [
    [1,5,9],
    [3,5,7],
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
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
    INIT: 'init',
    RUNNING: 'running',
    GAME_WIN: 'game-win',
    GAME_DRAW: 'game-draw',
}

const player = (isHuman, token, playerName) => {
    let totalWins = 0
    let cellsUsed = []
    return { isHuman, token, totalWins, cellsUsed, playerName }
}

export const playerOne = player(true, 'x', 'playerOne')
// Temporary until I decide how to create the second player
export const playerTwo = player(false, 'o', 'playerTwo')

export const INIT_STATE = {
    gameMode: GAME_MODE.INIT,
    players: [playerOne, playerTwo],
    playersTurn: playerOne,
    availableCells: [1,2,3,4,5,6,7,8,9],
    cellsUsed: [],
}

export const GAME_STATE = {
    gameMode: GAME_MODE.RUNNING,
    players: [playerOne, playerTwo],
    playersTurn: playerOne,
    availableCells: [1,2,3,4,5,6,7,8,9],
    cellsUsed: [],
}
