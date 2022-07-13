import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { useParams, Link, NavLink } from 'react-router-dom'
import Scroll from '@/components/common/Scroll'
import { forceCheck } from 'react-lazyload'
import { Wrapper } from './style'


function More(props) {
    const { moreList } = props
    const { getMoreDataDispatch } = props
    let { id } = useParams();

    useEffect(() => {
        getMoreDataDispatch();
    }, [])

    const renderInfo = (moreList) => {

        const res = moreList.filter(
            (item) =>
                // 外层不能加{}，对象包对象筛不出来
                item.id == id
        );
        // console.log(res, '77777777777');
        const renderBtnBannersPage = () => {
            return res[0].contain.map(item => {
                return (
                    <li key={item.id}>
                        <NavLink
                            to="/eleme/all"
                            key={item.id}
                        >
                            <div className="item">
                                <p><img src={item.img} /></p>
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
                            <Link to='/select/male'>
                                <i className='iconfont icon-fanhui' ></i>
                            </Link>
                        </div>
                        <h2 className="title">{item.title}</h2>
                    </div>
                    <div className="bar">
                        <div className="icon1">
                            <i className='iconfont icon-suosou'></i>
                        </div>
                        <div className="icon2">
                            <i className='iconfont icon-gengduo1'></i>
                        </div>
                    </div>

                </div>
                <ol className="book">
                    {renderBtnBannersPage()}
                </ol>
            </div>
        ))

    }


    return (
        <Wrapper>
            {renderInfo(moreList)}
        </Wrapper>
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
export default connect(mapStateToProps, mapDispatchToProps)(More)
