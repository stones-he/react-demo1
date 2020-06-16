import actionTypes from './actionTypes'
import {
    getBlogList
} from '../services'
const startFetchBlogList = () => {
    return {
        type: actionTypes.START_FETCH_BLOG_LIST,
    }
}

const fetchBlogListSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
        payload
    }
}

const fetchBlogListFail = () => {
    return {
        type: actionTypes.FETCH_BLOG_LIST_FAIL,
    }
}
export const fetchBlogList = () => (dispatch) => {
    dispatch(startFetchBlogList())
    getBlogList().then(resp => {
        if (resp.status === 200) {
            dispatch(fetchBlogListSuccess({
                listData: resp.data
            }))
        } else {
            dispatch(fetchBlogListFail())
        }
    }).catch(err => {
        console.log(err)
        dispatch(fetchBlogListFail())
    })
}