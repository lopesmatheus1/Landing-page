import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Header = styled.header`
background-color: #000000eb;
display: flex;
align-items: center;
justify-content: space-between;

@media ${breakpoints.bg} {

    justify-content: center;
    nav{
        display: none;
    } 
    button{
        display: none;
    }   
}

h2{
    font-size: 26px;
    font-weight: 400;
    color: #FFD700;
}

`

const Nav = styled.nav`
display: flex;
gap: 35px;

a{
    color: #FFD700;
    text-decoration: none;
    font-size: 18px;
    font-weight: 300;
    transition: .8s;

    &:hover{
        color: #CCCCCC;
        transform:scale(1.05)
    }
}
`
export {Header, Nav}