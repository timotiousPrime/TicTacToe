// An impossible to defeat player
// Using mini max algo
import { CreateNewBoard } from "./constants.js"
import { currentBoard, updatePlayersMove } from "./newGameLogic.js"


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

export function getHardAiChoice(state){
    // const randomCellIndex = getRandomRemainingCellIndex(state)
    // const cellValue = state.availableCells[randomCellIndex]
    // const cell = document.getElementById(`cell${cellValue}`)
    
    // // cellById.classList.add(state.playersTurn.token)
    // console.log('choice has been made')
    // console.log(randomCellIndex)
    // console.log(cellValue)
    // console.log(cell)
    return findBestMove(state)
}

// check if there are moves remaining on the board
function isMovesLeft(board){
    // return true if there are 
    return board.availableCells.length > 0 ?
    true :
    // else return false if there are no moves left
    false
}

function evaluate(board){
    // check for X or O victory
    if (board.players.playerOne.isWinner){
        // return +10 if there is a win for X
        return 10
    } else if (board.players.playerTwo.isWinner){
        // else return -10 for O win
        return -10
        // if no wins then return 0
    } else if (board.gameMode === 'game-draw'){
        return 0
    }
}

function minimax(board, depth, isMax) {
    // Create an image of the existing board to test on
    let newBoard = {
        ...board
    }

    // gets the score of the current board
    let score = evaluate(newBoard)

    // If the maximizer has won, 
    // return their evaluated score
    if (score === 10) return score
    

    // If the minimizer has won, 
    // return their evaluated score
    if (score === -10) return score
    
    // check if it's a tie
    if (newBoard.availableCells < 1) return 0

    if (isMax) {
        let best = -1000

        // check all cells 
        newBoard.availableCells.forEach( cell => {
            // generate a virtual board to see the value of the play
            let tempCellState = {
                ...newBoard
            }
            // make a move in cell
            updatePlayersMove(tempCellState, cell)
            // call minimax recursively
            best = Math.max(best, minimax(tempCellState, depth +1, !isMax))
            // and choose max value
            // if cell is empty
            // undo the move
            tempCellState = {
                ...newBoard
            }
        })
        return best
    }

    // if this minimizers turn
    else {
        let best = 1000

        // check all cells 
        newBoard.availableCells.forEach( cell => {
            // create virtual board to get value of play
            let tempCellState = {
                ...newBoard
            }
            // if cell is empty
            // make a move in cell
                updatePlayersMove(tempCellState, cell)
                // call minimax recursively
                // and choose max value
                best = Math.min(best, minimax(newBoard, depth +1, !isMax))
                // undo the move
                tempCellState = {
                    ...newBoard
                }

        })
    return best
    }
}

function findBestMove(board){
    const newState = CreateNewBoard()
    newState.availableCells = board.availableCells
    newState.cellsUsed = board.cellsUsed
    newState.playersTurnAtBoard = board.playersTurnAtBoard
    newState.gameMode = board.gameMode
    console.log(newState)
    newState.sayHello()
    let bestVal = -1000
    // let bestMove = new move
    // bestMove = cell

    // check all cells, evaluate 
    // minimax function for all empty
    // cells. Return the cell
    // with optimal value
    
    // check all cells
        // if cell is empty
        newState.availableCells.forEach( cell => {

            let cellState = {
                ...newState
            }
            // make a move in cell
            updatePlayersMove(cellState, cell)
            
            // compute evaluate func for this move
            let moveVal = minimax(cellState, 0, false)
    
            // undo the move 
            // hopefully the old state gets garbaage collected 
            cellState = {
                ...newState
            }

            cellState.playersTurnAtBoard.cellsUsed.splice(cell, 1)
    
            // If the value of the current move
            // is more than the best value, then
            // update best 
            if (moveVal > bestVal){
                bestMove = cell
                bestVal = moveVal
            }
        });
        return bestMove
}

