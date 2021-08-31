import { board } from "./gameBoard.js"

const player = (isHuman, token) => {
    let totalWins = 0
    let canPlay = false
    return { isHuman, token, totalWins, canPlay }
}

// const board = ( () => {
//     let availableCells = [1,2,3,4,5,6,7,8,9]
//     let cellsUsed = []
//     let playerOneCells = []
//     let playerTwoCells = []
//     const winningCells = [
//         [1,5,9],
//         [3,5,7],
//         [1,2,3],
//         [4,5,6],
//         [7,8,9],
//         [1,4,7],
//         [2,5,8],
//         [3,6,9],
//     ]

// })()