// import { GAME_MODE, playerOne, playerTwo, WINNING_CELLS } from './constants.js'
// import { gameBoard } from './gameBoard.js'
// import { GAME_STATE, EL_IDS, INIT_STATE } from './constants.js'
// import {  getAiChoice } from './easyBot.js'
// import { playRound, checkResult, updatePlayerTurn } from './gameLogic.js'
// import { startGame } from './newGameLogic.js'

// export function runGame(){
//     startGame()
//     // showPlayersTurn(GAME_STATE)
//     // checkForAITurn(GAME_STATE)
//     // playRound(GAME_STATE)
//     // handleGameCells()
//     // // handleGameCells('click', handleClickedCell)
//     // handleRestartBtn ()
//     // // checkForAITurn(GAME_STATE)
// }

// export function handleGameCells(){
//     const BOARD_CELLS = document.querySelectorAll('.boardCell')

//     BOARD_CELLS.forEach( cell => { 
//         cell.addEventListener( 'click', handleClickedCell)
//     })
// }

// export const handleClickedCell = (e) => {
//     const cell = e.target
//     console.log(cell)
//     const cellKey = Number(cell.dataset.key)
//     if (GAME_STATE.availableCells.includes(cellKey)) {
//         console.log(cell)
//         // return cell
//         updateGameState(cell, GAME_STATE)
//     }
// }


// function updateGameState(cell, state) {
//     updateBoard(cell, state)
//     checkResult(state)
//     updatePlayerTurn(state)
//     // if (state.gameMode === 'running') {
//     //     // playRound(state)
//     // }
// }

// // function updateState(cell, state) {
// //     updateBoard(cell, state)
// //     checkForWin(state)
// //     checkForDraw(state)
// //     updatePlayerTurn(state)
// //     showPlayersTurn(state)
// //     checkForAITurn(state)
// // }

// function checkForAITurn(state) {
//     if (state.playersTurn.isHuman) {
//         return    
//     }
//     else if (state.gameMode === 'running') {
//         console.log(`it's the computer's turn`)
//         const AiCell = getAiChoice(state)
//         console.log(AiCell)
//         updateBoard(AiCell, state)
//         checkForWin(state)
//         checkForDraw(state)
//         updatePlayerTurn(state)
//         showPlayersTurn(state)
//     }
// }


// function updateBoard(cell, state) {
//     const cellKey = Number(cell.dataset.key)
//     const cellID =  cell.id
//     // const newCell = document.getElementById(cellID)
//     // console.log(newCell)
//     const availCellPos = state.availableCells.indexOf(cellKey)
//     state.cellsUsed.push(cellKey)
//     state.playersTurn.cellsUsed.push(cellKey)
//     state.availableCells.splice(availCellPos,1)
//     displayToken(cellID, GAME_STATE)
// }

// function displayToken(cellID, state) {
//     const cell = document.getElementById(cellID)
//     console.log(state.playersTurn.token)
//     console.log(state)
//     cell.classList.add(state.playersTurn.token)
// }

// // function checkForWin(state) {
// //     WINNING_CELLS.forEach( cellsArray => {
// //         if (cellsArray.every(checkCells)) {
// //             declareWinner(state)
// //             hideBoard ()
// //             setGameModeToWin(state)
// //             displayGameOverText(state)
// //         }
// //     })    
// // }

// // function checkForDraw(state) {
// //     if (state.availableCells.length < 1 && state.gameMode !== 'game-win') {
// //         hideBoard ()
// //         setGameModeToDraw(state)
// //         displayGameOverText(state)
// //         console.log('game is a draw')
// //     }
// // }

// // // Checks the cells from the winning cells array are in the players used array
// // // returns true if true
// // function checkCells(cell) {
// //     return GAME_STATE.playersTurn.cellsUsed.includes(cell)
// // }    

// // function setGameModeToWin(state){
// //     state.gameMode = GAME_MODE.GAME_WIN
// // }

// // function setGameModeToDraw(state){
// //     state.gameMode = GAME_MODE.GAME_DRAW
// // }

// // // Think about making this function return a winner
// // function declareWinner(state) {
// //     const player = state.playersTurn

// //     countPlayersWin(player)
// //     console.log(`${state.playersTurn.playerName} is the winner`)
// // }

// // function hideBoard () {
// //     EL_IDS.overlay.classList.remove('invisible')
// //     EL_IDS.overlay.classList.add('visible')
// // }

// function displayBoard() {
//     EL_IDS.overlay.classList.remove('visible')
//     EL_IDS.overlay.classList.add('invisible')
// }

// function handleRestartBtn () {
//     EL_IDS.restartBtn.addEventListener('click', restartGame)
// }

// function restartGame() {
//     resetBoard(GAME_STATE)
//     displayBoard()
//     showPlayersTurn(GAME_STATE)
//     console.log('restart game')
//     checkForAITurn(INIT_STATE)
// }

// function resetBoard(state){
//     const BOARD_CELLS = document.querySelectorAll('.boardCell')

//     BOARD_CELLS.forEach( cell => { 
//         cell.classList.remove( 'x', 'o')
//     })

//     // state = {
//     //     ...INIT_STATE,
//     //     gameMode: GAME_MODE.RUNNING

//     // }

//     // console.log(state)

//     GAME_STATE.availableCells = [1,2,3,4,5,6,7,8,9]
//     GAME_STATE.cellsUsed = []
//     GAME_STATE.playersTurn = playerOne
//     GAME_STATE.players[0].cellsUsed = []
//     GAME_STATE.players[1].cellsUsed = []


// }

// // function countPlayersWin(player) {
// //     ++player.totalWins
// //     displayWin(player)
// // }

// // function displayWin (player) {    
// //     player === playerOne ? 
// //     EL_IDS.playerOneScore.innerText = player.totalWins :
// //     EL_IDS.playerTwoScore.innerText = player.totalWins
// // }

// function showPlayersTurn(state){
//     state.playersTurn === playerOne ? 
//         (playerOneSection.classList.add('playing'), 
//         playerTwoSection.classList.remove('playing')) : 
//         (playerTwoSection.classList.add('playing'), 
//         playerOneSection.classList.remove('playing'))
// }

// // function updatePlayerTurn(state) {
// //     state.playersTurn === playerOne ? 
// //         state.playersTurn = playerTwo : 
// //         state.playersTurn = playerOne
// // }


// // function displayGameOverText(state) {
// //     if(GAME_STATE.gameMode === GAME_MODE.GAME_WIN) {
// //         gameOverText.innerText = `${state.playersTurn.playerName} is the winner`
// //     } else if (GAME_STATE.gameMode === GAME_MODE.GAME_DRAW) {
// //         gameOverText.innerText = `It's a draw`
// //     }
// // }