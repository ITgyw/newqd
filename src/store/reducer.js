import { combineReducers } from "redux";
// store中央
// 地方
import {
    reducer as maleReducer,
} from '@/pages/Select/Male/store/index'//as取名
import {
    reducer as moreReducer
} from '@/pages/More/store/index'
import {
    reducer as searchReducer
} from '@/pages/Search/store/index'
// import {
//     reducer as bookReducer
// } from '@/pages/Bookshelf/store/index'

export default combineReducers({
    male: maleReducer,
    more: moreReducer,
    search: searchReducer,
    // book: bookReducer
})
