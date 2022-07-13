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
                console.log(data, "更多数据表");
                dispatch(changeMoreList(data));
            })
    }
}