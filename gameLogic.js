// import {  getAiChoice } from './easyBot.js'
// import { GAME_MODE, playerOne, playerTwo, WINNING_CELLS, GAME_STATE, EL_IDS, INIT_STATE } from './constants.js'
// import { handleGameCells, handleClickedCell } from './eventhandlers.js'
 
//  export function playRound (state) {
//     checkPlayersTurn(state)
//     // handlePlayersMove(state)
    
//     updateGameState(state)
// }

// function checkPlayersTurn(state) {
//     state.playersTurn === playerOne ?
//     displayPlayersTurn(playerOne) :
//     displayPlayersTurn(playerTwo) 
// }

// function displayPlayersTurn(player){
//     player === playerOne ? 
//     (playerOneSection.classList.add('playing'), 
//     playerTwoSection.classList.remove('playing')) : 
//     (playerTwoSection.classList.add('playing'), 
//     playerOneSection.classList.remove('playing'))
// }

// function handlePlayersMove(state){
//     let playersMove
//     state.playersTurn.isHuman ?
//     handleGameCells() :
//     playersMove = getAiChoice(state)

//     console.log(playersMove)
//     // updateBoard(playersMove, state)
// }

// function getHumanPlayersMove(player) {
//     console.log(handleGameCells('click', handleClickedCell))
//     return handleGameCells('click', handleClickedCell)
//     // console.log(`${player.playerName} has played a move`)
// }

// function updateGameState(state) {
//     checkResult(state)
//     updatePlayerTurn(state)
//     // if (state.gameMode === 'running') {
//     //     // playRound(state)
//     // }
// }


// // export function updateBoard(cell, state) {
// //     const cellKey = Number(cell.dataset.key)
// //     const cellID =  cell.id
// //     // const newCell = document.getElementById(cellID)
// //     // console.log(newCell)
// //     const availCellPos = state.availableCells.indexOf(cellKey)
// //     state.cellsUsed.push(cellKey)
// //     state.playersTurn.cellsUsed.push(cellKey)
// //     state.availableCells.splice(availCellPos,1)
// //     displayToken(cellID, state)
// //     // displayToken(cellID, GAME_STATE)
// // }


// function displayToken(cellID, state) {
//     const cell = document.getElementById(cellID)
//     console.log(state.playersTurn.token)
//     console.log(state)
//     cell.classList.add(state.playersTurn.token)
// }


// export function checkResult(state) {
//     // Check for win
//     WINNING_CELLS.forEach( cellsArray => {
//         if (cellsArray.every(checkCurrentPlayersCellsUsed)) {
//             declareWinner(state)
//             endGame(state, 'gameWin')
//         }
//     })    
//     // Check for draw
//     if (state.availableCells.length < 1 && state.gameMode !== 'game-win') {
//         endGame(state, 'gameDraw')
//         console.log('game is a draw')
//     }
// }

// function declareWinner(state) {
//     const player = state.playersTurn

//     countPlayersWin(player)
//     console.log(`${state.playersTurn.playerName} is the winner`)
// }

// function countPlayersWin(player) {
//     ++player.totalWins
//     displayWin(player)
// }

// function displayWin (player) {    
//     player === playerOne ? 
//     EL_IDS.playerOneScore.innerText = player.totalWins :
//     EL_IDS.playerTwoScore.innerText = player.totalWins
// }


// // Checks the cells from the winning cells array are in the players used array
// // returns true if true
// function checkCurrentPlayersCellsUsed(cell) {
//     return GAME_STATE.playersTurn.cellsUsed.includes(cell)
// }

// function endGame(state, gameResult){
//     hideBoard ()
//     setGameMode(state, gameResult)
//     displayGameOverText(state)
// }


// export function updatePlayerTurn(state) {
//     state.playersTurn === playerOne ? 
//         state.playersTurn = playerTwo : 
//         state.playersTurn = playerOne
// }



// function setGameMode(state, gameResult){
//     gameResult = 'gameWin' ?
//         state.gameMode = GAME_MODE.GAME_WIN :
//         state.gameMode = GAME_MODE.GAME_DRAW
// }

// function hideBoard () {
//     EL_IDS.overlay.classList.remove('invisible')
//     EL_IDS.overlay.classList.add('visible')
// }

// function displayGameOverText(state) {
//     if(GAME_STATE.gameMode === GAME_MODE.GAME_WIN) {
//         gameOverText.innerText = `${state.playersTurn.playerName} is the winner`
//     } else if (GAME_STATE.gameMode === GAME_MODE.GAME_DRAW) {
//         gameOverText.innerText = `It's a draw`
//     }
// }