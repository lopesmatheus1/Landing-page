import React from 'react'

import Img1 from '../../assets/images/ngc72y030044.jpg'
import {Link, Text, Title, Img, FlexContainer, Section, Container, Content} from './style'

function Products() {
  return (
    <Section>
      <Container>

      <div style={{marginBottom:'30px'}}>
    <Img src={Img1} alt="" />
    <FlexContainer>
      <Content>
        <Title>Atemporal</Title>
        <Text>Pedra central com aro em platina com diamante.</Text>
        <Link href="">Anel Ceci</Link>
      </Content>
      <Content>
        <Title>Clássico</Title>
        <Text>Anel de noivado em platina com diamante em lapidação oval</Text>
        <Link href="">Anel Beatriz</Link>
      </Content>
    </FlexContainer>
    </div>

    <Content>
        <Title>MOMENTOS INESQUECÍVEIS</Title>
        <Text>Quando as palavras não são suficientes para expressar o que sentimos, nossas coleções de joias deslumbrantes podem ser a solução perfeita!</Text>
        <Img src={Img1}alt="" />
    </Content>

      </Container>
    </Section>
  )
}

export default Products
