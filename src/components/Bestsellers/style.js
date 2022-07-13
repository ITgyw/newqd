import styled from "styled-components";

export const Wrapper = styled.div`
    .module{
        /* border-radius: 5rem; */
        padding:0.6rem;
        margin: 0 0 0.4rem 0;
        .nav {
            margin: 0 0 1rem 0.3rem;
            display:flex;
            justify-content:space-between;
            h2{
                color: #33373D;
                font-size:0.8rem;
                font-weight:700;
            }
            .icon {
                display:flex;
                h2{
                    color: #969BA3;
                    font-size:0.687rem;
                    text-align:center;
                }
                p{
                    padding:0.1rem 0 0.2rem 0;
                }
            }
        }
        .book {
            li{
                .item {
                    margin:0 0.3rem 0.3rem 0.3rem;
                    display:flex;
                    p{
                        margin: 0 0.4rem 0 0;
                        img{
                        width: 3.71rem;
                        height: 4.95rem;
                        }                          
                    }
                    .content {
                            .title{
                                color:#33373D;
                                font-size:0.8rem;
                                font-weight:bold;
                            }
                            p{
                                color: #969BA3;
                                font-size:0.78rem;
                                display: -webkit-box;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                            }
                            .label{
                                margin: 0.9rem 0 0.2rem 0;
                                display:flex;
                                .mear{
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