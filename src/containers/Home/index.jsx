import React from 'react'
import {StyledHome, Div} from './styles'
import {SaberMais} from '../../components'



function Hero() {
  return (
    <section >

      <StyledHome>
        <Div>
          <div>
              <h1>Viva o Amor</h1>
              <p>Eternize a sua história através de uma peça única, feita sob medida, com as<br/>joias de diamante do mais alto padrão.</p>
              <SaberMais/>
          </div>
        </Div>
      </StyledHome>
    </section>
  )
}

export default Hero
