function createPlayer(name, token, canPlay, isWinner) {
    let winCount = 0
    return {
        name,
        token,
        canPlay,
        winCount: (isWinner) => {
            isWinner ? ++winCount : winCount
            return winCount
        }
    }
}

const gameBoard = {
    cellsUsed: {},
    cellsAvailable: {},
}

