import actionTypes from './actionTypes'

///
// actioin creator
///
export const incAmount = (id) => {
    return {
        type: actionTypes.CARD_AMOUNT_INC,
        payload: {
            id
        }
    }
}
export const incAmountAsync = id => dispatch => {
    setTimeout(() => {
        dispatch(incAmount(id))
    }, 1000)
}

export const decAmount = (id) => {
    return {
        type: actionTypes.CARD_AMOUNT_DEC,
        payload: {
            id
        }
    }
}
// 实现异步action,使用redux-thunk之后 ，
// 可以在actionCreator里return 一个方法，这个方法的参数是dispatch
export const decAmountAsync = (id) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(decAmount(id))
        }, 2000)
    }
}