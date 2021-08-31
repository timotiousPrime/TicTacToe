import { createPlayer } from './player.js'
import { logCell } from './eventhandlers.js'
import { checkForWins } from './constants.js'

let PlayerJim = createPlayer('jim', null, true, null, true)

console.log(PlayerJim)

const gameBoard = {
    cellsUsed: [],
    cellsAvailable: [1,2,3,4,5,6,7,8,9] 
}

logCell(gameBoard)
console.table (gameBoard)

checkForWins()