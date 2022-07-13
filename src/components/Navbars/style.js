import styled from "styled-components";

export const NavSwrapper = styled.div`
  .nav{
    margin: 0.25rem 0 0 0;
    padding: 0.25rem  0.25rem 0 0.25rem;
    background-color: #f4f5f7;
    width:100%;
    height:4rem;
    .nav-item{
      border-radius: 0.5rem;
      background-color: #fff;
      display:flex;
      justify-content: space-around;      
      margin: 0 auto;
      padding: 0.05rem 0;
      a{
        display:inline-block;
        width: 3.15rem;
        height: 3.275rem;
        text-align: center;
       .box{
          margin:0 auto;
          padding:0.5rem 0;
          img{
            width:1.3rem;
            height:1.3rem;
            margin: 0 auto;
          }
          h4{
            color: #33373D;
            font-size:0.675rem;
          }
       }
      }
      
    }
    
  }
  
`