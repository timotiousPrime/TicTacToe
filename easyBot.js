// A completely Random player

function getRandomRemainingCell(state) {
    const range = state.availableCells.length
    return Math.floor(Math.random() * range +1)
}

