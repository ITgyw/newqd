import * as actionTypes from './constants'
const defaultState = {
    bannerList: [],
    navbarsList: [],
    bestsellersList: [],
    recommendList: [],
    enterLoading: true
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return {
                ...state,
                bannerList: action.data
            }
        case actionTypes.CHANGE_NAVBAR:
            return {
                ...state,
                navbarsList: action.data
            }
        case actionTypes.CHANGE_BESTSELLER:
            return {
                ...state,
                bestsellersList: action.data
            }
        case actionTypes.CHANGE_RECOMMNED:
            return {
                ...state,
                recommendList: action.data
            }
        // case actionTypes.CHANGE_ENTER_LOADING:
        //     return {
        //         ...state,
        //         enterLoading: action.data
        //     }
        default:
            return state
    }
    // return defaultState
}