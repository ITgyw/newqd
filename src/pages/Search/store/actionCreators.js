import { getHistoryRequest, getFoundRequest } from '@/api/request'
import * as actionTypes from './constants'

export const changeHistoryList = (data) => ({
    type: actionTypes.CHANGE_HISTORY,
    data: data
})
export const changeFoundList = (data) => ({
    type: actionTypes.CHANGE_FOUND,
    data: data
})

export const getHistoryList = () => {
    return (dispatch) => {
        getHistoryRequest()
            .then(data => {
                console.log(data, '历史列表')
                dispatch(changeHistoryList(data))
            })
    }
}
export const getFoundList = () => {
    return (dispatch) => {
        getFoundRequest()
            .then(data => {
                console.log(data, '发现列表')
                dispatch(changeFoundList(data))
            })
    }
}