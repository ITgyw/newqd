import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import Banners from "./Banners"
import { Wrapper } from './style'

function Male(props) {
    const { bannerList } = props
    const { getBannerDataDispatch } = props

    useEffect(() => {
        console.log('?????????????????')
        getBannerDataDispatch();
    }, [])
    return (
        <Wrapper>
            <Banners bannerList={bannerList} />
        </Wrapper>
    )
}

// state 状态树
const mapStateToProps = (state) => {
    return {
        bannerList: state.male.bannerList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionCreators.getBannerList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Male)