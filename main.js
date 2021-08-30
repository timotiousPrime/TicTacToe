import { createPlayer } from './player.js'
import { logCell } from './eventhandlers.js'
import { logCellPlayed } from './stateMutators.js'

let PlayerOne = createPlayer('jim', null, true, null, true)

console.log(PlayerOne)

const gameBoard = {
    cellsUsed: [],
    cellsAvailable: [1,2,3,4,5,6,7,8,9] 
}

logCell(gameBoard)
console.table (gameBoard)