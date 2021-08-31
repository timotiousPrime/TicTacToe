export function createPlayer(isHuman, token, canPlay, cellsPlayed) {
    let winCount = 0
    return {
        isHuman,
        token,
        canPlay,
        cellsPlayed,
        winCount,
        }
    }
