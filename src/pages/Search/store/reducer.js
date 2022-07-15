import * as actionTypes from './constants'
const defaultState = {
    historyList: [],
    foundList: []
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
        default:
            return state
    }
}