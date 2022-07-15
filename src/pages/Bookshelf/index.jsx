import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { Wrapper } from './style'

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
                        <div className='img'>
                            <img src={item.img} />
                        </div>
                        <div className="content">
                            <p className="title">{item.title} <i className='iconfont icon-gengduo'></i></p>
                            <p className='author'>{item.author}</p>
                            <p className="ell">{item.ell}</p>
                        </div>
                    </div>
                </li>
            )
        })
    }
    return (
        <Wrapper>
            <div className="header">
                <div>书架</div>
                <div className="Box">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" className='box'
                        placeholder='凡人修仙传'
                    />
                    <i
                        className="iconfont icon-delete"
                    >&#xe61d;</i>
                </div>
                <i className='iconfont icon-shizhong'></i>
                <button className='iconfont icon-gengduo'></button>
            </div>
            {bookInfo(bookList)}
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
export default connect(mapStateToProps, mapDispatchToProps)(Bookshelf)