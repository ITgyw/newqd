import styled from "styled-components";

export const Wrapper = styled.div`
        position: relative;
        /* padding-top:2rem; */
       
        width: 100%;
        z-index: 1;
        overflow: hidden;
        transform-origin: right bottom;
        /* CSSTranstion 过度类型给children  */
        &.fly-enter,&.fly-appear {
            opacity: 0;
            /* 启用GPU加速 */
            transform: translate3d(100%, 0, 0);
        }
        &.fly-enter-active, &.fly-apply-active {
            opacity: 1;
            transition: all .3s;
            transform: translate3d(0, 0, 0);
        }
        &.fly-exit {
            opacity: 1;
            transform: translate3d(0,0,0)
        }
        &.fly-exit-active {
            opacity: 0;
            transition: all .3s;
            transform: translate3d(100%, 0, 0);
        }
    .module {
        
        .module-header{
            padding:0.62rem 0.5rem 0.56rem 0.5rem;
            border: 0 0 1px 0;
            display:flex;
            justify-content: space-between;
            /* position:fixed;
            top:0;
            left:0;
            z-index:2; */

            .nav{

                display: flex;
                justify-items:center;
                .icon  {
                    
                    margin:0.05rem 1rem 0 0;
                    i{
                        font-size:0.9rem;
                    }
                }
                .title {
                    font-family:sans-serif;
                    color:33373D;
                    font-size:0.70rem;
                    
                }
            }
            .bar{
                display:flex;
                justify-items:center;
                .icon1 {
                    padding-bottom:0.05rem;
                    .iconfont {
                        font-size:1.2rem;
                    }
                }
                .icon2 {
                    margin:0 0.5rem;
                    padding-top:0.07rem;
                    i {
                        font-size:0.8rem;
                    }
                }
            }
        }
        .book {
            li{                                 
                .item {
                    margin:0 0.3rem 0.3rem 0.3rem;
                    display:flex;
                    border: 0 0 1px 0 ;
                    /* border-color:#33373D; */
                    .lazy {
                        margin: 0 0.4rem 0 0;
                        img{
                        width: 3.71rem;
                        height: 4.95rem;
                        }                          
                    }
                    .content {
                            .title{
                                font-family:sans-serif;
                                color:#33373D;
                                font-size:0.8rem;
                                font-weight:bold;
                                text-align:left;
                            }
                            .text{
                                margin: 0.5rem 0 0 0;
                                color: #969BA3;
                                font-size:0.78rem;
                                display: -webkit-box;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                            }
                            .label{
                                margin: 0.5rem 0 0.2rem 0;
                                display:flex;
                                .mear{
                                    text-align:left;
                                    flex:1;
                                    color: #969BA3;
                                    font-size:0.73rem;
                                    }
                                .type{
                                    color: #969BA3;
                                    font-size:0.73rem;
                                }
                            }
                           
                        }
                }
                    
            }
        }
    }
`