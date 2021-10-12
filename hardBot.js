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

// check if there are moves remaining on the board
function isMovesLeft(board){
    // return true if there are 
    // else return false if there are no moves left
}

function evaluate(board){
    // check for X or O victory
        // return +10 if there is a win for X
        // else return -10 for O win

    // if no wins then return 0
}

function minimax(board, depth, isMax) {
    // gets the score of the current board
    let score = evaluate(board)

    // If the maximizer has won, 
    // return their evaluated score
    if (score === 10) return score
    

    // If the minimizer has won, 
    // return their evaluated score
    if (score === -10) return score
    
    // check if it's a tie
    if (isMovesLeft(board) == false) return 0

    if (isMax) {
        let best = -1000

        // check all cells 
            // if cell is empty
                // make a move in cell
                // call minimax recursively
                // and choose max value
                best = Math.max(best, minimax(board, depth +1, !isMax))
                // undo the move
                return best
    }

    // if this minimizers turn
    else {
        let best = 1000

        // check all cells 
            // if cell is empty
                // make a move in cell
                // call minimax recursively
                // and choose max value
                best = Math.min(best, minimax(board, depth +1, !isMax))
                // undo the move
                return best
    }
}

function findBestMove(board){
    let bestVal = -1000
    // let bestMove = new move
    // bestMove = cell

    // check all cells, evaluate 
    // minimax function for all empty
    // cells. Return the cell
    // with optimal value
    
    // check all cells
        // if cell is empty
            // make a move in cell
            // compute evaluate func for this move
            let moveVal = minimax(board, 0, false)

            // undo the move 

            // If the value of the current move
            // is more than the best value, then
            // update best 
            if (moveVal > bestVal){
                bestMove = cell
                bestVal = moveVal
            }
            return bestMove
}

