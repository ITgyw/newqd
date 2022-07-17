import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { useParams, Link, NavLink, useNavigate } from 'react-router-dom'
import Scroll from '@/components/common/Scroll'
import { forceCheck } from 'react-lazyload'
import LazyLoad from 'react-lazyload'
import { Wrapper } from './style'
import book from '@/assets/images/book.png'
import { CSSTransition } from 'react-transition-group'

function More(props) {
    const navigate = useNavigate()
    const { moreList } = props
    const { getMoreDataDispatch } = props
    const [show, setShow] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        setShow(true),
            getMoreDataDispatch();
    }, [])

    const renderInfo = (moreList) => {

        const res = moreList.filter(
            (item) =>
                // 外层不能加{}，对象包对象筛不出来
                item.id == id
        );
        console.log(res, '77777777777');
        const renderBtnBannersPage = () => {
            return res[0].contain.map(item => {
                return (
                    <li key={item.id}>
                        <NavLink
                            to="/eleme/all"
                            key={item.id}
                        >
                            <div className="item" onScroll={forceCheck}>
                                <LazyLoad className='lazy'
                                    placeholder={<img width="100%"
                                        height="100%" src={book} />}>
                                    <img
                                        width="100%"
                                        height="100%"
                                        src={item.img + "?param=300x200"} alt="" />
                                </LazyLoad>
                                <div className="content">
                                    <p className='title'>{item.title}</p>
                                    <p className='text'> {item.content}</p>
                                    <div className="label">
                                        <p className='mear'>{item.mear}</p>
                                        <p className='type'>{item.type}</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                )
            })
        }

        return res.map((item) => (
            <div className="module" key={item.id}>
                <div className="module-header">
                    <div className="nav">
                        <div className="icon">
                            <div className='back' onClick={() => setShow(false)}>
                                <i className='iconfont icon-fanhui' ></i>
                            </div>
                        </div>
                        <h2 className="title">{item.title}</h2>
                    </div>
                    <div className="bar">
                        <div className="icon1">
                            <Link className='iconfont icon-sousuo' to={'/search'}></Link>
                        </div>
                        <div className="icon2">
                            <i className='iconfont icon-gengduo2'></i>
                        </div>
                    </div>
                </div>
                <ol className="book">
                    <Scroll onScroll={forceCheck}>
                        {renderBtnBannersPage()}
                    </Scroll>
                </ol>
            </div>
        ))

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
            <Wrapper>
                {renderInfo(moreList)}
            </Wrapper>
        </CSSTransition>
    )
}

// state 状态树
const mapStateToProps = (state) => {
    return {
        moreList: state.more.moreList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreDataDispatch() {

            dispatch(actionCreators.getMoreList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(More))
