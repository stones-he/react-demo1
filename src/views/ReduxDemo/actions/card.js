import actionTypes from './actionTypes'

///
// actioin creator
///
export const incAmount= (id) => {
    return {
        type: actionTypes.CARD_AMOUNT_INC,
        payload: {
            id
        }
    }
}

export const decAmount= (id) => {
    return {
        type: actionTypes.CARD_AMOUNT_DEC,
        payload: {
            id
        }
    }
}