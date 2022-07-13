import * as actionTypes from './constants'
const defaultState = {
    searchList: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH:
            return {
                ...state,
                searchList: action.data
            }
        default:
            return state
    }
}