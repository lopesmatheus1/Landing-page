import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const Section = styled.section`
  padding:40px;
  min-height: 25vh;
  text-align: center;
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  
  h2{
    font-size: 28px;
    font-weight: 400;
  }
  h3{
    font-size: 24px;
    font-weight: 600;
  }
  p{
    text-align:'left'
  }

  @media ${breakpoints.usm} {
    max-width: 250px;
    h2{
      text-align: center;
    }
    h3{
      text-align: center;
    }
    p{
      text-align: left;
    }
  }

`
const DivButton = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;

  @media ${breakpoints.usm} {
    flex-direction: column;
  }
`

export {DivButton, StyledDiv, Section}