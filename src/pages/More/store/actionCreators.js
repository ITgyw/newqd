import { getMoreRequest } from "@/api/request"
import * as actionTypes from './constants'

export const changeMoreList = (data) => ({
    type: actionTypes.CHANGE_MORE,
    data: data
})
export const getMoreList = () => {
    return (dispatch) => {
        getMoreRequest()
            .then(data => {
                // console.log(data, "更多数据表");
                dispatch(changeMoreList(data));

            })
    }
} 

export const setIsBooksheft = (data) => ({
    type: actionTypes.SET_ISBOOKSHEFT,
    data: data
})
export const getMoreListAction = (data) => {
    return (dispatch) => {
        dispatch(setIsBooksheft(data))
    }
}


export const changeBookList = (data) => ({
    type: actionTypes.CHANGE_BOOKSHELF,
    data: data
})

export const setBookListAction = (data) => {
    return (dispatch) => {
        dispatch(changeBookList(data))
    }
} 


 