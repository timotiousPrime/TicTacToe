const GAME_MODE = {
    INIT: 'init',
    PLAYING: 'playing',
    GAMEWON: 'gameWon',
    GAMETIED: 'gameTied',
}

const GAME_INIT_STATE = {
    currentPlayer: 'player1',
    gameMode: GAME_MODE.PLAYING,



}

const INIT_BOARD = {
    cellsAvailable: [
        1,2,3,4,5,6,7,8,9
    ],
    cellsUsed: [],
}

const winningCells = [
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,2,3],
    [4,5,6],
    [7,8,9],
]