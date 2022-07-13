import { getSearchRequest } from '@/api/request'
import * as actionTypes from './constants'

export const changeSearchList = (data) => ({
    type: actionTypes.CHANGE_SEARCH,
    data: data
})

export const getSearchList = () => {
    return (dispatch) => {
        getSearchRequest()
            .then(data => {
                console.log(data, '搜索列表')
                dispatch(changeSearchList(data))
            })
    }
}