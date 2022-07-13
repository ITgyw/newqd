import styled from "styled-components";

export const Wrapper = styled.div`
    .module{
        
        padding:0.6rem;
        margin: 0 0 0.4rem 0;
   
    .item{
        img{
            width: 4rem;
        }
        .content{
            width: 4.2rem;
        }
        
    }
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
    .swiper-container { 
        /* padding:0 0.45rem;        */
        .box {
            margin:0 0.4rem 0 0;
        }
        .swiper-slide{ 
            margin:0 0.4rem 0 0;
            display: flex;
             
            .navlink{
                width:20%;
                margin:0 0.5rem;
            }  
            .item {
                img{
                    width:3.71rem;
                    height:4.90rem;
                }
            }
            .content {
                .title{
                    width:3.71rem;
                    height:2.1rem;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    color:#33373D;
                    font-size:0.73rem;
                }
                .type{
                    width:3.71rem;
                    color: #969ba3;
                    font-size: 0.67rem;
                }
            }
    }
    }
    }
    
`