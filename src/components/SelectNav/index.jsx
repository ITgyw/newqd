import React from 'react'
import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './style'

export default function SelectNav() {

    let selectNavs = [
        { id: 1, desc: '男生', path: '/male' },
        { id: 2, desc: '女生', path: '/female' }
    ]
    return (
        <Wrapper>
            <header className='header header-index'>
                <div className='logo-h'>
                    <h2 className='logo'>起点中文网</h2>
                </div>
                <div className="btn-group btn-group-smallr">

                    {
                        selectNavs.map((item, index) => {
                            return (
                                <NavLink
                                    index={index}
                                    to={`/select${item.path}`}
                                    key={item.id}
                                >
                                    {item.desc}
                                </NavLink>
                            )
                        })
                    }

                </div>
                <p className='search red' >
                    <NavLink className='iconfont icon-sousuo' to={'/search'}></NavLink>
                </p>
            </header>

        </Wrapper >
    )
}

SelectNav.propTyes = {
    id: propTyes.string.isRequired
}