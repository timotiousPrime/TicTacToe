export const WINNING_CELLS = [
    [ 0, 4, 8 ] ,
    [ 2, 4, 6 ],
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
]

export const EL_IDS = {
    playerOneScore: document.getElementById('playerOneScore'),
    playerTwoScore: document.getElementById('playerTwoScore'),
    restartBtn: document.getElementById('restartBtn'),
    overlay: document.getElementById('gameOver'),
    playerOneSection: document.getElementById('id="playerOneSection'),
    playerTwoSection: document.getElementById('id="playerTwoSection'),
    gameOver: document.getElementById('gameOver'),
    gameOverText: document.getElementById('gameOverText'),
    cells: document.querySelectorAll('.boardCell'),
}

export const GAME_MODE = {
    RUNNING: 'running',
    PLAYER_ONE_WIN: 'player-one-win',
    PLAYER_TWO_WIN: 'player-two-win',
    GAME_DRAW: 'game-draw',
}
