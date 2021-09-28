// A completely Random player

export function getRandomRemainingCellIndex(state) {
    const range = state.availableCells.length
    return Math.floor(Math.random() * range -1 )
}

export function setAiChoice(state){
    const randomCellIndex = getRandomRemainingCellIndex(state)
    const cell = state.availableCells[randomCellIndex]
    const cellById = document.getElementById(`cell${cell}`)
    
    cellById.classList.add(state.playersTurn.token)
    console.log('choice has been made')
}

