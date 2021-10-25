import { CreateNewBoard, CreateVirtualBoard, playerOne, playerTwo } from "./constants.js"
import * as CONSTS from "./constants.js"

// An impossible to defeat player
// Using mini max algo

export function getHardAiChoice(state){

    // if (state.availableCells.length > 0){
    //     return findBestMove(state)
    // }
    let BM = Number(findBestMove(state)) + 1
    console.log('best move: cell', BM)
    return BM
}

// // check if there are moves remaining on the board
// function isMovesLeft(board){
//     // return true if there are 
//     return board.availableCells.length > 0 ?
//     true :
//     // else return false if there are no moves left
//     false
// }

// function evaluate(board){
//     // check for X or O victory

//     if (board.players[0].isWinner){
//         // return +10 if there is a win for X

//         return 10
//     } else if (board.players[1].isWinner){
//         // else return -10 for O win
//         return -10
//         // if no wins then return 0
//     } else if (board.gameMode === 'game-draw'){
//         return 0
//     }
// }

// function minimax(board, depth, isMax) {
//     // Create an image of the existing board to test on
    
//     // gets the score of the current board
//     let score = evaluate(board)
//     console.log(score)

//     // If the maximizer has won, 
//     // return their evaluated score
//     if (score === 10) return score
    

//     // If the minimizer has won, 
//     // return their evaluated score
//     if (score === -10) return score
    
//     // check if it's a tie
//     if (board.availableCells < 1) return 0
    
//     if (isMax) {
//         let best = -1000

//         // check all cells 
//         // if cell is empty
//         board.availableCells.forEach( cell => {
//             // generate a virtual board to see the value of the play
//             const virtualBoard = CreateVirtualBoard(board)
//             // make a move in cell
//             virtualBoard.makeMove(cell)
//             // call minimax recursively
//             best = Math.max(best, minimax(virtualBoard, depth +1, !isMax))
//             // and choose max value
//             // undo the move
//             virtualBoard.undoMove(virtualBoard)

//         })
//         return best
//     }

//     // if this minimizers turn
//     else {
//         let best = 1000

//         // check all cells 
//         // if cell is empty
//         board.availableCells.forEach( cell => {
//             // create virtual board to get value of play
//             const virtualBoard = CreateVirtualBoard(board)
//             // make a move in cell
//             virtualBoard.makeMove(cell)

//                 // call minimax recursively
//                 // and choose max value
//                 best = Math.min(best, minimax(virtualBoard, depth +1, !isMax))
//                 // undo the move
//                 virtualBoard.undoMove(virtualBoard)
//         })
//     return best
//     }
// }

// function findBestMove(board){
//     let bestVal = -1000
//     // let bestMove = new move
//     let bestMove

//     // check all cells, evaluate 
//     // minimax function for all empty
//     // cells. Return the cell
//     // with optimal value
    
//     // check all cells
//     // if cell is empty
//     board.availableCells.forEach( cell => {
//             const virtualState = CreateVirtualBoard(board)
//             // make a move in cell
//             virtualState.makeMove(cell)
            
//             // compute evaluate func for this move
//             let moveVal = minimax(virtualState, 0, false)
    
//             // undo the move 
//             // hopefully the old state gets garbaage collected 

//             virtualState.players = board.players
    
//             // If the value of the current move
//             // is more than the best value, then
//             // update best 
//             if (moveVal > bestVal){
//                 bestMove = cell
//                 bestVal = moveVal
//             }
//         });
//         return bestMove
// }

export function findBestMove(board){
    
    let bestMove = null
    let bestVal = -1000

    // for each available cell
    for (let i = 0; i < 9; i++){
        if (board.cells[i] === null){

            // make a move
            board.updateCellChoice(i+1)

            // Get value of this cell after playing it
            let moveVal = minimax(board, 3, board.currentPlayer === playerOne)

            console.log(moveVal)
            board.undoMove(i)

            if (moveVal > bestVal){
                bestMove = i
                bestVal = moveVal
            }
        }
    }
    console.log(bestMove)
    return bestMove
}

function minimax(board, depth, isMaximizer) {
    // check if board is terminal and return result if it is
    if (board.currentPlayer.playerName === playerOne ) {
        if (CONSTS.WINNING_CELLS.some ((board.isWinner), board)){
            return 10
        }
    }

    if (board.currentPlayer.playerName === playerTwo ) {
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
        // board.availableCells.forEach( (cell) => {
        //     // create virtualboard 
            

        //     let value = minimax(board, depth, false)

        //     board.undoMove(i)

        //     bestVal = Math.max(value, bestVal)
        // })

    } else {

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