import * as CONSTS from './constants.js'

export function startGame () {
    let boardState = CONSTS.CreateNewBoard()
    const cells = document.querySelectorAll('.boardCell')
    cells.forEach( cell => {
        cell.addEventListener('click', cellClick)
    })
    
    function cellClick(e){
        let cellClicked = Number(e.target.dataset.key)
        const cellAvaibleIndex = boardState.availableCells.indexOf(cellClicked)
        if (boardState.availableCells[cellAvaibleIndex] === cellClicked){
            updatePlayersMove(boardState, cellClicked)
        }
        // console.log(cellClicked)
        // console.log(boardState)
    }
    
}

function updatePlayersMove(state, cellPlayed){
    // const cellAvaibleIndex = state.availableCells.indexOf(cellPlayed)
    // if (state.availableCells[cellAvaibleIndex] === cellPlayed) {
    state.updateBoardCells(cellPlayed)
    state.updatePlayersUsedCells(cellPlayed)
    state.checkResult()
    state.endGame()
    state.updatePlayersTurnAtBoard()
// }
}

function endGame(state){
    const player = state.playersTurnAtBoard
    if (player.isWinner){
        hideBoard ()
        displayGameOverText(player, state)
    } 
}

// function hideBoard () {
//     CONSTS.EL_IDS.overlay.classList.remove('invisible')
//     CONSTS.EL_IDS.overlay.classList.add('visible')
// }

// function displayGameOverText(player) {
//     if(player.isWinner) {
//         gameOverText.innerText = `${player.playerName} is the winner`
//     } else if (state.gameMode === CONSTS.GAME_MODE.GAME_DRAW) {
//         gameOverText.innerText = `It's a draw`
//     }
// }