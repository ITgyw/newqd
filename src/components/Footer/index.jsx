import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import { isPathPartlyExisted } from '../../utils'

export default function Footer() {
    const { pathname } = useLocation()
    if (isPathPartlyExisted(pathname)) return
    return (
        <FooterWrapper>
            <NavLink to="/bookshelf" >
                <i className="iconfont icon-shu"></i>
                <span>书架</span>
            </NavLink>
            <NavLink to="/select" >
                <i className="iconfont icon-jingxuan-"></i>
                <span>精选</span>
            </NavLink>
            <NavLink to="/find" >
                <i className="iconfont icon-faxian"></i>
                <span>发现</span>
            </NavLink>
            <NavLink to="/mine" >
                <i className="iconfont icon-wo"></i>
                <span>我</span>
            </NavLink>
        </FooterWrapper>
    )
}
