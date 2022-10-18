import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;  
    background-color:#fbf1f2;
    .header {
        display:flex;
        margin:1rem 0.8rem 0.75rem 0.8rem;
        align-items:center;
        .header-title {
            font-size: 1rem;
            color:#19191b ;
            font-weight: 500;
            font-family:sans-serif;
        }
        .Box {
            flex:1;
            margin:0 1.5rem;
            width:40%;
            height:1.5rem;
            background-color:#fff;
            display:flex;
            align-items:center;
            border-radius:3rem;
            padding-left:0.6rem;
            .icon-sousuo {
                font-size:1rem;
            }
            .box {
                flex:1;
                width:60%;
                border:0;
                color:#808080;
            }
        }
        .icon {
            /* padding-right:0.5rem; */
            .icon-shizhong{
                margin-right:0.2rem;
                font-size:1rem;
                font-weight:700;
            }
            .icon-gengduo{
                margin-left:0.2rem;
                font-size:1rem;
                font-weight:700;
            }
        }
    }
`
export const BookWrapper = styled.div`
    margin-top:1rem;
    height:100%;
    background-color: #fff;
    border-radius:1rem;
    padding-top:1rem;
    li {
        .item {
            margin:0 0.4rem 0.4rem 0.7rem;
            display:flex;
            img {
                border-radius:0.3rem;
                width:3.5rem;
            }
            .content {
                margin:0.2rem 0 0.2rem 0.8rem;
                text-align:left;
                width:100%;
                .title {
                    display:flex;
                    font-size:0.8rem;
                    margin:0.1rem 0 0.3rem 0;
                    justify-content:space-between;
                    .iconfont{
                        background-color:#fff;
                        border:none;
                        margin-right:0.4rem;
                    }
                }
                .author {
                    font-size:0.7rem;
                    margin:0.2rem 0;
                }
                .ell {
                    font-size:0.7rem;
                    margin:0.2rem 0;
                }
            }
            

        }
    }
`