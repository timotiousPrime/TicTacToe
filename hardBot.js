import { playerOne, playerTwo } from "./constants.js"
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
    
    console.log('the maximizer is ', maximizer)
    console.log('the minimizer is ', minimizer)

    let bestMove = null

    // for each available cell
    for (let i = 0; i < 9; i++){
        if (board.cells[i] === null){

            // make a move
            board.updateCellChoice(i+1)

            // Get value of this cell after playing it
            let moveVal = minimax(board, 3, true, maximizer, minimizer)

            console.log(`move value for cell index ${i}`,moveVal)
            board.undoMove(i)

            let bestVal = -1000
                    if (moveVal > bestVal){
                        bestMove = i
                        bestVal = moveVal
                    }
        }
    }
    board.currentPlayer = maximizer
    console.log('best move is cellIndex',  bestMove)
    return bestMove
}

function minimax(board, depth, isMaximizer, maximizer, minimizer) {
    
    // console.log(maximizer)
    // console.log(minimizer)

    // check if board is terminal and return result if it is
    if ( isPlayerWinner(maximizer) ) {
            return 10
    }

    if ( isPlayerWinner(minimizer) ) {
            return -10
    }

    if (isGameDraw(board)) {
        console.log('the game is a draw: ', !isGameDraw(board))
        return 0
    }

    const player = board.currentPlayer === playerOne ? playerTwo : playerOne
    board.currentPlayer = player

    if (player !== maximizer) {
        let bestVal = -Infinity

        for (let i = 0; i < 9; i++){
            if (board.cells[i] === null){
                board.updateCellChoice(i + 1)
                let value = minimax(board, depth, false, maximizer, minimizer)
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
                let value = minimax(board, depth, true, maximizer, minimizer)
                // After you have the value, undo the move
                board.undoMove(i)
                // Get the smallest value 
                bestVal = Math.min(value, bestVal)
            }

        }
        return bestVal
    }
}

function isPlayerWinner(player){
    CONSTS.WINNING_CELLS.some( (winningCombo) => {
        if (winningCombo[0] === player.token &&
            winningCombo[1] === player.token && 
            winningCombo[2] === player.token) {
                return true
            }
    })
}

function isGameDraw(board) {
    board.cells.some( (cell) => {
        return cell === null
    })
}

