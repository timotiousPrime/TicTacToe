import { playerOne, playerTwo, nextPlayersTurn } from "./gameLogic.js"
import * as CONSTS from "./constants.js"

// An impossible to defeat player
// Using mini max algo

export function getHardAiChoice(board){

    let bestCell = Number(findBestCell(board)) + 1
    console.log('best move: cell', bestCell)
    return bestCell
}

export function findBestCell(board){
    const maximizer = board.currentPlayer
    console.log('the maximizer is ', maximizer)

    let bestMove = null
    let bestVal = -1000

    // for each available cell
    for (let i = 0; i < 9; i++){
        if (board.cells[i] === null){

            // make a move
            board.updateCellChoice(i+1)

            // Get value of this cell after playing it
            let moveVal = minimax(board, 0, false, maximizer)

            // Reset board to original state
            board.undoMove(i)

            // return the cell with the best value
            if (moveVal > bestVal){

                bestMove = i
                bestVal = moveVal
            }
        }
        board.currentPlayer = maximizer
    }
    // console.log('best move is cellIndex',  bestMove)
    return bestMove
}

function minimax(board, depth, isMaximizer, maximizer) {

    // get score of state if state is terminal
    if (board.isGameOver()){
        // console.table (board.cells)
        if(board.gameMode === 'draw') {
            return 0
        }
        // Maximizer is positive, minimizer is negative
        if (board.currentPlayer === maximizer) {
            return 10 - depth
        } else {
            return -10 + depth
        }
    }

    // game is not terminal so we let the next player get their score
    if (isMaximizer){

        let bestScore = -10000

        // for each available cell make a move
        for (let i = 0; i < board.cells.length; i++){
            if (board.cells[i] === null) {

                // make sure the maximizer is playing
                board.currentPlayer = maximizer

                // make a move in the available cell
                board.updateCellChoice( i + 1 ) 

                // get value of that move by calling minimax again
                let value = minimax(board, depth + 1, false , maximizer )

                // check if this value is better than the current best score
                bestScore = Math.max(bestScore, value)

                // reset the board to original state
                board.undoMove(i)
            }
        }
        return bestScore

    } else {

        let bestScore = 10000

        // for each available cell make a move
        for (let i = 0; i < board.cells.length; i++) {
            if (board.cells[i] === null) {

                // make sure the minimizer is playing
                maximizer === playerOne ? board.currentPlayer = playerTwo : board.currentPlayer = playerOne
                
                // make a move in the available cell
                board.updateCellChoice( i + 1 ) 
                
                // get value of that move by calling minimax again
                let value = minimax(board, depth + 1, true, maximizer )
                
                // check if this value is better than the current best score
                bestScore = Math.min(bestScore, value)

                // reset the board to original state
                board.undoMove(i)
            }
        }
        return bestScore
    }





}

// function isPlayerWinner(player){
//     console.log('we found a winner')

//     console.log( CONSTS.WINNING_CELLS.some( (winningCombo) => {
//          (winningCombo[0] === player.token &&
//             winningCombo[1] === player.token && 
//             winningCombo[2] === player.token)
//     }))
// }

// function isGameDraw(board) {
//     board.cells.every( (cell) => {
//         return cell !== null
//     })
// }

