import React from 'react'
import {StyledImages,BestSellersBody, StyledTitle, StyledButton, Section} from './SellersStyled'

import GoldRing from '../../assets/images/GoldRing.jpg'
import DiamondRing from '../../assets/images/DiamondRing.jpg'
import RingBox from '../../assets/images/RingBox.jpg'

import DiamondRing2 from '../../assets/images/DiamondRing3.png'



function BestSellers() {
  return (
    <Section>
        <StyledTitle>Veja nossos produtos <br /> mais vendidos</StyledTitle>
        <BestSellersBody>
        <StyledImages> 
        <img className='DiamondRing' src={DiamondRing} alt="" />
        <img className='RingBox' src={RingBox} alt="" />
        <img className='DiamondRing2' src={DiamondRing2} alt="" />
        <img className='GoldRing' src={GoldRing} alt="" />
        </StyledImages>
     </BestSellersBody>
    <StyledButton>
        <button>Ver mais produtos</button>
    </StyledButton>
    </Section>
  )
}

export default BestSellers
