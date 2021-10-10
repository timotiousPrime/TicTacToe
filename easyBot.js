// A completely Random player

export function getRandomRemainingCellIndex(state) {
    const range = state.availableCells.length
    return Math.floor(Math.random() * range )
}

export function getEasyAiChoice(state){
    const randomCellIndex = getRandomRemainingCellIndex(state)
    const cellValue = state.availableCells[randomCellIndex]
    const cell = document.getElementById(`cell${cellValue}`)

    return cellValue
}

