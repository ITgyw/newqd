import { getBannerRequest } from "@/api/request"
import * as actionTypes from './constants'

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: data
})
// api请求一定放在action中
export const getBannerList = () => {

    return (dispatch) => {
        getBannerRequest()
            .then(data => {
                const action = changeBannerList(data);
                console.log(data);
                dispatch(action)
            })
    }
}

