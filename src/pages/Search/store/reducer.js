import * as actionTypes from './constants'
const defaultState = {
    historyList: [],
    foundList: [],
    hotList: [],
    popularList: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HISTORY:
            return {
                ...state,
                historyList: action.data
            }
        case actionTypes.CHANGE_FOUND:
            return {
                ...state,
                foundList: action.data
            }
        case actionTypes.CHANGE_HOT:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.CHANGE_POPULAR:
            return {
                ...state,
                popularList: action.data
            }
        default:
            return state
    }
}