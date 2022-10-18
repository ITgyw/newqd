import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setBookListAction } from '@/pages/More/store/actionCreators'
import { Wrapper, BookWrapper } from './style'
const Bookshelf = (props) => {
    const { moreList2 } = props
    const { getBookDataDispatch } = props
    // console.log(moreList2);
    const [more, setMore] = useState([])
    // const [test,setTest]=useState(0)
    // const dataList = moreList[0].contain
    useEffect(() => {
        setMore(moreList2)
    }, [moreList2])

    const bookInfo = () => {
        return more
            .filter(item => item.isBook == true)
            .map(item2 => {
                return (
                    <li key={item2.id} >
                        <div className="item">
                            {/* <div className='img'> */}
                            <img src={item2.img} />
                            {/* </div> */}
                            <div className="content">
                                <div className="title">
                                    <div >{item2.title}</div>
                                    <button 
                                        className='iconfont icon-24gl-trash'
                                        onClick={
                                            async() => {

                                                 getBookDataDispatch(item2.id)
                                                // setMore(moreList2)
                                                setMore(more=>more.filter(item=>item.id!=item2.id))
                                                
                                            }

                                        }
                                    >
                                       
                                    </button>
                                </div>
                                <div className='author'>{item2.mear}</div>
                                <div className="ell">{item2.type}</div>
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

                </Link>
                <div className='icon'>
                    <i className='iconfont icon-shizhong'></i>
                    <i className='iconfont icon-gengduo'></i>
                </div>

            </div>
            <BookWrapper>   
                {bookInfo()}
                {/* <button onClick={()=>{setMore([])}}>2</button>  */}
            </BookWrapper>
        </Wrapper>
    )
}

// state 状态树
const mapStateToProps = (state) => {
    return {
        moreList2: state.more.moreList2
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBookDataDispatch(id) {
            dispatch(setBookListAction(id))
            // console.log('//////');
        }
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getBookDataDispatch() {
//             dispatch(actionCreators.getBookList())
//         }
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Bookshelf)