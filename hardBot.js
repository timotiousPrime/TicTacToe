import { playerOne, playerTwo, nextPlayersTurn } from "./gameLogic.js"
import * as CONSTS from "./constants.js"

// An impossible to defeat player
// Using mini max algo

export function getHardAiChoice(board){

    let BM = Number(findBestMove(board)) + 1
    console.log('best move: cell', BM)
    return BM
}

export function findBestMove(board){
    const maximizer = board.currentPlayer
    const minimizer = board.currentPlayer === playerOne ? playerTwo : playerOne
    
    // console.log('the maximizer is ', maximizer)
    // console.log('the minimizer is ', minimizer)

    let bestMove = null
    let bestVal = -1000

    // for each available cell
    for (let i = 0; i < 9; i++){
        if (board.cells[i] === null){

            // make a move
            board.updateCellChoice(i+1)

            // Get value of this cell after playing it
            let moveVal = minimax(board, 0, maximizer)
            debugger;
            // console.log(`move value for cell index ${i}`,moveVal)
            board.undoMove(i)

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

function minimax(board, depth, maximizer) {
    // debugger;

    // get score of state if state is terminal
    if (board.isGameOver()){
        // console.table (board.cells)
        if(board.gameMode === 'draw') {
            return 0
        }
        if (board.currentPlayer === maximizer) {
            return 10 - depth
        } else {
            return -10 + depth
        }
    }
    // update which player turn it is
    nextPlayersTurn(board) // should be switch player
    // isMaximizer ? isMaximizer = false : isMaximizer = true

    // game is not terminal so we let the next player get their score
    if (board.currentPlayer === maximizer){
        let bestScore = -10000

    // nextPlayersTurn(board)


        // for each available cell make a move
        for (let i = 0; i < board.cells.length; i++){
            if (board.cells[i] === null) {
                // make a move in the available cell
                board.updateCellChoice( i + 1 ) 
                // get value of that move by calling minimax again
                let value = minimax(board, depth + 1 , maximizer )
                // check if this value is better than the current best score
                if ( value > bestScore) {
                    bestScore = value
                }
                // undo the move just made so we can get 
                // the next score of the next move
                board.undoMove(i)
            }
        }
        return bestScore
    } else {

    // nextPlayersTurn(board)

        let bestScore = 10000

        // for each available cell make a move
        for (let i = 0; i < board.cells.length; i++) {
            if (board.cells[i] === null) {
                // make a move in the available cell
                board.updateCellChoice( i + 1 ) 
                // get value of that move by calling minimax again
                let value = minimax(board, depth + 1 , maximizer )
                // check if this value is better than the current best score
                if ( value < bestScore) {
                    bestScore = value
                }
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

