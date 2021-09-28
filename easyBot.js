// A completely Random player

export function getRandomRemainingCellIndex(state) {
    const range = state.availableCells.length
    return Math.floor(Math.random() * range -1 )
}

export function getAiChoice(state){
    const randomCellIndex = getRandomRemainingCellIndex(state)
    const cellValue = state.availableCells[randomCellIndex]
    const cell = document.getElementById(`cell${cellValue}`)
    
    // cellById.classList.add(state.playersTurn.token)
    console.log('choice has been made')
    console.log(randomCellIndex)
    console.log(cellValue)
    console.log(cell)
    return cell
}

