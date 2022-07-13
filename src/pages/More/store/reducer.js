import * as actionTypes from './constants'
const defaultState = {
    moreList: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MORE:
            return {
                ...state,
                moreList: action.data
            }
        default:
            return state
    }
}