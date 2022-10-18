import * as actionTypes from './constants'
const defaultState = {
    moreList: [],
    moreList2: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MORE:
            return {
                ...state,
                moreList: action.data,
                moreList2: action.data.map(item => item.contain).flat(),
            }
        case actionTypes.SET_ISBOOKSHEFT:
            let list = state.moreList2;

            list.filter(item =>
                (item.id == action.data)
            ).map(item2 => {
                item2.isBook = true

            }
            )

            return {
                ...state,
                moreList2: list

            }
        case actionTypes.CHANGE_BOOKSHELF:
            let list2 = state.moreList2;

            list2.filter(item =>
                (item.id == action.data)
            ).map(item2 => {
                item2.isBook = false
                // console.log(item2.isBook);

            }
            )

            return {
                ...state,
                moreList2: list2

            }
        default:
            return state
    }
}