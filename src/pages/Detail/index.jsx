import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import { connect } from 'react-redux'
import { forceCheck } from 'react-lazyload'
import book from '@/assets/images/book.png'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Wrapper } from './style'
import { Button, Modal } from 'antd-mobile'
import { getMoreListAction } from '@/pages/More/store/actionCreators'
import { CSSTransition } from 'react-transition-group'

function Detail(props) {
    // const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { moreList2 } = props
    const { getMoreListDispatch } = props
    const navigate = useNavigate()
    const { pathname } = useLocation()
    let pathRes = pathname.split('/')[2]
    // 拿到更多页面的数据
    // let dataList =moreList[0].contain 
    useEffect(() => {
        setShow(true);
    }, [])

    // 判断是否可加入书架
    const ifAdd = () => {
        // if(data.isBook) {
        setDisabled(true)
        // }
    }
    const renderInfo = (moreList2) => {
        const res = moreList2.filter(
            (item) =>
                item.id == pathRes
        )
        // console.log(res,'该页面数据');
        return res.map((item) => (
            <div className='module' key={item.id}>
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
                    <div className="item" onScroll={forceCheck} >
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
                            <div className="label">
                                <p className='mear'>{item.mear}</p>
                                <p className='type'>{item.type}</p>
                            </div>
                        </div>     
                    </div>  
                    <p className='text'> {item.content}</p>           
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
                <div className='body'>{renderInfo(moreList2)}</div>
                <div className="footer">
                    <div className='button'>
                        <Button
                            block
                            onClick={() => {
                                setVisible(true)
                                getMoreListDispatch(pathRes)
                                ifAdd()
                            }}
                            disabled={disabled}
                        >
                            加书架
                        </Button>
                        <Modal
                            visible={visible}
                            content='加入书架成功！'
                            closeOnAction
                            afterShow={() => {
                                setTimeout(() => {
                                    setVisible(false)
                                }, 1000)
                            }}

                        />
                    </div>
                    <div className=''>
                        <span className='reading'>
                            免费试读
                        </span>
                        <div className='booksheft'>
                            <Link to="/bookshelf">
                                书架
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </Wrapper>
        </CSSTransition>
    )
}

const mapStateToProps = (state) => {
    return {
        moreList2: state.more.moreList2
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMoreListDispatch(data) {
            dispatch(getMoreListAction(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Detail))
