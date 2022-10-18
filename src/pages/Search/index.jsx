import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import { actionCreators } from "./store/index";
import { Wrapper, HistoryWrapper, FoundWrapper, ListWrapper,ShowWrapper } from './style'
import { Tabs } from 'antd-mobile'
import SearchBox from '@/components/common/search-box'
import { CSSTransition } from 'react-transition-group'
// import { DemoBlock } from 'demos'

function Search(props) {
    const navigate = useNavigate()
    const { historyList, foundList, hotList, popularList } = props
    const { getHistoryDataDispatch, getFoundDataDispatch, getHotDataDispatch, getPopularDataDispatch } = props
    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false);

    const searchBack = () => {
        setShow(false);
    }
    const handleQuery = (q) => {
        // console.log(q)
        setQuery(q)
    }
    useEffect(() => {
        setShow(true),
            getHistoryDataDispatch(),
            getFoundDataDispatch(),
            getHotDataDispatch(),
            getPopularDataDispatch()
    }, [])

    const Info = (historyList, foundList) => {
        // console.log(historyList, '11');
        // console.log(foundList, '22');
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
    const ListInfo = (hotList, popularList) => {
        const hotInfo = () => {
            return hotList.map((item) => {
                return (
                    <li
                        className='item'
                        key={item.id}
                    >
                        <div className="header">
                            <div className="left">
                                <div className="id">{item.id}</div>
                                <div>{item.title}</div>
                            </div>
                            <div className="right">
                                {item.hotvalue}
                            </div>

                        </div>
                        <p>{item.text}</p>
                    </li>
                )
            })
        }
        const tabInfo = () => {
            return popularList.map((item) => {
                return (
                    <li
                        className='item'
                        key={item.id}
                    >
                        <div className="header">
                            <div className="left">
                                <div className="id">{item.id}</div>
                                <div>{item.title}</div>
                            </div>
                            <div className="right">
                                {item.hotvalue}
                            </div>
                        </div>
                        <p>{item.text}</p>
                    </li>
                )
            })
        }
        return (
            <div title='自定义当前激活的下划线长度' padding='0'>
                <Tabs
                    defaultActiveKey='1'
                    activeLineMode='fixed'
                    style={{
                        '--fixed-active-line-width': '0px',
                        '--active-title-color': '#ed424b',
                    }}
                >
                    <Tabs.Tab title='热搜作品榜' key='1' className="hot">
                        {hotInfo()}
                    </Tabs.Tab>
                    <Tabs.Tab title='人气标签榜' key='2'>
                        {tabInfo()}
                    </Tabs.Tab>
                </Tabs>
            </div>
        )
    }
    return (
        <CSSTransition
            in={show}
            timeout={30000}
            appear={true}
            classNames="fly"
            unmountOnExit
            onExit={() => {
                navigate(-1)
            }}
        >
            <Wrapper >
                <div className="search_box_wrapper">
                    <SearchBox
                        back={searchBack}
                        newQuery={query}
                        handleQuery={handleQuery}>
                    </SearchBox>
                </div>
                <ShowWrapper show={!query}>
                    {Info(historyList, foundList)}
                    <ListWrapper>
                        {ListInfo(hotList, popularList)}
                    </ListWrapper>
                </ShowWrapper>                
            </Wrapper>
        </CSSTransition>
    )
}

const mapStateToProps = (state) => {
    return {
        historyList: state.search.historyList,
        foundList: state.search.foundList,
        hotList: state.search.hotList,
        popularList: state.search.popularList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHistoryDataDispatch() {
            dispatch(actionCreators.getHistoryList())
        },
        getFoundDataDispatch() {
            dispatch(actionCreators.getFoundList())
        },
        getHotDataDispatch() {
            dispatch(actionCreators.getHotList())
        },
        getPopularDataDispatch() {
            dispatch(actionCreators.getPopularList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))