import actionTypes from '../actions/actionTypes'

const blogState = {
    listData: [],
    isLoading: false
}
export default (state = blogState, action) => {
    switch (action.type) {
        case actionTypes.START_FETCH_BLOG_LIST:
            return {
                ...state,
                isLoading: true,
                type:action.type
            }
        case actionTypes.FETCH_BLOG_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listData: action.payload.listData,
                type:action.type
            }
        case actionTypes.FETCH_BLOG_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
                type:action.type
            }
        default:
            return state
    }
}