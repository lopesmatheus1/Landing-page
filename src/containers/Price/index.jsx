import React from 'react'
import {StyledSection, Container, PriceCard} from './style'
import { WhiteButton } from '../../components'

function Price() {

    const PriceData = [
        {
            price:'200',
            type:'Básico',
        },
        {
            price:'300',
            type:'Intermediário',
        },
        {
            price:'500',
            type:'Elegance',
        },
    ]

  return (
    <StyledSection >
        <Container>
      {PriceData.map((index) => (
        
            <PriceCard>
              <h2>{index.type}</h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4>R$</h4> <h3>{index.price}</h3>
              </div>
              <WhiteButton> Aproveite</WhiteButton>
            </PriceCard>
        
      ))}
      </Container>
    </StyledSection>
  );
}

export default Price
