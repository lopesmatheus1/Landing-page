import React from 'react'
import { WhiteButton } from '../../components'
import {DivButton, StyledDiv, Section} from './style'

function Promo() {
  return (
    <Section>
      
        <StyledDiv>
          <h2>
            Nossa promoção não dura para sempre. <br /> Por isso, corra e comece a
            comprar agora.
          </h2>

          <h3>Manutenção Eterna</h3>
          <p>
            Você pode polir e limpar o seu diamante sempre que quiser sem nenhum
            custo extra.
          </p>

          <h3>Tenha um Especialista</h3>
          <p>
            Tenha atendimento especializado. Nosso time é formado por
            especialistas em todas as etapas.
          </p>

          <DivButton>
            <WhiteButton>Comprar</WhiteButton>
            <WhiteButton>Saber Mais</WhiteButton>
          </DivButton>
        </StyledDiv>    
    </Section>
  );
}
export default Promo