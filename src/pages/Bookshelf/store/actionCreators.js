import { getBookshelfRequest } from '@/api/request'
import * as actionTypes from './constants'

export const changebookList = (data) => ({
    type: actionTypes.CHANGE_BOOK,
    data: data
})

export const getBookList = () => {
    return (dispatch) => {
        getBookshelfRequest()
            .then(data => {
                console.log(data, '书架数据');
                dispatch(changebookList(data));
            })
    }
}