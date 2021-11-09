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
