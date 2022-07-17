import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;  
    background:#fbf1f2;
    .SearchBox {
        margin:1rem 0.5rem 0.75rem 0.5rem;
        display:flex;
        justify-content:space-between;
        /* justify-items:center; */
        align-items:center;
        .Box{
            width:15rem;
            height:2rem;
            background: #ffffff;
            border-radius: 3rem;
            display:flex;
            align-items:center;
            padding-left:0.6rem;
            .icon-sousuo{
                font-size:1.4rem;
                font-weight:800;
            }
            .box{
                height:100%;
                width:80%;
                border:0;
                color:#cccccc;
                font-size:0.75rem;
                padding:auto auto;
            }
        }
        .back{
            color:#808080;
            font-size:0.85rem;

        }
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
    .item {
        margin-bottom:0 0 0.3rem 0;
        height:2rem;
        .header{
            display:flex;
            justify-content:space-between;
            .left{
                font-size:0.7rem;
                font-family:Serif;
                font-weight:500;
                span {
                    margin-right:0.3rem;
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
`