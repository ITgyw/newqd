import { getHistoryRequest, getFoundRequest, getHotRequest, getPopularRequest } from '@/api/request'
import * as actionTypes from './constants'

export const changeHistoryList = (data) => ({
    type: actionTypes.CHANGE_HISTORY,
    data: data
})
export const changeFoundList = (data) => ({
    type: actionTypes.CHANGE_FOUND,
    data: data
})
export const changeHotList = (data) => ({
    type: actionTypes.CHANGE_HOT,
    data: data
})
export const chnagePopularList = (data) => ({
    type: actionTypes.CHANGE_POPULAR,
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

export const getHotList = () => {
    return (dispatch) => {
        getHotRequest()
            .then(data => {
                console.log(data, '热搜榜单')
                dispatch(changeHotList(data))
            })
    }
}
export const getPopularList = () => {
    return (dispatch) => {
        getPopularRequest()
            .then(data => {
                console.log(data, '人气榜单')
                dispatch(chnagePopularList(data))
            })
    }
}