export function createPlayer(name, token, canPlay, cellsPlayed) {
    let winCount = 0
    return {
        name,
        token,
        canPlay,
        cellsPlayed,
        winCount,
        }
    }
