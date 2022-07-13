import React from 'react'
import { NavSwrapper } from './style'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbars({ navbarsList }) {

    const renderBtnBannersPage1 = () => {
        // console.log(navbars)
        return navbarsList.map(item => {
            return (
                <NavLink
                    to="/eleme/all"
                    key={item.id}
                >
                    <div className="box">
                        <img src={item.img} />
                        <h4>
                            {item.title}
                        </h4>
                    </div>
                </NavLink>
            )
        })
    }
    return (
        <NavSwrapper>
            <div className="nav">
                <div className="nav-item">
                    {renderBtnBannersPage1()}
                </div>
            </div>
        </NavSwrapper>
    )
}

Navbars.propTypes = {
    navbarsList: propTypes.array.isRequired
}


