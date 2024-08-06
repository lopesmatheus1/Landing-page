import React from 'react'
import {QuestionAnswer } from '../../components'
import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`

const Section = styled.section`
  min-height: 70vh;
  padding: 20px;
  h2{
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 300;
    font-size: 32px;
  }
  p{
    margin-right: 40px;
    font-size: 18px;
  }

  @media ${breakpoints.sm} {
    text-align: left;
    h2{
      font-size: 18x;
    }
    p{
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
`

function Querys() {
  return (
    <Section>
        <h2>Principais dúvidas</h2>
        <p>Tire suas dúvidas ou entre em contato com nosso suporte</p>
        <StyledDiv>
        <QuestionAnswer></QuestionAnswer>
        </StyledDiv>
    </Section>
  )
}

export default Querys
