// An impossible to defeat player
// Using mini max algo
import { currentBoard } from "./newGameLogic.js"






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

