import { playerOne, playerTwo } from "./constants.js"
import * as CONSTS from "./constants.js"

// An impossible to defeat player
// Using mini max algo

export function getHardAiChoice(state){

    let BM = Number(findBestMove(state)) + 1
    console.log('best move: cell', BM)
    return BM
}

export function findBestMove(board){
    const originalPlayer = board.currentPlayer
    
    let bestMove = null

    // for each available cell
    for (let i = 0; i < 9; i++){
        if (board.cells[i] === null){

            // make a move
            board.updateCellChoice(i+1)

            // Get value of this cell after playing it
            let moveVal = minimax(board, 3, true)

            console.log(`move value for cell index ${i}`,moveVal)
            board.undoMove(i)

            let bestVal = -1000
                    if (moveVal > bestVal){
                        bestMove = i
                        bestVal = moveVal
                    }

            //     if (isMaximizer) {
            //         let bestVal = -1000
            //         if (moveVal > bestVal){
            //             bestMove = i
            //             bestVal = moveVal
            //         }
            //     } else {
            //         let bestVal = 1000
            //         if (moveVal < bestVal){
            //             bestMove = i
            //             bestVal = moveVal
            //     }
            // }
        }
    }
    board.currentPlayer = originalPlayer
    console.log('best move is cellIndex',  bestMove)
    return bestMove
}

function minimax(board, depth, isMaximizer) {
    // isMaximizer ? 
    // board.currentPlayer = playerOne :
    // board.currentPlayer = playerTwo

    // check if board is terminal and return result if it is
    if ( isMaximizer ) {
        if (CONSTS.WINNING_CELLS.some ((board.isWinner), board)){
            return 10
        }
    }

    if ( !isMaximizer ) {
        if (CONSTS.WINNING_CELLS.some ((board.isWinner), board)){
            return -10
        }
    }

    if (!board.cells.some((board.isDraw), board)) {
        return 0
    }

    if (isMaximizer) {
        let bestVal = -Infinity

        for (let i = 0; i < 9; i++){
            if (board.cells[i] === null){
                board.updateCellChoice(i + 1)
                let value = minimax(board, depth, false)
                board.undoMove(i)
                bestVal = Math.max(value, bestVal)

            }
        }
        return bestVal
    } 
    else 
    {

        let bestVal = +Infinity
        for (let i = 0; i< board.cells.length; i++){
            if (board.cells[i] === null){
                // Make move
                board.updateCellChoice(i + 1)
                // Get value from the move you just made
                let value = minimax(board, depth, true)
                // After you have the value, undo the move
                board.undoMove(i)
                // Get the smallest value 
                bestVal = Math.min(value, bestVal)
            }

        }
        return bestVal
    }
}