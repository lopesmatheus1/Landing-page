import styled from "styled-components";

const PriceCard = styled.div`
    width: 350px;
    border: 1px solid #abaeb3;
    height: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    h2{
        font-size: 32px;
        font-weight: 400;
        color: #525253;
    }
    h3{
        font-weight: 500;
        font-size: 40px;
    }
    h4{
        font-weight: 400;
        font-size: 24px;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
   padding: 40px;
`
const StyledSection = styled.section`
    min-height: 50vh;
   
`
export {StyledSection, Container, PriceCard}