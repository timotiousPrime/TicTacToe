import { gameBoard } from "./gameBoard.js"
import { getCellClicked, getPlayerOne } from "./eventhandlers.js"


const player = (isHuman, token) => {
    let totalWins = 0
    let canPlay = false
    let cellsUsed = []
    return { isHuman, token, totalWins, canPlay, cellsUsed }
}

getCellClicked()

getPlayerOne()