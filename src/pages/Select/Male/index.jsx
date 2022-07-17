import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import Banners from "@/components/Banners"
import Navbars from "@/components/Navbars"
import Bestsellers from "@/components/Bestsellers"
import Recommend from "@/components/Recommend"
import Scroll from '@/components/common/Scroll'
import { forceCheck } from 'react-lazyload'
import { Wrapper } from './style'
import { getMoreList } from "@/pages/More/store/actioncreators"
// import { EnterLoading } from './style'
// import Loading from '@/components/common/loading-v2/index'

function Male(props) {
    const {
        bannerList,
        navbarsList,
        bestsellersList,
        recommendList,
        moreList
        // enterLoading
    } = props
    const {
        getBannerDataDispatch,
        getNavbarsDataDispatch,
        getBestsellersDataDispatch,
        getRecommendDataDispatch
    } = props

    useEffect(() => {
        console.log('?????????????????')
        getBannerDataDispatch();
        getNavbarsDataDispatch();
        getBestsellersDataDispatch();
        getRecommendDataDispatch();
    }, [])

    console.log(moreList, "++++++++++++++++++++++++");
    return (
        <Wrapper>
            <Scroll className="list" onScroll={forceCheck}>
                <Banners bannerList={bannerList} />
                <Navbars navbarsList={navbarsList} />
                <Bestsellers bestsellersList={bestsellersList} moreList={moreList} />
                <Recommend recommendList={recommendList} moreList={moreList} />
                <Recommend recommendList={recommendList} />
                {/* {enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null} */}
            </Scroll>
        </Wrapper>
    )
}

// state 状态树
const mapStateToProps = (state) => {
    return {
        // enterLoading: state.male.enterLoading,
        bannerList: state.male.bannerList,
        navbarsList: state.male.navbarsList,
        bestsellersList: state.male.bestsellersList,
        recommendList: state.male.recommendList,
        moreList: state.more.moreList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionCreators.getBannerList())
        },
        getNavbarsDataDispatch() {
            dispatch(actionCreators.getNavbarsList())
        },
        getBestsellersDataDispatch() {
            dispatch(actionCreators.getBestsellersList())
        },
        getRecommendDataDispatch() {
            dispatch(actionCreators.getRecommendList())
        },
        getMoreDataDispatch() {
            dispatch(getMoreList())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Male))