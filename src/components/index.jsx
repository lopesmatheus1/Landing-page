import React from 'react'
import {MyStyledButton,SaibaMaisButton, ComprarButton, Container, Question, Answer, StyledSummary} from './styles'

import { useState } from 'react'

function MyButton() {
  return (
    <MyStyledButton>Comprar</MyStyledButton>
  )
}

function SaberMais(){
    return(
        <SaibaMaisButton>Saiba mais</SaibaMaisButton>
    )
}

const WhiteButton = (props) => {
  return (
      <ComprarButton>
          {props.children}
      </ComprarButton>
  );
};


const QuestionAnswer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faq = [
    { question: "Quanto custa o produto?", answer: "O preço varia conforme o modelo e a configuração escolhida." },
    { question: "Quanto tempo demora para chegar?", answer: "O prazo de entrega é de 5 a 10 dias úteis, dependendo da localização." },
    { question: "Onde encontro o código de rastreio?", answer: "Você receberá o código de rastreio por e-mail após a confirmação do envio." },
    { question: "Como funciona a política de troca?", answer: "Você pode solicitar a troca em até 30 dias após a compra, desde que o produto esteja em perfeito estado." },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      {faq.map((item, index) => (
        <details key={index} open={activeIndex === index} onClick={() => toggleAnswer(index)}>
          <StyledSummary>
            <Question>{item.question}</Question>
          </StyledSummary>
          <Answer>{item.answer}</Answer>
        </details>
      ))}
    </Container>
  );
};



export {MyButton, SaberMais, WhiteButton,  QuestionAnswer}
