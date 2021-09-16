// import { getPlayerOne } from "./eventhandlers.js"
import { gameBoard } from "./gameBoard.js"

export const EL_IDS = {
    GAMEBOARD: 'board',
    CELL1: 'cell1',
    CELL2: 'cell2',
    CELL3: 'cell3',
    CELL4: 'cell4',
    CELL5: 'cell5',
    CELL6: 'cell6',
    CELL7: 'cell7',
    CELL8: 'cell8',
    CELL9: 'cell9',
}

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

export const GAME_MODE = {
    INIT: 'init',
    RUNNING: 'running',
    GAME_WIN: 'game-win',
    GAME_DRAW: 'game-draw',
}

const INIT_STATE = {
    gameMode: GAME_MODE.INIT,
    playersTurn: 'playerOne',
    availableCells: [1,2,3,4,5,6,7,8,9],
    cellsUsed: [],
}

const player = (isHuman, token, playerName) => {
    let totalWins = 0
    let cellsUsed = []
    return { isHuman, token, totalWins, cellsUsed, playerName }
}

export const playerOne = player(true, 'x', 'playerOne')
// Temporary until I decide how to create the second player
export const playerTwo = player(true, 'o', 'playerTwo')

export const GAME_STATE = {
    gameMode: GAME_MODE.RUNNING,
    players: [playerOne, playerTwo],
    playersTurn: playerOne,
    availableCells: gameBoard.availableCells,
    cellsUsed: gameBoard.cellsUsed,
}
