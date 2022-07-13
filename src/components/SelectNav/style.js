import styled from "styled-components";

export const Wrapper = styled.div`
    .header {
        color:f6f7f9;
        display: flex;
        padding: 0.62rem 0 0.56rem;
        .logo-h {
            flex: 1;
            text-align: left;
            color:#ed424b;
            .logo {
                text-align:center;
                font-weight:700;
            }
        }
        .btn-group {

            flex:1;
            width:2rem;
            height:1.3rem;
            border: 1px double #C20C0C;
            border-radius:4px;
            a{  
                display:inline-block;
                width: 50%;
                height:100%;
                text-align:center;
                line-height:1.3rem;
                font-size:0.73rem;
                font-weight:400;
                color: #C20C0C;
                &.active {
                    color:#fff;
                    background-color: #C20C0C;
                    }
            }
        }
        .search {
            flex: 1;
            text-align: right;
            width:2rem;
            height:1.3rem;
            /* position: absolute; */
            color:#ed424b;
            .icon-sousuo  {
                display:inline-block;
                width: 50%;
                height:100%;
                text-align:center;
                line-height:1.3rem;
                font-size:1.5rem;
                font-weight:200;
                color: #C20C0C;
            }
        }
    }
`