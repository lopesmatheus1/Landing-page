import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Section = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    
  
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1280px;

    @media ${breakpoints.md}{
      flex-direction: column;
    }
`

const FlexContainer = styled.div`
  display: flex;
  max-width: 360px;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;
`;

const Img = styled.img`
border-radius: 25px;
width: 343px;
height: auto;

@media ${breakpoints.sm} {
  width: 280px;
}
`;

const Title = styled.h2`
font-weight: 300;
`;

const Text = styled.p`
font-size:16px;
color: #666464;
font-weight: 500;
`;

const Link = styled.a`

color: black;
font-size: 22px;
font-weight: 500;
padding: 5px;
&:hover{

    color: #5e5e5e;
    transition: .8s;
    transform: scale(1.05);
    border-radius: 20px;
}
`;

export {Link, Text, Title, Img, FlexContainer, Section, Container, Content}