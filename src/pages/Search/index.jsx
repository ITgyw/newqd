import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { actionCreators } from "./store/index";
import { Wrapper, HistoryWrapper, FoundWrapper } from './style'
function Search(props) {
    const { historyList, foundList } = props
    const { getHistoryDataDispatch, getFoundDataDispatch } = props
    useEffect(() => {
        getHistoryDataDispatch(),
            getFoundDataDispatch()
    }, [])

    const Info = (historyList, foundList) => {
        console.log(historyList, '11');
        console.log(foundList, '22');
        const historyInfo = () => {
            return historyList.map((item) => {
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
        const foundInfo = () => {
            return foundList.map((item) => {
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
        return (
            <div>
                <HistoryWrapper>
                    <div className='header'>
                        <h2>搜索历史</h2>
                        <div className="icon">
                            <i className="iconfont icon-24gl-trash"></i>
                        </div>
                    </div>
                    <ul className="history">
                        {historyInfo()}
                    </ul>
                </HistoryWrapper>
                <FoundWrapper>
                    <div className='header'>
                        <h2>搜索发现</h2>
                        <div className="icon">
                            <i className="iconfont icon-shuaxin"></i>
                        </div>
                    </div>
                    <ul className="found">
                        {foundInfo()}
                    </ul>
                </FoundWrapper>
            </div>
        )
    }
    return (

        <Wrapper>
            <div className="SearchBox">
                <div className="Box">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" className='box'
                        placeholder='凡人修仙传'
                    />
                    <i
                        className="iconfont icon-delete"
                    >&#xe61d;</i>
                </div>
                <Link className="back" to='/select/male'>取消</Link>
            </div>
            {Info(historyList, foundList)}
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        historyList: state.search.historyList,
        foundList: state.search.foundList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHistoryDataDispatch() {
            dispatch(actionCreators.getHistoryList())
        },
        getFoundDataDispatch() {
            dispatch(actionCreators.getFoundList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)