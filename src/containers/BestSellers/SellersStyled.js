import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints';

const BestSellersBody = styled.div`
   width: 100%;
   padding: 20px;
   display: flex;
   justify-content: center;
   
   `

const StyledImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  overflow: hidden;
  
  position: relative;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 1rem;
    width: auto;
    height: 300px;
    transition: .9s;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);
    
    &:hover{ 
      cursor: pointer;
      transform: scale(1.14);
      
      
    }
  }


`;
const StyledButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 400px;
        background-color: white;
        border: groove black;
        font-size: 22px;
        padding: 2px ;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            background-color: black;
            color: white;
            transition: .8s;
            transform: scale(1.05);
        }
    }

    @media ${breakpoints.sm} {
      width: 250px;
    }
`
const StyledTitle = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: 200;
    margin-top: 40px;
`

const Section = styled.section`
  min-height: 80vh;
`

export {StyledImages,BestSellersBody, StyledTitle, StyledButton, Section}