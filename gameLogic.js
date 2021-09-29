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
