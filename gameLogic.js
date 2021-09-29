function startGame () {
    checkPlayersTurn()
    listenForPlayersMove()
    updateState()
    checkResult()
}

function listenForPlayersMove(state){
    state.playersTurn === playerOne ?
        displayPlayersTurn(playerOne) :
        displayPlayersTurn(playerTwo) :
        
    state.playersTurn.isHuman ?
        getPlayersMove(state.playersTurn) :
        getAiMove(state.playersTurn)
}