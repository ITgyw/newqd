import { combineReducers } from "redux";
// store中央
// 地方
import { reducer as maleReducer } from '@/pages/Select/Male/store/index'//as取名

export default combineReducers({
    male: maleReducer

})
