import actionType from '../actions/actionTypes'

const initState = [{
    id: Math.random(),
    title: "Apple",
    price: 88.8,
    amount: 8
}, {
    id: Math.random(),
    title: "HuaWei",
    price: 98.8,
    amount: 10
}]

export default (state = initState, action) => {
    console.log("card reducer",state,action)
    switch (action.type) {
        case actionType.CARD_AMOUNT_INC:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount += 1
                }
                return item
            })
        case actionType.CARD_AMOUNT_DEC:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount -= 1
                }
                return item
            })
        default:
            return state
    }
}