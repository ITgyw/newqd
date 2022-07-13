import React, { useEffect } from 'react'
import { Wrapper } from './style'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Swiper from 'swiper'

export default function Recommend({ recommendList }) {
    let swiper = null;
    useEffect(() => {
        if (swiper) { return }
        swiper = new Swiper('.swiper-container', {
            // observer: true,
            // observeParents: true,
            // freeMode: true,
        })
    }, [])

    const renderBtnBannersPage1 = () => {
        //let items = recommend.slice(0, 5)
        return recommendList.slice(0, 4).map(item => {
            return (

                <NavLink
                    to="/eleme/all"
                    key={item.id}
                    className="navlink"
                >
                    <div className="item ">
                        <p><img src={item.img} /></p>
                        <div className="content">
                            <p className='title'>{item.title}</p>
                            <p className='type'>{item.type}</p>
                        </div>

                    </div>
                </NavLink>

            )
        })
    }
    const renderBtnBannersPage2 = () => {
        //let items = recommend.slice(5)
        return recommendList.slice(4).map(item => {
            return (
                <NavLink
                    to="/eleme/all"
                    key={item.id}
                    className="navlink"
                >
                    <div className="item ">
                        <p><img src={item.img} /></p>
                        <div className="content">
                            <p className='title'>{item.title}</p>
                            <p className='type'>{item.type}</p>
                        </div>

                    </div>
                </NavLink>
            )
        })
    }
    return (
        <Wrapper>
            <div className="module">
                <div className="module-header">
                    <div className='nav'>
                        <h2>编辑推荐</h2>
                        <NavLink className='icon' to="/more/1315" >
                            <h2>更多</h2>
                            <div >
                                <i className='iconfont icon-gengduo'></i>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className='swiper-container'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {renderBtnBannersPage1()}
                        </div>
                        <div className="swiper-slide box">
                            {renderBtnBannersPage2()}
                        </div>
                    </div>
                </div>
                {/* <div className="swiper-scrollbar"></div> */}
            </div>
        </Wrapper>
    )
}

Recommend.propTypes = {
    recommendList: propTypes.array.isRequired
}