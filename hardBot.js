// An impossible to defeat player
// Using mini max algo
import { currentBoard } from "./newGameLogic.js"

// function findBestMove(board):
//     bestMove = NULL
//     for each move in board :
//         if current move is better than bestMove
//             bestMove = current move
//     return bestMove

// function minimax(board, depth, isMaximizingPlayer):

//     if current board state is a terminal state :
//         return value of the board
    
//     if isMaximizingPlayer :
//         bestVal = -INFINITY 
//         for each move in board :
//             value = minimax(board, depth+1, false)
//             bestVal = max( bestVal, value) 
//         return bestVal

//     else :
//         bestVal = +INFINITY 
//         for each move in board :
//             value = minimax(board, depth+1, true)
//             bestVal = min( bestVal, value) 
//         return bestVal 



export function getRandomRemainingCellIndex(state) {
    console.log(state)
    const range = state.availableCells.length
    return Math.floor(Math.random() * range )
}

export function getEasyAiChoice(state){
    const randomCellIndex = getRandomRemainingCellIndex(state)
    const cellValue = state.availableCells[randomCellIndex]
    const cell = document.getElementById(`cell${cellValue}`)
    
    // cellById.classList.add(state.playersTurn.token)
    console.log('choice has been made')
    console.log(randomCellIndex)
    console.log(cellValue)
    // console.log(cell)
    return cellValue
}

