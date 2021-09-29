function startGame () {
    checkPlayersTurn()
    getPlayersMove()
    checkResult()
    updateState()
}

function checkPlayersTurn(state) {
    state.playersTurn === playerOne ?
        displayPlayersTurn(playerOne) :
        displayPlayersTurn(playerTwo) 
}

function getPlayersMove(state){
    state.playersTurn.isHuman ?
        getPlayersMove(state.playersTurn) :
        getAiMove(state.playersTurn)
}

function checkResult(state) {
    // Check for win
    WINNING_CELLS.forEach( cellsArray => {
        if (cellsArray.every(checkCurrentPlayersCellsUsed)) {
            declareWinner(state)
            endGame(state, 'gameWin')
        }
    })    
    // Check for draw
    if (state.availableCells.length < 1 && state.gameMode !== 'game-win') {
        endGame(state, 'gameDraw')
        console.log('game is a draw')
    }
}

// Checks the cells from the winning cells array are in the players used array
// returns true if true
function checkCurrentPlayersCellsUsed(cell) {
    return GAME_STATE.playersTurn.cellsUsed.includes(cell)
}
