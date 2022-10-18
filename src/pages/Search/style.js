import styled from "styled-components";



export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;  
    background:#fbf1f2;
    bottom: ${props => props.play > 0 ? '3rem' : 0};
    width: 100%;
    z-index: 100;
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
    
`
export const HistoryWrapper = styled.div`
    margin:1rem 0.5rem 0 0.5rem;
    color:#1a1819;
    .header{
        display:flex;
        justify-content:space-between;
        padding-bottom:0.5rem;
        h2{
            /* color:#1a1819; */
            font-size:0.85rem;
            font-family:sans-serif;
        }
        .icon {
            /* color:#181818; */
            font-size:0.9rem;
            font-weight:800;
        }
    }
    .history {
        display:flex;
        justify-content:space-around;
        flex-wrap: wrap;
        li{ 
            margin-bottom:0.4rem;
            padding:0.4rem;
            background:#ffffff;
            font-size:0.75rem;
            font-family:sans-serif;
            font-weight:500;
            border-radius:0.7rem; 
        }
    }
`
export const FoundWrapper = styled.div`
    margin:0 0.5rem 0.75rem 0.5rem;
    color:#1a1819;
    .header{
            display:flex;
            justify-content:space-between;
            padding-bottom:0.5rem;
            h2{
                /* color:#1a1819; */
                font-size:0.85rem;
                font-family:sans-serif;
            }
            .icon {
                /* color:#181818; */
                font-size:0.9rem;
                font-weight:800;
            }
    }
    .found {
        display:flex;
        justify-content:space-around;
        flex-wrap: wrap;
        li{ 
            margin-bottom:0.4rem;
            padding:0.4rem;
            background:#ffffff;
            font-size:0.75rem;
            font-family:sans-serif;
            font-weight:500;
            border-radius:0.7rem; 
        }
    }

`
export const ListWrapper = styled.div`
    background-color: #fff;
    margin: 0.5rem ;
    border-radius:1rem;
    /* color:red; */
    .adm-tabs-content {        
        .item {
        margin-bottom:0 0 0.3rem 0;
        height:2rem;
        &:nth-child(-n+3){
                    .id {
                        background:#ed424b;
                        color:#fff;
                    }
                }
        &:nth-child(n+4){
           p{
            color:#fff;
           }
        }
        .header{
            display:flex;
            justify-content:space-between;
            .left{
                font-size:0.7rem;
                font-family:Serif;
                font-weight:500;
                display:flex;               
                div {
                    margin-right:0.3rem;
                }
                .id {
                    width:1rem;
                    border-radius:0.3rem 0 0.3rem 0;
                }

            }
        }
        p{
            font-size:0.6rem;
            font-family:Sans-serif;
            padding-left:0.2rem;
            color: #969BA3;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    }
    }
    
    
`
export const ShowWrapper = styled.div`
    display: ${props => props.show ? "" : "none"};
`