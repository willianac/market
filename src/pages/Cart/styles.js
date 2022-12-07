import styled from "styled-components";

export const Main = styled.main `
    width : 50%;
    margin : auto;
    padding : 20px;
`

export const Header = styled.header`
    position : relative;
    height : 60px;
    display : flex;
    align-items : center;
    > h1 {
        margin : auto;
        font-size : 42px;
    }
`

export const TotalContainer = styled.section `
    width : 50%;
    margin : 80px auto auto;
    > div {
        display : flex;
        align-items : center;
        justify-content : space-between;
    }
     h1 {
        font : bold 30px Helvetica;
        font-weight : 900;
    }
     span {
        font-size : 26px
    }
`