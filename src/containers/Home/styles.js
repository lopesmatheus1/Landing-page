import styled from "styled-components";
import Img from '../../assets/images/HomeImg1.jpg'
import breakpoints from "../../styles/breakpoints";

const StyledHome = styled.div`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) 99%), url(${Img}) no-repeat center/cover;
  background-size: cover;
  background-position: center center;
  background-position:center;
  background-repeat: no-repeat; 
  min-height: 50vh;
  height: 120vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: black; 
  flex-direction: column;
  text-align: center;

  h1 {
    margin-top: 20px;
    font-size: 5rem;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }


`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 50px;
  height: 200vh;
  h2{
    font-size: 20px;
    font-weight: 500;
  }

  @media ${breakpoints.sm}{
    padding: 20px;
    h1{
      font-size: 52px;
    }
  }
`


export {StyledHome,Div}