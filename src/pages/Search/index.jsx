import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'

const Search = (props) => {
    const { searchList } = props
    const { getSearchDataDispatch } = props
    useEffect(() => {
        getSearchDataDispatch();
        // console.log(searchList, '11111111');
    }, [])

    const Info = (searchList) => {
        let history = searchList.history;
        let found = searchList.found;
        console.log(history, found)
        return (
            <div>
                <ul>
                    <div className='header'>
                        <h2>搜索历史</h2>
                        <div className="icon">
                            <i className="iconfont icon-24gl-trash"></i>
                        </div>
                    </div>
                    {
                        history.map((item) => {
                            return (
                                <li
                                    className='item'
                                    key={item.id}
                                >
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                    <div className='header'>
                        <h2>搜索发现</h2>
                        <div className="icon">
                            <i className="iconfont icon-shuaxin"></i>
                        </div>
                    </div>
                    {
                        found.map((item) => {
                            return (
                                <li
                                    className='item'
                                    key={item.id}
                                >
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )

    }

    return (
        <div>

            {Info(searchList)}
        </div>
    )
}
// state 状态树
const mapStateToProps = (state) => {
    return {
        searchList: state.search.searchList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSearchDataDispatch() {
            dispatch(actionCreators.getSearchList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
