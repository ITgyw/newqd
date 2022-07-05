import { memo } from 'react'
import { BannersWrapper } from './style'
import { useEffect } from 'react'
import Swiper from 'swiper'
import { NavLink } from 'react-router-dom'

function Banners({ bannerList }) {
    useEffect(() => {
        new Swiper('.btn-banners', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.swiper-pagination'
            }

        })
    })
    return (
        <BannersWrapper>
            <div className="btn-banners swiper-container">
                <div className="swiper-wrapper" >
                    {bannerList.map(item =>
                    (
                        <div className="swiper-slide" key={item.id}>
                            <NavLink
                                to="/eleme/all"
                                className="swiper-item"
                            >
                                <img src={item.img} alt="" width="100%" />
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination">
                </div>
                <div className="swiper-pagination-bullet-active"></div>
            </div>
        </BannersWrapper>
    )
}

export default memo(Banners)