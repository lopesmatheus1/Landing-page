import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const MyStyledButton = styled.button`
padding: 5px 10px;
width: 10em;
background-color: #000000eb;
border-radius: .5em;
border: 2px solid #FFD700;
cursor: pointer;
font-size: 16px;
transition: .8s;
color: #FFD700;

&:hover{
    background-color: black;
    color: #CCCCCC;
    border: groove #CCCCCC;
    transform: scale(1.05);
}
`
const SaibaMaisButton = styled.button`
padding: 7px 10px;
width: 10em;
border-radius: .5em;
cursor: pointer;
font-size: 16px;
transition: .8s;
border: none;
background-color: #FFA221;

&:hover{
    transform: scale(1.05);
    background-color: #FFc221
    
}
`

const ComprarButton = styled.button`
padding: 7px 10px;
width: 10em;
border-radius: .5em;
cursor: pointer;
font-size: 16px;
transition: .8s;
border: none;
background-color: #FFFF;
border: groove black;


&:hover{
    transform: scale(1.05);
    background-color: gray;
    
}

`

const Button = styled.button`
width: 700px;
height: 70px;
padding: 0 20px;
text-align: left;
background-color: black;
color: white;
border-radius: 10px;
cursor: pointer;
font-size: 16px;
`

/* Estilização das perguntas FAQ */

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Question = styled.h3`
  margin: 0;
  font-size: 1.2em;
  font-weight: 400;
  cursor: pointer;
`;

const Answer = styled.p`
  margin: 0;
  padding: 0.5em 0;
  font-size: 1em;
  color: #555;
`;

const StyledSummary = styled.summary`
  list-style: none;
  cursor: pointer;
  max-width: 500px;
  padding: 20px 50px;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 20px;
  margin: 5px 0;
  transition: background-color 2s ease;
  display: flex;
  flex-direction: row-reverse;
  gap: 30px;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: black;
  }
  
  &::-webkit-details-marker {
    display: none;
  }

  &::before {
    content: '▼'; /* Seta personalizada */
    font-size: 0.8em;
    margin-right: 10px; /* Espaço entre a seta e o texto */
  }

  &[open]::before {
    content: '▲'; /* Seta invertida quando aberto */
  }

  @media ${breakpoints.sm} {
     padding: 15px;

    h3{
      font-size: 15px;
    }
  }
`;


/* Estilização das perguntas FAQ */
export {MyStyledButton,SaibaMaisButton, ComprarButton, Button, Container, Question, Answer, StyledSummary}