import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './store/index'
import { Wrapper, BookWrapper } from './style'



function Bookshelf(props) {
    const { bookList } = props
    const { getBookDataDispatch } = props
    useEffect(() => {
        getBookDataDispatch();
    }, [])
    const bookInfo = (bookList) => {
        return bookList.map(item => {
            return (
                <li key={item.id} >
                    <div className="item">
                        {/* <div className='img'> */}
                        <img src={item.img} />
                        {/* </div> */}
                        <div className="content">
                            <div className="title">
                                <div >{item.title}</div>
                                <div className='iconfont icon-gengduo'></div>
                            </div>
                            <div className='author'>{item.author}</div>
                            <div className="ell">{item.ell}</div>
                        </div>

                    </div>
                </li>
            )
        })
    }
    return (
        <Wrapper>
            <div className="header">
                <div className='header-title'>书架</div>
                <Link className="Box" to={'/search'}>
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" className='box'
                        placeholder='凡人修仙传'
                    />
                    <i
                        className="iconfont icon-delete"
                    >&#xe61d;</i>
                </Link>
                <div className='icon'>
                    <i className='iconfont icon-shizhong'></i>
                    <i className='iconfont icon-gengduo'></i>
                </div>

            </div>
            <BookWrapper>
                {bookInfo(bookList)}
            </BookWrapper>
        </Wrapper>
    )
}

// state 状态树
const mapStateToProps = (state) => {
    return {
        bookList: state.book.bookList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBookDataDispatch() {
            dispatch(actionCreators.getBookList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Bookshelf))