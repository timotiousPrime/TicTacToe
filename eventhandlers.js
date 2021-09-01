import { EL_IDS } from './constants.js'

export function getCellClicked(){
    let BOARD_CELLS = document.querySelectorAll('.boardCell')

    BOARD_CELLS = Array.from(BOARD_CELLS)

    BOARD_CELLS.forEach( cell => { 
        cell.addEventListener('click', console.log('you clicked something'))
    })

}