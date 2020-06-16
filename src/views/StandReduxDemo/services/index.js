import axios from 'axios'
import apis from '../../../services/apis'

const ajax = axios.create({
    baseURL: apis.baseURL
})


export const getBlogList = () => {
    return ajax.get("posts")
}