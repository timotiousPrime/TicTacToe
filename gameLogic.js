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

function declareWinner(state) {
    const player = state.playersTurn

    countPlayersWin(player)
    console.log(`${state.playersTurn.playerName} is the winner`)
}

function countPlayersWin(player) {
    ++player.totalWins
    displayWin(player)
}

function displayWin (player) {    
    player === playerOne ? 
    EL_IDS.playerOneScore.innerText = player.totalWins :
    EL_IDS.playerTwoScore.innerText = player.totalWins
}


// Checks the cells from the winning cells array are in the players used array
// returns true if true
function checkCurrentPlayersCellsUsed(cell) {
    return GAME_STATE.playersTurn.cellsUsed.includes(cell)
}

function endGame(state, gameResult){
    hideBoard ()
    setGameMode(state, gameResult)
    displayGameOverText(state)
}

function setGameMode(state, gameResult){
    gameResult = 'gameWin' ?
        state.gameMode = GAME_MODE.GAME_WIN :
        state.gameMode = GAME_MODE.GAME_DRAW
}


function hideBoard () {
    EL_IDS.overlay.classList.remove('invisible')
    EL_IDS.overlay.classList.add('visible')
}

function displayGameOverText(state) {
    if(GAME_STATE.gameMode === GAME_MODE.GAME_WIN) {
        gameOverText.innerText = `${state.playersTurn.playerName} is the winner`
    } else if (GAME_STATE.gameMode === GAME_MODE.GAME_DRAW) {
        gameOverText.innerText = `It's a draw`
    }
}
