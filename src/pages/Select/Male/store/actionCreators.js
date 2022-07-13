import { getBannerRequest, getNavbarsRequest, getBestsellersRequest, getRecommendRequest } from "@/api/request"
import * as actionTypes from './constants'

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: data
})

export const changNavbarsList = (data) => ({
    type: actionTypes.CHANGE_NAVBAR,
    data: data
})

export const changeBestsellersList = (data) => ({
    type: actionTypes.CHANGE_BESTSELLER,
    data: data
})
export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMNED,
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
export const getNavbarsList = () => {
    return (dispatch) => {
        getNavbarsRequest()
            .then(data => {
                const action = changNavbarsList(data);
                console.log(data, '/////');
                dispatch(action)
            })
    }
}

export const getBestsellersList = () => {
    return (dispatch) => {
        getBestsellersRequest()
            .then(data => {
                const action = changeBestsellersList(data);
                console.log(data, '||||||')
                dispatch(action)
            })
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendRequest()
            .then(data => {
                const action = changeRecommendList(data);
                console.log(data, '---------')
                dispatch(action)
            })
    }
}

// export const changeEnterLoading = (data) => ({
//     type: actionTypes.CHANGE_ENTER_LOADING,
//     data
// })