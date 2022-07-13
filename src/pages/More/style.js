import styled from "styled-components";

export const Wrapper = styled.div`
    .module {
        .module-header{
            padding:0.62rem 0.5rem 0.56rem 0.5rem;
            border: 0 0 1px 0;
            display:flex;
            justify-content: space-between;
            
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
                    i{
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
                    p{
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