/*
    // console.log('is maxi: ', isMaximizer)
    // console.table(board.cells)
    // console.log('is maxi: ', isMaximizer)
    // console.log(maximizer)
    // console.log(minimizer)
    
    //     // check if board is terminal and return result if it is
    //     // console.log(board.currentPlayer)
    //     if ( board.isGameOver() ) {
    //         console.table(board.cells)

    //             if (board.gameMode === 'win'){
    //                 if (isMaximizer){
    //                     return 10
    //                 } else {
    //                     return -10
    //                 }
    //             } else if (board.gameMode === 'draw'){
    //                 return 0
    //             }
    //     }

    //     // if ( isPlayerWinner(minimizer) ) {
    //     //         return -10
    //     // }

    //     // if (isGameDraw(board)) {
    //     //     console.log('the game is a draw: ', isGameDraw(board))
    //     //     return 0
    //     // }

    //                 nextPlayersTurn(board)

    //     if ( isMaximizer ) {
    //         let bestVal = -Infinity

    //         for (let i = 0; i < 9; i++){
    //             if (board.cells[i] === null){
    //                 board.updateCellChoice(i + 1)
    //                 // nextPlayersTurn(board)
    //                 let value = minimax(board, depth, false, maximizer, minimizer)
    //                 board.undoMove(i)
    //                 bestVal = Math.max(value, bestVal)
    //                 // console.log('best val is ',bestVal)
    //             }
    //         }
    //         return bestVal
    //     } 
    //     else 
    //     {

    //         let bestVal = +Infinity
    //         for (let i = 0; i< board.cells.length; i++){
    //             if (board.cells[i] === null){
    //                 // Make move
    //                 board.updateCellChoice(i + 1)

    //                 // nextPlayersTurn(board)
    //                 // Get value from the move you just made
    //                 let value = minimax(board, depth, true, maximizer, minimizer)
    //                 // After you have the value, undo the move
    //                 board.undoMove(i)
    //                 // Get the smallest value 
    //                 bestVal = Math.min(value, bestVal)
    //             }

    //         }
    //         return bestVal
    //     }
*/